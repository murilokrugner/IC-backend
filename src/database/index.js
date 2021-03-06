import Sequelize from "sequelize";

import databaseConfig from "../config/database";

import Users from "../app/models/Users";
import Services from "../app/models/Services";
import servicesProviders from "../app/models/servicesProviders";
import Order_Providers from "../app/models/Order_Providers";
import Order_Client from "../app/models/Order_Client";
import File from "../app/models/File";
import FilesServices from "../app/models/FilesServices";
import FileCover from "../app/models/FileCover";

import ProductCategory from "../app/models/ProductCategory";
import PaymentMethods from "../app/models/PaymentMethods";
import ProductUnits from "../app/models/ProductUnits";

import Products from "../app/models/Products";
import PaymentProduct from "../app/models/PaymentProduct";

import FilesProducts from "../app/models/FilesProducts";
import FilesDocumentProviders from "../app/models/FilesDocumentProviders";

const models = [
  Users,
  Services,
  servicesProviders,
  Order_Providers,
  Order_Client,
  File,
  FileCover,
  FilesServices,
  ProductCategory,
  PaymentMethods,
  ProductUnits,
  Products,
  PaymentProduct,
  FilesProducts,
  FilesDocumentProviders,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
