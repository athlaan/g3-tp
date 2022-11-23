import express from 'express';
import userController from '../controllers/userDataController.js';

const userRouter = express.Router();

userRouter.route('/users')
    .post(userController.postUserData)
    .get(userController.getUserData);


export default userRouter;
