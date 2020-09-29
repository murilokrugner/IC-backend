import * as Yup from 'yup';
import servicesProviders from '../models/servicesProviders';
import Users from '../models/Users';
import Services from '../models/Services';

class Services_ProvidersController {
  async index(req, res) {

    const services = await servicesProviders.findAll({
      where: {
        id_provider: req.query.provider,
      },
      attributes: ['id', 'description', 'price', 'time', 'complete'],
      include: [
        {
          model: Services,
          as: 'service',
          attributes: ['id', 'description'],
        },
      ],
    });

    //tem que fazer inner join com services para pegar a descrição

    return res.json(services);
  }

  async store(req, res) {
    // validations
    const schema = Yup.object().shape({
      description: Yup.string().required(),
     // id_provider: Yup.number().required(),
     // id_service: Yup.number().required(),
      price: Yup.number().required(),
      time: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // check user is provider
    const checkUserProvider = await Users.findOne({
      where: { id: req.body.id_provider, provider: true },
    });

    if (!checkUserProvider) {
      return res.status(401).json({ error: 'User is not a provider' });
    }

    const { description, id_provider, service, price, time, complete } = req.body;


    const getIdService = await Services.findOne({
      where: {
        description: service,
      },
    });

    const id_service = getIdService.id;

    const checkAvailability = await servicesProviders.findOne({
      where: {
        id_service: id_service,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Esse serviço já existe cadastrado' });
    }

    const upload = await servicesProviders.create({
      description,
      id_provider,
      id_service,
      price,
      time,
      complete,
    });

    return res.json(upload);
  }

  async delete(req, res) {
    const response = await servicesProviders.destroy({
      where: {
        id: req.query.id,
      },
    });

    return res.json(response);
  }
}

export default new Services_ProvidersController();
