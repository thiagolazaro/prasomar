/* eslint-disable import/no-unresolved */
import { Router } from 'express';

import CreatePostController from '../controllers/CreatePostController';
import CreateUserController from '../controllers/CreateUserController';
import GetAllPostsController from '../controllers/GetAllPostsController';

const router = Router();

router.get('/', (request, response) =>
  response.json({ message: 'Api praSomar!' }),
);

router.post('/users', new CreateUserController().handle);

router.post('/posts', new CreatePostController().handle);
router.get('/posts', new GetAllPostsController().handle);

export { router };
