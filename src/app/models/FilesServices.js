import Sequelize, { Model } from 'sequelize';

class FilesServices extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return 'localhost:3333/files/';
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default FilesServices;
