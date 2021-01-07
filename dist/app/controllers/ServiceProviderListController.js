"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _servicesProviders = require('../models/servicesProviders'); var _servicesProviders2 = _interopRequireDefault(_servicesProviders);
var _Services = require('../models/Services'); var _Services2 = _interopRequireDefault(_Services);

class ServiceProviderListController {
  async index(req, res) {

    const services = await _servicesProviders2.default.findOne({
      where: {
        id_provider: req.query.provider,
        id: req.query.service,
      },
      attributes: ['id', 'description', 'price', 'time', 'complete'],
      include: [
        {
          model: _Services2.default,
          as: 'service',
          attributes: ['id', 'description'],
        },
      ],
    });

    return res.json(services);
  }
}

exports. default = new ServiceProviderListController();
