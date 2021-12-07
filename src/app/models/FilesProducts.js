import Sequelize, { Model } from "sequelize";

class FilesProducts extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://knowledgesoftware.kinghost.net:21046:21046/files/${this.path}`;
          },
        },
        imagePath: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://knowledgesoftware.kinghost.net:21046:21046/files/${this.path}`;
          },
        },
        main: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Products, {
      foreignKey: "id_product",
      as: "product",
    });
  }
}

export default FilesProducts;
