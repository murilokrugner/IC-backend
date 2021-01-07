"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class StoreController {
  async index(req, res) {
    const store = await _Users2.default.findOne({
      where: {
        id: req.query.id,
      },
      attributes: ['store'],
    });

    return res.json(store);
  }

  async update(req, res) {
    const user = await _Users2.default.findByPk(req.query.id);

    await user.update({
      store: true,
    });

    return res.json(user);
  }
}

exports. default = new StoreController();
