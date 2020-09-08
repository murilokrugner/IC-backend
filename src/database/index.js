import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Users from '../app/models/Users';
import Services from '../app/models/Services';
import Services_Providers from '../app/models/Services_Providers';
import Order_Providers from '../app/models/Order_Providers';
import Order_Client from '../app/models/Order_Client';

const models = [Users, Services, Services_Providers, Order_Providers, Order_Client];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
