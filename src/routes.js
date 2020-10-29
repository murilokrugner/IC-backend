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
import ServiceProviderListController from './app/controllers/ServiceProviderListController';
import GetImagesProfileController from './app/controllers/GetImagesProfileController';
import FilesServicesController from './app/controllers/FilesServicesController';
import VerifyServiceController from './app/controllers/VerifyServiceController';
import ConfirmFirstAccessControler from './app/controllers/ConfirmFirstAccessControler';
import ProductCategoryController from './app/controllers/ProductCategoryController';
import PaymentMethodsController from './app/controllers/PaymentMethodsController';
import ProductUnitsController from './app/controllers/ProductUnitsController';
import ProductsController from './app/controllers/ProductsController';
import PaymentProductController from './app/controllers/PaymentProductController';
import FilesProductsController from './app/controllers/FilesProductsController';
import ProductAddCategoryController from './app/controllers/ProductAddCategoryController';
import StoreController from './app/controllers/StoreController';
import FileMainProductController from './app/controllers/FileMainProductController';
import CountProductsController from './app/controllers/CountProductsController';
import FilesViewProductsController from './app/controllers/FilesViewProductsController';
import ProductsIdController from './app/controllers/ProductsIdController';
import UsersFindCityController from './app/controllers/UsersFindCityController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/session', SessionController.store);

routes.post('/users', UsersController.store);
routes.get('/users', UsersController.index);
routes.put('/users', UsersController.update);

routes.post('/services', ServicesController.store);
routes.get('/services-providers', UsersFindCityController.index);

routes.put('/usersDocument', UsersDocumentController.update);

routes.get('/services', ServicesController.index);

routes.post('/serviceProvider', Services_ProvidersController.store);

routes.get('/serviceProvider', Services_ProvidersController.index);

routes.put('/serviceProvider', Services_ProvidersController.update);

routes.delete('/serviceProvider', Services_ProvidersController.delete);

routes.get('/servicesProviderRoutes', CountServicesProviderController.index);

routes.post('/files', upload.single('file'), FileController.store);
routes.post('/files_cover', upload.single('file'), FileCoverController.store);

routes.get('/serviceslist', ServiceProviderListController.index);

routes.get('/getImages', GetImagesProfileController.index);

routes.post('/files_services', upload.single('file'), FilesServicesController.store);
routes.get('/files_services', FilesServicesController.index);
routes.delete('/files_services', FilesServicesController.delete);

routes.get('/verifyservices', VerifyServiceController.index);

routes.put('/firstaccessconfirm', ConfirmFirstAccessControler.update);

routes.get('/productcategory', ProductCategoryController.index);
routes.post('/productcategory', ProductCategoryController.store);
routes.put('/productcategory', ProductCategoryController.update);

routes.get('/paymentmethods', PaymentMethodsController.index);
routes.post('/paymentmethods', PaymentMethodsController.store);

routes.get('/productunits', ProductUnitsController.index);
routes.post('/productunits', ProductUnitsController.store);

routes.get('/products', ProductsController.index);
routes.post('/products', ProductsController.store);
routes.put('/products', ProductsController.update);
routes.delete('/products', ProductsController.delete);

routes.get('/paymentproduct', PaymentProductController.index);
routes.post('/paymentproduct', PaymentProductController.store);
routes.delete('/paymentproduct', PaymentProductController.delete);

routes.get('/filesproducts', FilesProductsController.index);
routes.post('/filesproducts', upload.single('file'), FilesProductsController.store);
routes.delete('/filesproducts', FilesProductsController.delete);

routes.get('/filesviewproducts', FilesViewProductsController.index);

routes.post('/addcategoryproduct', ProductAddCategoryController.store);

routes.get('/store', StoreController.index);
routes.put('/store', StoreController.update);

routes.get('/mainProduct', FileMainProductController.index);
routes.put('/mainProduct', FileMainProductController.update);

routes.get('/mainCount', CountProductsController.index);

routes.get('/productId', ProductsIdController.index);

routes.use(authMiddleware);

export default routes;
