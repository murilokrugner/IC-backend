"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class UsersCoordinatesController {
  async index(req, res) {
    const user = await _Users2.default.findOne({
      where: {
        id: req.query.id,
      },
      attributes: ['id',['location_x', 'latitude'],['location_y', 'longitude'], ['name', 'title']],
    });

    return res.json(user);
  }
}

exports. default = new UsersCoordinatesController();
