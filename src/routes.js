import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

import multer from 'multer';
import multerConfig from './config/multer';

import UsersController from './app/controllers/UsersController';
import SessionController from './app/controllers/SessionController';
import ServicesController from './app/controllers/ServicesController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/session', SessionController.store);

routes.post('/users', UsersController.store);

routes.post('/services', ServicesController.store);

routes.use(authMiddleware);

export default routes;
