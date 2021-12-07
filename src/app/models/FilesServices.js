import Sequelize, { Model } from "sequelize";

class FilesServices extends Model {
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
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: "id_provider", as: "provider" });
  }
}

export default FilesServices;
