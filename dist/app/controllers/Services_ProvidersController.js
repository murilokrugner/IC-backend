"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _servicesProviders = require('../models/servicesProviders'); var _servicesProviders2 = _interopRequireDefault(_servicesProviders);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _Services = require('../models/Services'); var _Services2 = _interopRequireDefault(_Services);

class Services_ProvidersController {
  async index(req, res) {

    const services = await _servicesProviders2.default.findAll({
      where: {
        id_provider: req.query.provider,
        //id_service: req.query.service,
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

    //tem que fazer inner join com services para pegar a descrição

    return res.json(services);
  }

  async store(req, res) {
    // validations
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      time: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // check user is provider
    const checkUserProvider = await _Users2.default.findOne({
      where: { id: req.body.id_provider, provider: true },
    });

    if (!checkUserProvider) {
      return res.status(401).json({ error: 'User is not a provider' });
    }

    const { description, id_provider, service, price, time, complete } = req.body;


    const getIdService = await _Services2.default.findOne({
      where: {
        description: service,
      },
    });

    const id_service = getIdService.id;

    const checkAvailability = await _servicesProviders2.default.findOne({
      where: {
        id_service: id_service,
        id_provider: id_provider,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Esse serviço já existe cadastrado' });
    }

    const upload = await _servicesProviders2.default.create({
      description,
      id_provider,
      id_service,
      price,
      time,
      complete,
    });

    return res.json(upload);
  }

  async update(req, res) {
    const service = await _servicesProviders2.default.findByPk(req.body.id);

    await service.update({
      description: req.body.description,
      price: req.body.price,
      time: req.body.time,
      complete: true,
    });

    return res.json(service);
  }

  async delete(req, res) {
    const response = await _servicesProviders2.default.destroy({
      where: {
        id: req.query.id,
      },
    });

    return res.json(response);
  }
}

exports. default = new Services_ProvidersController();
