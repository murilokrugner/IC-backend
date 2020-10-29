import * as Yup from 'yup';
import Users from '../models/Users';
import File from '../models/File';

class UsersController {
  async index(req, res) {
    const user = await Users.findOne({
      where: {
        id: req.query.id,
      },
      attributes: ['name','nickname','email','phone','mobile_phone','document',
      'address','number_address','point_address','neighborhood_address',
      'cep_address','state_address', 'city', 'type_document']
    });

    return res.json(user);
  }


  async store(req, res) {
    // validation
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      nickname: Yup.string(),
      email: Yup.string()
        .email()
        .required(),
      phone: Yup.string(),
      mobile_phone: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
      location_x: Yup.string(),
      location_y: Yup.string(),
      address: Yup.string(),
      number_address: Yup.number(),
      point_address: Yup.string(),
      neighborhood_address: Yup.string(),
      cep_address: Yup.string(),
      state_address: Yup.string(),
      city: Yup.string(),
      provider: Yup.boolean().required(),
      type_document: Yup.string(),
      first_access: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // verificando se já existe o email enviado
    const userExists = await Users.findOne({ where: { email: req.body.email } });

    if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }

    // retornando somente os campos necessarios
    const { name, nickname, email, phone, mobile_phone, password, location_x,
      location_y, address, number_address, point_address,
          neighborhood_address, cep_address, state_address, city, provider, type_document, first_access, store } = await Users.create(req.body);

    return res.json({
        name,
        nickname,
        email,
        phone,
        mobile_phone,
        password,
        location_x,
        location_y,
        address,
        number_address,
        point_address,
        neighborhood_address,
        cep_address,
        state_address,
        city,
        provider,
        type_document,
        first_access,
        store,
    });
  }

  // bloquear usuario a acessar alguma rota se o mesmo não estiver logado
  async update(req, res) {
    // validações
    const schema = Yup.object().shape({
      id: Yup.number(),
      name: Yup.string(),
      nickname: Yup.string(),
      email: Yup.string().email(),
      phone: Yup.string(),
      mobile_phone: Yup.string().required(),
      document: Yup.string(),
      address: Yup.string(),
      number_address: Yup.number(),
      point_address: Yup.string(),
      neighborhood_address: Yup.string(),
      cep_address: Yup.string(),
      state_address: Yup.string(),
      city: Yup.string(),
      oldPassword: Yup.string(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      // validar se informar a senha antiga tem que informar a nova senha
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const user = await Users.findByPk(req.body.id);

    if (req.body.email !== user.email) {
      const userExists = await Users.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (req.body.oldPassword !== '') {
      if (req.body.oldPassword && !(await user.checkPassword(req.body.oldPassword))) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      await user.update({
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
        phone: req.body.phone,
        mobile_phone: req.body.mobile_phone,
        document: req.body.document,
        address: req.body.address,
        number_address: req.body.number_address,
        point_address: req.body.point_address,
        neighborhood_address: req.body.neighborhood_address,
        cep_address: req.body.cep_address,
        state_address: req.body.state_address,
        city: req.body.city,
        password: req.body.confirmPassword,
      });

      return res.json({ok: 'ok'});
    } else {
            await user.update({
              name: req.body.name,
              nickname: req.body.nickname,
              email: req.body.email,
              phone: req.body.phone,
              mobile_phone: req.body.mobile_phone,
              document: req.body.document,
              address: req.body.address,
              number_address: req.body.number_address,
              point_address: req.body.point_address,
              neighborhood_address: req.body.neighborhood_address,
              cep_address: req.body.cep_address,
              state_address: req.body.state_address,
              city: req.body.city,
            });

            return res.json({ok: 'ok'});

    }

  }
}

export default new UsersController();
