import * as Yup from 'yup';
import Services from '../models/Services';

class ServicesController {
  async index(req, res) {
    const services = await Services.findAll({
      attributes: ['id', 'description'],
    });

    return res.json(services);
  }

  async store(req, res) {
    // validations
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

      // check name is exists
    const checkAvailability = await Services.findOne({
      where: {
        description: req.body.description,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Esse serviço já existe cadastrado' });
    }

    const { description} = req.body;

    const upload = await Services.create({
      description
    });

    return res.json(upload);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { description } = req.body;

    const { id } = req.params;

    const service = await Services.findByPk(id);

    if (name === service.name) {
      const nameExists = await Services.findOne({
        where: { description },
      });
    }

    await service.update(req.body);

    return res.json({ service });
  }
}

export default new ServicesController();
