import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

import multer from 'multer';
import multerConfig from './config/multer';

import UsersController from './app/controllers/UsersController';
import SessionController from './app/controllers/SessionController';
import ServicesController from './app/controllers/ServicesController';
import UsersDocumentController from './app/controllers/UsersDocumentController';
import Services_ProvidersController from './app/controllers/Services_ProvidersController'

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/session', SessionController.store);

routes.post('/users', UsersController.store);

routes.post('/services', ServicesController.store);

routes.put('/usersDocument', UsersDocumentController.update);

routes.get('/services', ServicesController.index);

routes.post('/serviceProvider', Services_ProvidersController.store);

routes.use(authMiddleware);

export default routes;
