"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _PaymentMethods = require('../models/PaymentMethods'); var _PaymentMethods2 = _interopRequireDefault(_PaymentMethods);

class PaymentMethodsController {
  async index(req, res) {
    const services = await _PaymentMethods2.default.findAll({
      attributes: ['id', 'description'],
    });

    return res.json(services);
  }

  async store(req, res) {
    // validations
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

      // check name is exists
    const checkAvailability = await _PaymentMethods2.default.findOne({
      where: {
        description: req.body.description,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Esse serviço já existe cadastrado' });
    }

    const { description} = req.body;

    const upload = await _PaymentMethods2.default.create({
      description
    });

    return res.json(upload);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { description } = req.body;

    const { id } = req.params;

    const service = await _PaymentMethods2.default.findByPk(id);

    if (name === service.name) {
      const nameExists = await _PaymentMethods2.default.findOne({
        where: { description },
      });
    }

    await service.update(req.body);

    return res.json({ service });
  }
}

exports. default = new PaymentMethodsController();
