"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

class Users extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: _sequelize2.default.STRING,
        nickname: _sequelize2.default.STRING,
        email: _sequelize2.default.STRING,
        phone: _sequelize2.default.STRING,
        mobile_phone: _sequelize2.default.STRING,
        password: _sequelize2.default.VIRTUAL,
        password_hash: _sequelize2.default.STRING,
        location_x: _sequelize2.default.DECIMAL(19, 9),
        location_y: _sequelize2.default.DECIMAL(19, 9),
        document: _sequelize2.default.STRING,
        address: _sequelize2.default.STRING,
        number_address: _sequelize2.default.STRING,
        point_address: _sequelize2.default.STRING,
        neighborhood_address: _sequelize2.default.STRING,
        cep_address: _sequelize2.default.STRING,
        state_address: _sequelize2.default.STRING,
        city: _sequelize2.default.STRING,
        mesorregiao: _sequelize2.default.INTEGER,
        microrregiao: _sequelize2.default.INTEGER,
        provider: _sequelize2.default.BOOLEAN,
        type_document: _sequelize2.default.STRING,
        first_access: _sequelize2.default.STRING,
        store: _sequelize2.default.BOOLEAN,
        blocked: _sequelize2.default.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: "avatar_id", as: "avatar" });
    this.belongsTo(models.FileCover, { foreignKey: "cover_id", as: "cover" });
  }

  checkPassword(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
}

exports. default = Users;
