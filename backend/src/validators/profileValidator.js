const { body } = require('express-validator');

const updateProfileValidation = [
  body('displayName')
    .optional()
    .trim()
    .notEmpty().withMessage('Display name cannot be empty')
    .isLength({ max: 50 }).withMessage('Display name cannot exceed 50 characters'),
  body('bio')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Bio cannot exceed 200 characters'),
  body('theme')
    .optional()
    .trim(),
  body('customDomain')
    .optional()
    .trim()
];

module.exports = {
  updateProfileValidation
};
