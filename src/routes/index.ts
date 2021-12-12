import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';

const router = Router();

const createUserController = new CreateUserController();

router.get('/', (request, response) =>
  response.json({ message: 'Api praSomar!' }),
);

router.post('/users', createUserController.handle);

export { router };
