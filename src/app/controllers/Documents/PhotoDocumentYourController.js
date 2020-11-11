import FilesDocumentProviders from "../../models/FilesDocumentProviders";

class PhotoDocumentYourController {
  async store(req, res) {
    const { originalname: name_your, filename: path_your } = req.file;

    const getDocument = await FilesDocumentProviders.findOne({
      where: {
        id_provider: req.query.id,
      },
      attributes: ["id"],
    });

    const attDocument = await FilesDocumentProviders.findByPk(getDocument.id);

    await attDocument.update({
      name_your,
      path_your,
    });

    return res.json(attDocument);
  }
}

export default new PhotoDocumentYourController();
