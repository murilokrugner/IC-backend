import * as Yup from 'yup';
import Services_Providers from '../models/Services_Providers';
import Users from '../models/Users';

class Services_ProvidersController {
  async index(req, res) {
    const services = await Services_Providers.findAll({
      where: {
        provider_id: req.query.provider,
      },
      attributes: ['id', 'description', 'price', 'time'],
    });

    //tem que fazer inner join com services para pegar a descrição

    return res.json(services);
  }

  async store(req, res) {
    // validations
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      id_service: Yup.number.required(),
      price: Yup.number().required(),
      time: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // check user is provider
    const checkUserProvider = await Users.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkUserProvider) {
      return res.status(401).json({ error: 'User is not a provider' });
    }

    // check name is exists
    const checkAvailability = await Services_Providers.findOne({
      where: {
        description: req.body.description,
        provider_id: req.userId,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Esse serviço já existe cadastrado' });
    }

    const { description, id_service, price, time } = req.body;
    const { id } = checkUserProvider;
    const provider_id = id;

    const upload = await Services_Providers.create({
      description,
      id_service,
      price,
      time,
    });

    return res.json(upload);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      id_service: Yup.number.required(),
      price: Yup.number().required(),
      time: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { description, id_service, price, duration } = req.body;

    const { id } = req.params;

    const service = await Services_Providers.findByPk(id);

    if (name === service.name) {
      const nameExists = await Services_Providers.findOne({
        where: { name, price, duration },
      });
    }

    await service.update(req.body);

    return res.json({ service });
  }
}

export default new Services_ProvidersController();
