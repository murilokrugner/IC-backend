import * as Yup from 'yup';
import ProductUnits from '../models/ProductUnits';

class ProductUnitsController {
  async index(req, res) {
    const services = await ProductUnits.findAll({
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
    const checkAvailability = await ProductUnits.findOne({
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

    const upload = await ProductUnits.create({
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

    const service = await ProductUnits.findByPk(id);

    if (name === service.name) {
      const nameExists = await ProductUnits.findOne({
        where: { description },
      });
    }

    await service.update(req.body);

    return res.json({ service });
  }
}

export default new ProductUnitsController();
