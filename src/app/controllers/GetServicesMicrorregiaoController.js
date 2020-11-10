import servicesProviders from '../models/servicesProviders';
import Users from '../models/Users';

class GetServicesMicrorregiaoController {
  async index(req, res) {
    const services = await servicesProviders.findAll({
      include: [
        {
          model: Users,
          as: 'provider',
          where: {
            microrregiao: req.body.microrregiao,
            provider: true,
          },
          attributes: ['id', 'name'],
          order: ['name'],
        },
      ],
    });

    return res.json(services);
  }
}

export default new GetServicesMicrorregiaoController();
