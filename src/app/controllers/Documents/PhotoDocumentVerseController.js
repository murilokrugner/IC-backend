import FilesDocumentProviders from "../../models/FilesDocumentProviders";

class PhotoDocumentVerseController {
  async store(req, res) {
    const { originalname: name_verse, filename: path_verse } = req.file;

    const getDocument = await FilesDocumentProviders.findOne({
      where: {
        id_provider: req.query.id,
      },
      attributes: ["id"],
    });

    const attDocument = await FilesDocumentProviders.findByPk(getDocument.id);

    await attDocument.update({
      name_verse,
      path_verse,
    });

    return res.json(attDocument);
  }
}

export default new PhotoDocumentVerseController();
