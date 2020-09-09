import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

import multer from 'multer';
import multerConfig from './config/multer';

import UsersController from './app/controllers/UsersController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UsersController.store);

routes.use(authMiddleware);

export default routes;
