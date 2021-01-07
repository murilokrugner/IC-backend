"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Products extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        description: _sequelize2.default.STRING,
        forward_price: _sequelize2.default.DECIMAL,
        cash_price: _sequelize2.default.DECIMAL,
        brand: _sequelize2.default.STRING,
        comments: _sequelize2.default.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'id_provider', as: 'provider' });
    this.belongsTo(models.ProductUnits, { foreignKey: 'id_unit', as: 'unit' });
    this.belongsTo(models.ProductCategory, { foreignKey: 'id_category', as: 'category' });
  }
}

exports. default = Products;
