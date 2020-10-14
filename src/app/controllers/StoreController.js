import Users from '../models/Users';

class StoreController {
  async index(req, res) {
    const store = await Users.findOne({
      where: {
        id: req.query.id,
      },
      attributes: ['store'],
    });

    return res.json(store);
  }

  async update(req, res) {
    const user = await Users.findByPk(req.query.id);

    await user.update({
      store: true,
    });

    return res.json(user);
  }
}

export default new StoreController();
