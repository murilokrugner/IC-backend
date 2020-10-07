import Sequelize, { Model } from 'sequelize';

class ProductCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default ProductCategory;
