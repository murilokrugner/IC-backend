import Users from '../models/Users';
import sequelize from 'sequelize';

class UsersFindCityController {
  async index(req, res) {

    const {city} = req.query;

    const user = await Users.findAll({
      where: {
        city: city,
        provider: true,
      },
      attributes: ['id',['location_x', 'latitude'],['location_y', 'longitude'], ['name', 'title']]
      //attributes: [[sequelize.cast('location_y', 'decimal')]]
    });

    if (!user) {
      return res.json({result: 'null'});
    }

    return res.json(user);
  }
}

export default new UsersFindCityController();
