import * as Yup from 'yup';
import Users from '../models/Users';

class UsersDocumentController {
  async update(req, res) {

    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      document: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {email, document} = req.body;

    const user = await Users.findOne({ where: { email: email } });

    await user.update(req.body);

    return res.json({
        email,
        document,
    });
  }
}

export default new UsersDocumentController();
