import Users from '../models/Users';
import File from '../models/File';
import FileCover from '../models/FileCover';

class GetImagesProfileController {
  async index(req, res) {

    const idUser = req.query.id;

    // verificando email se está correto
    const user = await Users.findOne({
      where: { id: idUser },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    const userCover = await Users.findOne({
      where: { id: idUser },
      include: [
        {
          model: FileCover,
          as: 'cover',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!user || !userCover) {
      return res.status(401).json({ error: 'User not found' });
    }

    const { avatar } = user;

    const { cover } = userCover;

    return res.json({
      user: {
        avatar,
        cover,
      },
    });
  }
}

export default new GetImagesProfileController();
