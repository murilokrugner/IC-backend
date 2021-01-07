"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('./config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _UsersController = require('./app/controllers/UsersController'); var _UsersController2 = _interopRequireDefault(_UsersController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _ServicesController = require('./app/controllers/ServicesController'); var _ServicesController2 = _interopRequireDefault(_ServicesController);
var _UsersDocumentController = require('./app/controllers/UsersDocumentController'); var _UsersDocumentController2 = _interopRequireDefault(_UsersDocumentController);
var _Services_ProvidersController = require('./app/controllers/Services_ProvidersController'); var _Services_ProvidersController2 = _interopRequireDefault(_Services_ProvidersController);
var _CountServicesProviderController = require('./app/controllers/CountServicesProviderController'); var _CountServicesProviderController2 = _interopRequireDefault(_CountServicesProviderController);
var _FileController = require('./app/controllers/FileController'); var _FileController2 = _interopRequireDefault(_FileController);
var _FileCoverController = require('./app/controllers/FileCoverController'); var _FileCoverController2 = _interopRequireDefault(_FileCoverController);
var _ServiceProviderListController = require('./app/controllers/ServiceProviderListController'); var _ServiceProviderListController2 = _interopRequireDefault(_ServiceProviderListController);
var _GetImagesProfileController = require('./app/controllers/GetImagesProfileController'); var _GetImagesProfileController2 = _interopRequireDefault(_GetImagesProfileController);
var _FilesServicesController = require('./app/controllers/FilesServicesController'); var _FilesServicesController2 = _interopRequireDefault(_FilesServicesController);
var _VerifyServiceController = require('./app/controllers/VerifyServiceController'); var _VerifyServiceController2 = _interopRequireDefault(_VerifyServiceController);
var _ConfirmFirstAccessControler = require('./app/controllers/ConfirmFirstAccessControler'); var _ConfirmFirstAccessControler2 = _interopRequireDefault(_ConfirmFirstAccessControler);
var _ProductCategoryController = require('./app/controllers/ProductCategoryController'); var _ProductCategoryController2 = _interopRequireDefault(_ProductCategoryController);
var _PaymentMethodsController = require('./app/controllers/PaymentMethodsController'); var _PaymentMethodsController2 = _interopRequireDefault(_PaymentMethodsController);
var _ProductUnitsController = require('./app/controllers/ProductUnitsController'); var _ProductUnitsController2 = _interopRequireDefault(_ProductUnitsController);
var _ProductsController = require('./app/controllers/ProductsController'); var _ProductsController2 = _interopRequireDefault(_ProductsController);
var _PaymentProductController = require('./app/controllers/PaymentProductController'); var _PaymentProductController2 = _interopRequireDefault(_PaymentProductController);
var _FilesProductsController = require('./app/controllers/FilesProductsController'); var _FilesProductsController2 = _interopRequireDefault(_FilesProductsController);
var _ProductAddCategoryController = require('./app/controllers/ProductAddCategoryController'); var _ProductAddCategoryController2 = _interopRequireDefault(_ProductAddCategoryController);
var _StoreController = require('./app/controllers/StoreController'); var _StoreController2 = _interopRequireDefault(_StoreController);
var _FIleMainProductController = require('./app/controllers/FIleMainProductController'); var _FIleMainProductController2 = _interopRequireDefault(_FIleMainProductController);
var _CountProductsController = require('./app/controllers/CountProductsController'); var _CountProductsController2 = _interopRequireDefault(_CountProductsController);
var _FilesViewProductsController = require('./app/controllers/FilesViewProductsController'); var _FilesViewProductsController2 = _interopRequireDefault(_FilesViewProductsController);
var _ProductsIdController = require('./app/controllers/ProductsIdController'); var _ProductsIdController2 = _interopRequireDefault(_ProductsIdController);
var _UsersFindCityController = require('./app/controllers/UsersFindCityController'); var _UsersFindCityController2 = _interopRequireDefault(_UsersFindCityController);
var _UserFindMapController = require('./app/controllers/UserFindMapController'); var _UserFindMapController2 = _interopRequireDefault(_UserFindMapController);
var _UsersCoordinatesController = require('./app/controllers/UsersCoordinatesController'); var _UsersCoordinatesController2 = _interopRequireDefault(_UsersCoordinatesController);
var _UserUpdateLocationController = require('./app/controllers/UserUpdateLocationController'); var _UserUpdateLocationController2 = _interopRequireDefault(_UserUpdateLocationController);
var _GetServicesMicrorregiaoController = require('./app/controllers/GetServicesMicrorregiaoController'); var _GetServicesMicrorregiaoController2 = _interopRequireDefault(_GetServicesMicrorregiaoController);
var _PhotoDocumentYourController = require('./app/controllers/Documents/PhotoDocumentYourController'); var _PhotoDocumentYourController2 = _interopRequireDefault(_PhotoDocumentYourController);
var _PhotoDocumentVerseController = require('./app/controllers/Documents/PhotoDocumentVerseController'); var _PhotoDocumentVerseController2 = _interopRequireDefault(_PhotoDocumentVerseController);
var _PhotoDocumentController = require('./app/controllers/Documents/PhotoDocumentController'); var _PhotoDocumentController2 = _interopRequireDefault(_PhotoDocumentController);

const routes = new (0, _express.Router)();

const upload = _multer2.default.call(void 0, _multer4.default);

routes.post("/session", _SessionController2.default.store);

routes.post("/users", _UsersController2.default.store);
routes.get("/users", _UsersController2.default.index);
routes.put("/users", _UsersController2.default.update);

routes.post("/services", _ServicesController2.default.store);
routes.get("/services-providers", _UsersFindCityController2.default.index);

routes.put("/usersDocument", _UsersDocumentController2.default.update);

routes.get("/services", _ServicesController2.default.index);

routes.post("/serviceProvider", _Services_ProvidersController2.default.store);

routes.get("/serviceProvider", _Services_ProvidersController2.default.index);

routes.put("/serviceProvider", _Services_ProvidersController2.default.update);

routes.delete("/serviceProvider", _Services_ProvidersController2.default.delete);

routes.get("/servicesProviderRoutes", _CountServicesProviderController2.default.index);

routes.post("/files", upload.single("file"), _FileController2.default.store);
routes.post("/files_cover", upload.single("file"), _FileCoverController2.default.store);

routes.get("/serviceslist", _ServiceProviderListController2.default.index);

routes.get("/getImages", _GetImagesProfileController2.default.index);

routes.post(
  "/files_services",
  upload.single("file"),
  _FilesServicesController2.default.store
);
routes.get("/files_services", _FilesServicesController2.default.index);
routes.delete("/files_services", _FilesServicesController2.default.delete);

routes.get("/verifyservices", _VerifyServiceController2.default.index);

routes.put("/firstaccessconfirm", _ConfirmFirstAccessControler2.default.update);

routes.get("/productcategory", _ProductCategoryController2.default.index);
routes.post("/productcategory", _ProductCategoryController2.default.store);
routes.put("/productcategory", _ProductCategoryController2.default.update);

routes.get("/paymentmethods", _PaymentMethodsController2.default.index);
routes.post("/paymentmethods", _PaymentMethodsController2.default.store);

routes.get("/productunits", _ProductUnitsController2.default.index);
routes.post("/productunits", _ProductUnitsController2.default.store);

routes.get("/products", _ProductsController2.default.index);
routes.post("/products", _ProductsController2.default.store);
routes.put("/products", _ProductsController2.default.update);
routes.delete("/products", _ProductsController2.default.delete);

routes.get("/paymentproduct", _PaymentProductController2.default.index);
routes.post("/paymentproduct", _PaymentProductController2.default.store);
routes.delete("/paymentproduct", _PaymentProductController2.default.delete);

routes.get("/filesproducts", _FilesProductsController2.default.index);
routes.post(
  "/filesproducts",
  upload.single("file"),
  _FilesProductsController2.default.store
);
routes.delete("/filesproducts", _FilesProductsController2.default.delete);

routes.get("/filesviewproducts", _FilesViewProductsController2.default.index);

routes.post("/addcategoryproduct", _ProductAddCategoryController2.default.store);

routes.get("/store", _StoreController2.default.index);
routes.put("/store", _StoreController2.default.update);

routes.get("/mainProduct", _FIleMainProductController2.default.index);
routes.put("/mainProduct", _FIleMainProductController2.default.update);

routes.get("/mainCount", _CountProductsController2.default.index);

routes.get("/productId", _ProductsIdController2.default.index);

routes.get("/usersMap", _UserFindMapController2.default.index);

routes.get("/userCoordinates", _UsersCoordinatesController2.default.index);

routes.put("/user-location", _UserUpdateLocationController2.default.update);

routes.get("/services-microrregiao", _GetServicesMicrorregiaoController2.default.index);

routes.post(
  "/photo-document-your",
  upload.single("file"),
  _PhotoDocumentYourController2.default.store
);
routes.post(
  "/photo-document-verse",
  upload.single("file"),
  _PhotoDocumentVerseController2.default.store
);
routes.post(
  "/photo-document",
  upload.single("file"),
  _PhotoDocumentController2.default.store
);

routes.use(_auth2.default);

exports. default = routes;
