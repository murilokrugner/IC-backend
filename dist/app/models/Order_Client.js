"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Order_Client extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_provider: _sequelize2.default.INTEGER,
        id_service_provider: _sequelize2.default.INTEGER,
        obs: _sequelize2.default.STRING,
        finished: _sequelize2.default.BOOLEAN,
        paid: _sequelize2.default.BOOLEAN,
        price: _sequelize2.default.DECIMAL,
        time: _sequelize2.default.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'id_provider', as: 'provider' });
    this.belongsTo(models.servicesProviders, { foreignKey: 'id_service_provider', as: 'service' });
  }
}

exports. default = Order_Client;
