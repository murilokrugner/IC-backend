"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Order_Providers = require('../models/Order_Providers'); var _Order_Providers2 = _interopRequireDefault(_Order_Providers);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class Order_ProvidersController {
  async index(req, res) {
    const orders = await _Order_Providers2.default.findAll({
      where: {
        id_provider: req.query.provider,
      },
      attributes: [],
    });

    //inner join

    return res.json(services);
  }

  async store(req, res) {
    // validations
    const schema = Yup.object().shape({
      id_provider: Yup.number().required(),
      id_user: Yup.number().required(),
      id_service: Yup.number().required(),
      obs: Yup.string().required(),
      finished: Yup.boolean().required(),
      paid: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // check name is exists
    const checkAvailability = await Services.findOne({
      where: {
        name: req.body.name,
        provider_id: req.userId,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Esse serviço já existe cadastrado' });
    }

    const { name, price, duration } = req.body;
    const { id } = checkUserProvider;
    const provider_id = id;

    const upload = await Services.create({
      name,
      price,
      duration,
      provider_id,
    });

    return res.json(upload);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      price: Yup.number(),
      duration: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, price, duration } = req.body;

    const { id } = req.params;

    const service = await Services.findByPk(id);

    if (name === service.name) {
      const nameExists = await Services.findOne({
        where: { name, price, duration },
      });
    }

    await service.update(req.body);

    return res.json({ service });
  }
}

exports. default = new Order_ProvidersController();
