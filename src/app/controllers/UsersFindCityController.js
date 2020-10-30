import Users from '../models/Users';
import servicesProviders from '../models/servicesProviders';
import Services from '../models/Services';
import sequelize from 'sequelize';

class UsersFindCityController {
  async index(req, res) {

    const {city} = req.query;

    const user = await servicesProviders.findAll({
      attributes: ['id'],
      include: [
        {
          model: Services,
          as: 'service',
          attributes: ['id', 'description'],
        },
          {
            model: Users,
            as: 'provider',
            attributes: ['id',['location_x', 'latitude'],['location_y', 'longitude'], ['name', 'title']],
            where: {
              city: city,
              provider: true,
            },
          },
        ],
    });

    if (!user) {
      return res.json({result: 'null'});
    }

    return res.json(user);
  }
}

export default new UsersFindCityController();
