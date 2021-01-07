"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class PaymentProduct extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {

      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.PaymentMethods, { foreignKey: 'id_payment', as: 'payment' });
    this.belongsTo(models.Products, { foreignKey: 'id_product', as: 'product' });
  }
}

exports. default = PaymentProduct;
