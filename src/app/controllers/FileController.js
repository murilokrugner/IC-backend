import File from '../models/File';
import Users from '../models/Users';

class FileController {
  async store(req, res) {
   const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    const idPhoto = await File.findOne({
      where: {
        path: path,
      },
      attributes: ['id']
    });

    const user = await Users.findByPk(req.query.id);

    await user.update({avatar_id: idPhoto.id});

    return res.json('ok');
  }
}

export default new FileController();
