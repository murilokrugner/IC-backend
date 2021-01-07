"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _FilesDocumentProviders = require('../../models/FilesDocumentProviders'); var _FilesDocumentProviders2 = _interopRequireDefault(_FilesDocumentProviders);

class PhotoDocumentYourController {
  async store(req, res) {
    const { originalname: name_your, filename: path_your } = req.file;

    const getDocument = await _FilesDocumentProviders2.default.findOne({
      where: {
        id_provider: req.query.id,
      },
      attributes: ["id"],
    });

    const attDocument = await _FilesDocumentProviders2.default.findByPk(getDocument.id);

    await attDocument.update({
      name_your,
      path_your,
    });

    return res.json(attDocument);
  }
}

exports. default = new PhotoDocumentYourController();
