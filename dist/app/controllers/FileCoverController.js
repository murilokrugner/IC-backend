"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _FileCover = require('../models/FileCover'); var _FileCover2 = _interopRequireDefault(_FileCover);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class FileCoverController {
  async store(req, res) {
   const { originalname: name, filename: path } = req.file;

    const file = await _FileCover2.default.create({
      name,
      path,
    });

    const idPhoto = await _FileCover2.default.findOne({
      where: {
        path: path,
      },
      attributes: ['id']
    });

    const user = await _Users2.default.findByPk(req.query.id);

    await user.update({cover_id: idPhoto.id});

    return res.json('ok');
  }
}

exports. default = new FileCoverController();
