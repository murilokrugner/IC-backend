import Sequelize, { Model } from 'sequelize';

class FileCover extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return 'localhost:3333/files/tmp/uploads/files';
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

export default FileCover;
