"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Products = require('../models/Products'); var _Products2 = _interopRequireDefault(_Products);
var _ProductCategory = require('../models/ProductCategory'); var _ProductCategory2 = _interopRequireDefault(_ProductCategory);

class ProductAddCategoryController {
  async store(req, res) {

    const { id_provider, category } = req.body;

    const getIdCategory = await _ProductCategory2.default.findOne({
      where: {
        description: category,
      },
    });

    const id_category = getIdCategory.id;

    const upload = await _Products2.default.create({
      id_provider,
      id_category,
    });

    return res.json(upload);
  }
}

exports. default = new ProductAddCategoryController();

