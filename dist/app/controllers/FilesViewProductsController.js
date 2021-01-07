"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _FilesProducts = require('../models/FilesProducts'); var _FilesProducts2 = _interopRequireDefault(_FilesProducts);
var _Products = require('../models/Products'); var _Products2 = _interopRequireDefault(_Products);

class FilesViewProductsController {
  async index(req, res) {

    const service = await _FilesProducts2.default.findAll({
      where: {
        id_product: req.query.id,
      },
      attributes: ['id', 'path', 'imagePath'],
    })

    if (service.length === 0) {
      return res.json('empty');
    }

    return res.json(service);
  }
}

exports. default = new FilesViewProductsController();
