import servicesProviders from '../models/servicesProviders';
import Services from '../models/Services';

class VerifyServiceController {
  async index(req, res) {

    const services = await servicesProviders.findAll({
      where: {
        id_provider: req.query.provider,
      },
      attributes: ['id', 'complete'],
    });

    return res.json(services);
  }
}

export default new VerifyServiceController();
