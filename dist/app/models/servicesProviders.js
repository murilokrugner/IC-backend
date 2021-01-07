"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class servicesProviders extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        description: _sequelize2.default.STRING,
        price: _sequelize2.default.DECIMAL,
        time: _sequelize2.default.STRING,
        complete: _sequelize2.default.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'id_provider', as: 'provider' });
    this.belongsTo(models.Services, { foreignKey: 'id_service', as: 'service' });
  }
}

exports. default = servicesProviders;
