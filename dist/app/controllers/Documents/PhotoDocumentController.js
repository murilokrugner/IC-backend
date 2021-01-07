"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _FilesDocumentProviders = require('../../models/FilesDocumentProviders'); var _FilesDocumentProviders2 = _interopRequireDefault(_FilesDocumentProviders);

class PhotoDocumentController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const document = await _FilesDocumentProviders2.default.create({
      name,
      path,
      id_provider: req.query.id,
    });

    return res.json(document);
  }
}

exports. default = new PhotoDocumentController();
