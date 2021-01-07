"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

var _Users = require('../app/models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _Services = require('../app/models/Services'); var _Services2 = _interopRequireDefault(_Services);
var _servicesProviders = require('../app/models/servicesProviders'); var _servicesProviders2 = _interopRequireDefault(_servicesProviders);
var _Order_Providers = require('../app/models/Order_Providers'); var _Order_Providers2 = _interopRequireDefault(_Order_Providers);
var _Order_Client = require('../app/models/Order_Client'); var _Order_Client2 = _interopRequireDefault(_Order_Client);
var _File = require('../app/models/File'); var _File2 = _interopRequireDefault(_File);
var _FilesServices = require('../app/models/FilesServices'); var _FilesServices2 = _interopRequireDefault(_FilesServices);
var _FileCover = require('../app/models/FileCover'); var _FileCover2 = _interopRequireDefault(_FileCover);

var _ProductCategory = require('../app/models/ProductCategory'); var _ProductCategory2 = _interopRequireDefault(_ProductCategory);
var _PaymentMethods = require('../app/models/PaymentMethods'); var _PaymentMethods2 = _interopRequireDefault(_PaymentMethods);
var _ProductUnits = require('../app/models/ProductUnits'); var _ProductUnits2 = _interopRequireDefault(_ProductUnits);

var _Products = require('../app/models/Products'); var _Products2 = _interopRequireDefault(_Products);
var _PaymentProduct = require('../app/models/PaymentProduct'); var _PaymentProduct2 = _interopRequireDefault(_PaymentProduct);

var _FilesProducts = require('../app/models/FilesProducts'); var _FilesProducts2 = _interopRequireDefault(_FilesProducts);
var _FilesDocumentProviders = require('../app/models/FilesDocumentProviders'); var _FilesDocumentProviders2 = _interopRequireDefault(_FilesDocumentProviders);

const models = [
  _Users2.default,
  _Services2.default,
  _servicesProviders2.default,
  _Order_Providers2.default,
  _Order_Client2.default,
  _File2.default,
  _FileCover2.default,
  _FilesServices2.default,
  _ProductCategory2.default,
  _PaymentMethods2.default,
  _ProductUnits2.default,
  _Products2.default,
  _PaymentProduct2.default,
  _FilesProducts2.default,
  _FilesDocumentProviders2.default,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

exports. default = new Database();
