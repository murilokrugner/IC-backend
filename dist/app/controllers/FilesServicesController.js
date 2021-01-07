"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _FilesServices = require('../models/FilesServices'); var _FilesServices2 = _interopRequireDefault(_FilesServices);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class FilesServicesController {
  async index(req, res) {

    const service = await _FilesServices2.default.findAll({
      where: {
        id_provider: req.query.id,
      },
      attributes: ['id', 'path', 'url'],
    })

    if (!service) {
      return res.status(400).json({error: 'Service not image'});
    }

    return res.json(service);
  }

  async store(req, res) {
    const userExists = await _Users2.default.findOne({
      where: { id: req.query.id },
    });

    if (!userExists) {
      return res.status(400).json({ error: 'User not exists' })
    }

   const { originalname: name, filename: path } = req.file;

    const file = await _FilesServices2.default.create({
      name,
      path,
      id_provider: req.query.id,
    });

    return res.json(file);
  }

  async delete(req, res) {
    const response = await _FilesServices2.default.destroy({
      where: {
        id: req.query.id,
      },
    });

    return res.json(response);
  }
}

exports. default = new FilesServicesController();
