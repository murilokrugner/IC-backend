import Users from '../models/Users';

class UserUpdateLocationController {
  async update(req, res) {
    const user = await Users.findByPk(req.body.id);

    user.update({
      location_x : req.body.location_x,
      location_y : req.body.location_y,
    });

    return res.json(user);
  }
}

export default new UserUpdateLocationController();
