import Sequelize, { Model } from 'sequelize';

class Products extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        forward_price: Sequelize.DECIMAL,
        cash_price: Sequelize.DECIMAL,
        brand: Sequelize.STRING,
        comments: Sequelize.STRING,
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

export default Products;
