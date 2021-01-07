"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class ConfirmFirstAccessControler {
  async update(req, res) {
    const user = await _Users2.default.findByPk(req.query.id);

    await user.update({
      first_access: "1",
    });

    return res.json({ok: "ok"});
  }
}

exports. default = new ConfirmFirstAccessControler();
