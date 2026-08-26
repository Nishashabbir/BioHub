const { body } = require('express-validator');

const createLinkValidation = [
  body('title')
    .trim()
    .notEmpty().withMessage('Link title is required')
    .isLength({ max: 60 }).withMessage('Title cannot exceed 60 characters'),
  body('url')
    .trim()
    .notEmpty().withMessage('URL is required')
    .isURL().withMessage('Please provide a valid URL'),
  body('platform')
    .optional()
    .trim()
];

const updateLinkValidation = [
  body('title')
    .optional()
    .trim()
    .notEmpty().withMessage('Link title cannot be empty')
    .isLength({ max: 60 }).withMessage('Title cannot exceed 60 characters'),
  body('url')
    .optional()
    .trim()
    .isURL().withMessage('Please provide a valid URL'),
  body('platform')
    .optional()
    .trim(),
  body('isActive')
    .optional()
    .isBoolean().withMessage('isActive must be a boolean')
];

module.exports = {
  createLinkValidation,
  updateLinkValidation
};
