"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class UsersDocumentController {
  async update(req, res) {

    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      document: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {email, document} = req.body;

    const user = await _Users2.default.findOne({ where: { email: email } });

    await user.update(req.body);

    return res.json({
        email,
        document,
    });
  }
}

exports. default = new UsersDocumentController();
