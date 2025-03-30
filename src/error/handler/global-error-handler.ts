import express from 'express';
import { ValidationError as SequelizeValidationError } from 'sequelize';
import ObjectNotFound  from '../object-not-found';
import ValidationError from '../validation-error';

export default function globalErrorHandler(
    error: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
): void {
    if (error instanceof SequelizeValidationError) {
        res.status(400).json({ error: error.message });
    } else if (error instanceof ValidationError) {
        res.status(400).json({ error: error.items });
    } else if (error instanceof ObjectNotFound) {
        res.status(404).json({ error: error.message });
    } else {
        //console.info(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
