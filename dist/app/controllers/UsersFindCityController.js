"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _servicesProviders = require('../models/servicesProviders'); var _servicesProviders2 = _interopRequireDefault(_servicesProviders);
var _Services = require('../models/Services'); var _Services2 = _interopRequireDefault(_Services);
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class UsersFindCityController {
  async index(req, res) {

    const {city} = req.query;

    const user = await _servicesProviders2.default.findAll({
      attributes: ['id'],
      include: [
        {
          model: _Services2.default,
          as: 'service',
          attributes: ['id', 'description'],
        },
          {
            model: _Users2.default,
            as: 'provider',
            attributes: ['id',['location_x', 'latitude'],['location_y', 'longitude'], ['name', 'title']],
            where: {
              city: city,
              provider: true,
            },
          },
        ],
    });

    if (!user) {
      return res.json({result: 'null'});
    }

    return res.json(user);
  }
}

exports. default = new UsersFindCityController();
