import servicesProviders from '../models/servicesProviders';

class CountServicesProviderController {
  async index(req, res) {

    const services = await servicesProviders.findAndCountAll({
      where: {
        id_provider: req.query.provider,
      },
      attributes: ['id'],
    });

    return res.json(services);
  }
}

export default new CountServicesProviderController();
