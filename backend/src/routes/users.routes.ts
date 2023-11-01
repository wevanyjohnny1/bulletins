import { AuthenticateUserController } from '@modules/accounts/useCases/AuthenticateUserUseCase/AuthenticateUserController';
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { Router } from 'express';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.post('/login', authenticateUserController.handle);

export { usersRoutes };
