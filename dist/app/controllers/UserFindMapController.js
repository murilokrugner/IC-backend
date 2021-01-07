"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _File = require('../models/File'); var _File2 = _interopRequireDefault(_File);
var _servicesProviders = require('../models/servicesProviders'); var _servicesProviders2 = _interopRequireDefault(_servicesProviders);

class UserFindMapController {
  async index(req, res) {
    const user = await _servicesProviders2.default.findOne({
      include: [
        {
          model: _Users2.default,
          as: 'provider',
          attributes: ['id', 'name','mobile_phone',
          'address','number_address','neighborhood_address'],
          where: {
            id: req.query.id,
          },
          include: [
            {
              model: _File2.default,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        }
      ],
    });

    return res.json(user);
  }
}

exports. default = new UserFindMapController();
