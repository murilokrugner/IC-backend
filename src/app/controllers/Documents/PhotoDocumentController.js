import FilesDocumentProviders from "../../models/FilesDocumentProviders";

class PhotoDocumentController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const document = await FilesDocumentProviders.create({
      name,
      path,
      id_provider: req.query.id,
    });

    return res.json(document);
  }
}

export default new PhotoDocumentController();
