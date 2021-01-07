"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Products = require('../models/Products'); var _Products2 = _interopRequireDefault(_Products);
var _FilesProducts = require('../models/FilesProducts'); var _FilesProducts2 = _interopRequireDefault(_FilesProducts);
var _ProductUnits = require('../models/ProductUnits'); var _ProductUnits2 = _interopRequireDefault(_ProductUnits);
var _ProductCategory = require('../models/ProductCategory'); var _ProductCategory2 = _interopRequireDefault(_ProductCategory);

class ProductsController {
  async index(req, res) {

    const product = await _Products2.default.findAll({
      where: {
        id_provider: req.query.provider,
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

  async store(req, res) {
    // validations
    const schema = Yup.object().shape({
      description: Yup.string(),
      forward_price: Yup.number(),
      cash_price: Yup.number(),
      brand: Yup.string(),
      comments: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { description, forward_price, cash_price, id_provider, unit, category, brand, comments } = req.body;

    const getIdCategory = await _ProductCategory2.default.findOne({
      where: {
        description: category,
      },
    });

    const id_category = getIdCategory.id;

    const getIdUnit = await _ProductUnits2.default.findOne({
      where: {
        description: unit,
      },
    });

    const id_unit = getIdUnit.id;

    const upload = await _Products2.default.create({
      description,
      forward_price,
      cash_price,
      id_provider,
      id_unit,
      id_category,
      brand,
      comments,
    });

    return res.json(upload);
  }

  async update(req, res) {
    const product = await _Products2.default.findByPk(req.body.id);

    const { description, forward_price, cash_price, id_provider, unit, category, brand, comments } = req.body;

    const getIdUnit = await _ProductUnits2.default.findOne({
      where: {
        description: unit,
      },
    });

    const id_unit = getIdUnit.id;

    const getIdCategory = await _ProductCategory2.default.findOne({
      where: {
        description: category,
      },
    });

    const id_category = getIdCategory.id;

    await product.update({
      description,
      forward_price,
      cash_price,
      id_provider,
      id_unit,
      id_category,
      brand,
      comments,
    });

    return res.json(product);
  }

  async delete(req, res) {
    const destroyFiles = await _FilesProducts2.default.destroy({
      where: {
        id_product: req.query.id,
      },
    });

    const response = await _Products2.default.destroy({
      where: {
        id: req.query.id,
      },
    });

    return res.json(response);
  }
}

exports. default = new ProductsController();
