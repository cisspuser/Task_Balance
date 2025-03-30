import express from 'express';
import asyncHandler from 'express-async-handler';
import { UserController } from '../controller/user-controller';
import { UserValidator } from '../validator/user-validator';

export const router = express.Router();

router.patch('/:id/balance', UserValidator, asyncHandler(UserController));
