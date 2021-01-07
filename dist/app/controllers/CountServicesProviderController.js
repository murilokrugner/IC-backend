"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _servicesProviders = require('../models/servicesProviders'); var _servicesProviders2 = _interopRequireDefault(_servicesProviders);

class CountServicesProviderController {
  async index(req, res) {

    const services = await _servicesProviders2.default.findAndCountAll({
      where: {
        id_provider: req.query.provider,
      },
      attributes: ['id'],
    });

    return res.json(services);
  }
}

exports. default = new CountServicesProviderController();
