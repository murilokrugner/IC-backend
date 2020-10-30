import Users from '../models/Users';
import File from '../models/File';
import servicesProviders from '../models/servicesProviders';

class UserFindMapController {
  async index(req, res) {
    const user = await servicesProviders.findOne({
      include: [
        {
          model: Users,
          as: 'provider',
          attributes: ['id', 'name','mobile_phone',
          'address','number_address','neighborhood_address'],
          where: {
            id: req.query.id,
          },
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        }
      ],
    });

    return res.json(user);
  }
}

export default new UserFindMapController();
