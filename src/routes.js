import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

import multer from 'multer';
import multerConfig from './config/multer';

import UsersController from './app/controllers/UsersController';
import SessionController from './app/controllers/SessionController';
import ServicesController from './app/controllers/ServicesController';
import UsersDocumentController from './app/controllers/UsersDocumentController';
import Services_ProvidersController from './app/controllers/Services_ProvidersController';
import CountServicesProviderController from './app/controllers/CountServicesProviderController';
import FileController from './app/controllers/FileController';
import FileCoverController from './app/controllers/FileCoverController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/session', SessionController.store);

routes.post('/users', UsersController.store);

routes.post('/services', ServicesController.store);

routes.put('/usersDocument', UsersDocumentController.update);

routes.get('/services', ServicesController.index);

routes.post('/serviceProvider', Services_ProvidersController.store);

routes.get('/serviceProvider', Services_ProvidersController.index);

routes.delete('/serviceProvider', Services_ProvidersController.delete);

routes.get('/servicesProviderRoutes', CountServicesProviderController.index);

routes.post('/files', upload.single('file'), FileController.store);
routes.post('/files_cover', upload.single('file'), FileCoverController.store);

routes.use(authMiddleware);

export default routes;
