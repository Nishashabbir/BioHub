const { sendError } = require('../helpers/responseHelper');

const notFound = (req, res, next) => {
  return sendError(res, 404, `Not Found - ${req.originalUrl}`);
};

module.exports = notFound;
