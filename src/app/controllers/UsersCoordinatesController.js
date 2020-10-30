import Users from '../models/Users';

class UsersCoordinatesController {
  async index(req, res) {
    const user = await Users.findOne({
      where: {
        id: req.query.id,
      },
      attributes: ['id',['location_x', 'latitude'],['location_y', 'longitude'], ['name', 'title']],
    });

    return res.json(user);
  }
}

export default new UsersCoordinatesController();
