"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class UserUpdateLocationController {
  async update(req, res) {
    const user = await _Users2.default.findByPk(req.body.id);

    user.update({
      location_x : req.body.location_x,
      location_y : req.body.location_y,
    });

    return res.json(user);
  }
}

exports. default = new UserUpdateLocationController();
