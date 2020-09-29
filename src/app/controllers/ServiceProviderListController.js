import servicesProviders from '../models/servicesProviders';
import Services from '../models/Services';

class ServiceProviderListController {
  async index(req, res) {

    const services = await servicesProviders.findAll({
      where: {
        id_provider: req.query.provider,
        id_service: req.query.service,
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

    return res.json(services);
  }
}

export default new ServiceProviderListController();
