import * as Yup from 'yup';
import Order_Providers from '../models/Order_Providers';
import User from '../models/User';

class Order_ProvidersController {
  async index(req, res) {
    const orders = await Order_Providers.findAll({
      where: {
        id_provider: req.query.provider,
      },
      attributes: [],
    });

    //inner join

    return res.json(services);
  }

  async store(req, res) {
    // validations
    const schema = Yup.object().shape({
      id_provider: Yup.number().required(),
      id_user: Yup.number().required(),
      id_service: Yup.number().required(),
      obs: Yup.string().required(),
      finished: Yup.boolean().required(),
      paid: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // check name is exists
    const checkAvailability = await Services.findOne({
      where: {
        name: req.body.name,
        provider_id: req.userId,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Esse serviço já existe cadastrado' });
    }

    const { name, price, duration } = req.body;
    const { id } = checkUserProvider;
    const provider_id = id;

    const upload = await Services.create({
      name,
      price,
      duration,
      provider_id,
    });

    return res.json(upload);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      price: Yup.number(),
      duration: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, price, duration } = req.body;

    const { id } = req.params;

    const service = await Services.findByPk(id);

    if (name === service.name) {
      const nameExists = await Services.findOne({
        where: { name, price, duration },
      });
    }

    await service.update(req.body);

    return res.json({ service });
  }
}

export default new Order_ProvidersController();
