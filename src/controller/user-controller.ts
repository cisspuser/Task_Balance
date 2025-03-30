import express from 'express';
import { validationResult } from 'express-validator';
import ValidationError from '../error/validation-error';
import { UserService } from '../service/user-service';

export async function UserController(
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
): Promise<void> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new ValidationError(errors.array());
    }

    const user = await UserService.updateBalance(Number(req.params['id']), req.body.amount);

    res.send(user);
}
