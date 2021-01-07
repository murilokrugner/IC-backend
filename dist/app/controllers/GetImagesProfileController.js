"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _File = require('../models/File'); var _File2 = _interopRequireDefault(_File);
var _FileCover = require('../models/FileCover'); var _FileCover2 = _interopRequireDefault(_FileCover);

class GetImagesProfileController {
  async index(req, res) {

    const idUser = req.query.id;

    // verificando email se está correto
    const user = await _Users2.default.findOne({
      where: { id: idUser },
      include: [
        {
          model: _File2.default,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    const userCover = await _Users2.default.findOne({
      where: { id: idUser },
      include: [
        {
          model: _FileCover2.default,
          as: 'cover',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!user || !userCover) {
      return res.status(401).json({ error: 'User not found' });
    }

    const { avatar } = user;

    const { cover } = userCover;

    return res.json({
      user: {
        avatar,
        cover,
      },
    });
  }
}

exports. default = new GetImagesProfileController();
