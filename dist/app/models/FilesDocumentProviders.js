"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class FilesDocumentProviders extends _sequelize.Model {
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
        name_verse: _sequelize2.default.STRING,
        path_verse: _sequelize2.default.STRING,
        url_verse: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `http://knowledgesoftware.kinghost.net:21046/files/${this.path_verse}`;
          },
        },
        name_your: _sequelize2.default.STRING,
        path_your: _sequelize2.default.STRING,
        url_your: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `http://knowledgesoftware.kinghost.net:21046/files/${this.path_your}`;
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

exports. default = FilesDocumentProviders;
