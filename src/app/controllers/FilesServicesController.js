import FilesServices from '../models/FilesServices';
import Users from '../models/Users';

class FilesServicesController {
  async store(req, res) {
    const userExists = await Users.findOne({
      where: { id: req.query.id },
    });

    if (!userExists) {
      return res.status(400).json({ error: 'User not exists' })
    }

   const { originalname: name, filename: path } = req.file;

    const file = await FilesServices.create({
      name,
      path,
      id_provider: req.query.id,
    });

    return res.json(file);
  }
}

export default new FilesServicesController();
