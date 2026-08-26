const { validationResult } = require('express-validator');
const { sendError } = require('../helpers/responseHelper');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map(err => err.msg);
    return sendError(res, 400, 'Validation Failed', extractedErrors);
  }
  next();
};

module.exports = { validateRequest };
