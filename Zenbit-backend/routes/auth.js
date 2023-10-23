import express from 'express';
import { createUserController } from '../controllers/userController.js';

const authRouter = express.Router();

authRouter.post('/auth', createUserController);


export default authRouter;