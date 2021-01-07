"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Products = require('../models/Products'); var _Products2 = _interopRequireDefault(_Products);
var _ProductCategory = require('../models/ProductCategory'); var _ProductCategory2 = _interopRequireDefault(_ProductCategory);
var _ProductUnits = require('../models/ProductUnits'); var _ProductUnits2 = _interopRequireDefault(_ProductUnits);

class ProductsIdController {
  async index(req, res) {

    const product = await _Products2.default.findOne({
      where: {
        id: req.query.id,
      },
      attributes: ['id', 'description', 'forward_price', 'cash_price', 'brand', 'comments'],
      include: [
        {
          model: _ProductCategory2.default,
          as: 'category',
          attributes: ['id', 'description'],
        },
        {
          model: _ProductUnits2.default,
          as: 'unit',
          attributes: ['id', 'description'],
        },
      ],
    });

    if (product.length === 0) {
      return res.json('empty');
    }


    return res.json(product);
  }
}

exports. default = new ProductsIdController();
