"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _PaymentProduct = require('../models/PaymentProduct'); var _PaymentProduct2 = _interopRequireDefault(_PaymentProduct);
var _PaymentMethods = require('../models/PaymentMethods'); var _PaymentMethods2 = _interopRequireDefault(_PaymentMethods);

class PaymentProductController {
  async index(req, res) {
    const product = _PaymentMethods2.default.findAll({
      where: {
        id_product: req.query.id,
      },
      attributes: ['id'],
      include: [
        {
          model: _PaymentMethods2.default,
          as: 'payment',
          attributes: ['id', 'description'],
        },
      ],
    });

    return res.json(product)
  }

   async store(req, res) {
    const {id_product, payment} = req.body;

    const getIdMethod = await _PaymentMethods2.default.findOne({
      where: {
        description: payment,
      },
    });

    const id_payment = getIdMethod.id;

    const product = await _PaymentProduct2.default.create({
      id_payment,
      id_product,
    });

    return res.json(product);
  }

  async delete(req, res) {
    const product = await _PaymentProduct2.default.destroy({
      where: {
        id: req.query.id,
      },
    });

    return res.json(product);
  }
}

exports. default = new PaymentProductController();
