import Users from '../models/Users';

class ConfirmFirstAccessControler {
  async update(req, res) {
    const user = await Users.findByPk(req.query.id);

    await user.update({
      first_access: "1",
    });

    return res.json({ok: "ok"});
  }
}

export default new ConfirmFirstAccessControler();
