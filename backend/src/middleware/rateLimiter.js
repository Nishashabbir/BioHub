// Simple in-memory rate limiter or placeholder
const { sendError } = require('../helpers/responseHelper');

const requestCounts = new Map();

const rateLimiter = (options = { windowMs: 15 * 60 * 1000, max: 100 }) => {
  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    
    if (!requestCounts.has(ip)) {
      requestCounts.set(ip, { count: 1, startTime: now });
      return next();
    }

    const clientData = requestCounts.get(ip);
    if (now - clientData.startTime > options.windowMs) {
      clientData.count = 1;
      clientData.startTime = now;
      return next();
    }

    clientData.count++;
    if (clientData.count > options.max) {
      return sendError(res, 429, 'Too many requests from this IP, please try again later.');
    }

    next();
  };
};

module.exports = { rateLimiter };
