import FileCover from '../models/FileCover';

class FileCoverController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await FileCover.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileCoverController();
