"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class FilesProducts extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: _sequelize2.default.STRING,
        path: _sequelize2.default.STRING,
        url: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `http://knowledgesoftware.kinghost.net:21046/files/${this.path}`;
          },
        },
        imagePath: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `http://knowledgesoftware.kinghost.net:21046/files/${this.path}`;
          },
        },
        main: _sequelize2.default.BOOLEAN,
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

exports. default = FilesProducts;
