import FileCover from '../models/FileCover';
import Users from '../models/Users';

class FileCoverController {
  async store(req, res) {
   const { originalname: name, filename: path } = req.file;

    const file = await FileCover.create({
      name,
      path,
    });

    const idPhoto = await FileCover.findOne({
      where: {
        path: path,
      },
      attributes: ['id']
    });

    const user = await Users.findByPk(req.query.id);

    await user.update({cover_id: idPhoto.id});

    return res.json('ok');
  }
}

export default new FileCoverController();
