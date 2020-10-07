import Sequelize, { Model } from 'sequelize';

class FilesProducts extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://10.0.2.2:3333/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Products, { foreignKey: 'id_product', as: 'product' });
  }
}

export default FilesProducts;
