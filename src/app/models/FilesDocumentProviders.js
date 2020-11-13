import Sequelize, { Model } from "sequelize";

class FilesDocumentProviders extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://192.168.2.101:3333/files/${this.path}`;
          },
        },
        name_verse: Sequelize.STRING,
        path_verse: Sequelize.STRING,
        url_verse: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://192.168.2.101:3333/files/${this.path_verse}`;
          },
        },
        name_your: Sequelize.STRING,
        path_your: Sequelize.STRING,
        url_your: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://192.168.2.101:3333/files/${this.path_your}`;
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

export default FilesDocumentProviders;
