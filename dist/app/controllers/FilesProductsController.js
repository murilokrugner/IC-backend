"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _FilesProducts = require('../models/FilesProducts'); var _FilesProducts2 = _interopRequireDefault(_FilesProducts);
var _Products = require('../models/Products'); var _Products2 = _interopRequireDefault(_Products);

class FilesProductsController {
  async index(req, res) {

    const service = await _FilesProducts2.default.findAll({
      where: {
        id_product: req.query.id,
      },
      attributes: ['id', 'path', 'url', 'main'],
    })

    if (service.length === 0) {
      return res.json('empty');
    }

    return res.json(service);
  }

  async store(req, res) {
    const alterMain = await _FilesProducts2.default.findOne({
      where: {
        id_product: req.query.id,
        main: true,
      }
    });

    if (alterMain) {
      await alterMain.update({
        main: false,
      });
    }

   const { originalname: name, filename: path } = req.file;

    const file = await _FilesProducts2.default.create({
      name,
      path,
      id_product: req.query.id,
      main: true,
    });

    return res.json(file);
  }

  async delete(req, res) {
    const response = await _FilesProducts2.default.destroy({
      where: {
        id: req.query.id,
      },
    });

    return res.json(response);
  }
}

exports. default = new FilesProductsController();
