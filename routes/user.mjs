import { Router } from 'express';
import { UserController } from '../controllers/users.mjs';

export const createUserRouter = ({ userModel }) => {
  const userRouter = Router();
  const userController = new UserController({ userModel });

  userRouter.get('/', userController.getAll);
  userRouter.post('/', userController.create);

  userRouter.get('/:id', userController.getById);
  // userRouter.put('/:id', userController.getById);
  userRouter.patch('/:id', userController.update);
  userRouter.delete('/:id', userController.delete);

  return userRouter;
}