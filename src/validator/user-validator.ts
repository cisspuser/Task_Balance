import { body, param } from 'express-validator';

export const UserValidator = [
    param('id').exists().toInt().isNumeric().withMessage('Id should be number'),
    body('amount')
        .exists()
        .withMessage('Amount is required')
        .toInt()
        .isNumeric()
        .withMessage('Amount should be number'),
];
