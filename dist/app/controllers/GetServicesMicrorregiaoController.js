"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _servicesProviders = require('../models/servicesProviders'); var _servicesProviders2 = _interopRequireDefault(_servicesProviders);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _Services = require('../models/Services'); var _Services2 = _interopRequireDefault(_Services);
var _File = require('../models/File'); var _File2 = _interopRequireDefault(_File);
var _FileCover = require('../models/FileCover'); var _FileCover2 = _interopRequireDefault(_FileCover);

class GetServicesMicrorregiaoController {
  async index(req, res) {
    const services = await _servicesProviders2.default.findAll({
      attributes: ["id", "description", "price", "time"],
      include: [
        {
          model: _Users2.default,
          as: "provider",
          where: {
            microrregiao: req.query.microrregiao,
            provider: true,
          },
          attributes: ["id", "name", "location_x", "location_y"],
          order: ["name"],
          include: [
            {
              model: _File2.default,
              as: "avatar",
              attributes: ["id", "path", "url"],
            },
            {
              model: _FileCover2.default,
              as: "cover",
              attributes: ["id", "path", "url"],
            },
          ],
        },
        {
          model: _Services2.default,
          as: "service",
          where: {
            description: req.query.description,
          },
          attributes: ["id", "description"],
        },
      ],
    });

    return res.json(services);
  }
}

exports. default = new GetServicesMicrorregiaoController();
