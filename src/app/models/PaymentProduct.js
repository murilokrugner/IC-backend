import Sequelize, { Model } from 'sequelize';

class PaymentProduct extends Model {
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

export default PaymentProduct;
