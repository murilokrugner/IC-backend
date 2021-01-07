"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _File = require('../models/File'); var _File2 = _interopRequireDefault(_File);
var _FileCover = require('../models/FileCover'); var _FileCover2 = _interopRequireDefault(_FileCover);

class SessionController {
  async store(req, res) {
    // validações
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { email, password } = req.body;

    // verificando email se está correto
    const user = await _Users2.default.findOne({
      where: { email },
      include: [
        {
          model: _File2.default,
          as: "avatar",
          attributes: ["id", "path", "url"],
        },
      ],
    });

    const userCover = await _Users2.default.findOne({
      where: { email },
      include: [
        {
          model: _FileCover2.default,
          as: "cover",
          attributes: ["id", "path", "url"],
        },
      ],
    });

    if (!user || !userCover) {
      return res.status(401).json({ error: "User not found" });
    }

    // verificando senha
    if (!(await user.checkPassword(password))) {
      return res.json(401).json({ error: "Password does not match" });
    }

    const {
      id,
      name,
      phone,
      avatar,
      provider,
      city,
      type_document,
      first_access,
      blocked,
    } = user;

    const { cover } = userCover;

    return res.json({
      user: {
        id,
        name,
        email,
        phone,
        provider,
        avatar,
        cover,
        city,
        type_document,
        first_access,
        blocked,
      },
      token: _jsonwebtoken2.default.sign({ id }, _auth2.default.secret, {
        expiresIn: _auth2.default.expiresIn,
      }),
    });
  }
}

exports. default = new SessionController();
