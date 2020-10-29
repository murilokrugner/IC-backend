import Users from '../models/Users';

class UsersFindCityController {
  async index(req, res) {
    const user = await Users.findAll({
      where: {
        city: req.body.city,
      }
    });

    if (!user) {
      return res.json({result: 'null'});
    }

    return res.json(user);
  }
}

export default new UsersFindCityController();
