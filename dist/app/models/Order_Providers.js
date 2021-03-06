"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Order_Providers extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_provider: _sequelize2.default.INTEGER,
        id_user: _sequelize2.default.INTEGER,
        id_service: _sequelize2.default.INTEGER,
        obs: _sequelize2.default.STRING,
        finished: _sequelize2.default.BOOLEAN,
        paid: _sequelize2.default.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'id_provider', as: 'provider' });
    this.belongsTo(models.Users, { foreignKey: 'id_user', as: 'user' });
    this.belongsTo(models.Services, { foreignKey: 'id_service', as: 'service' });
  }
}

exports. default = Order_Providers;
