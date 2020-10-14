import * as Yup from 'yup';
import Products from '../models/Products';
import FilesProducts from '../models/FilesProducts';
import ProductUnits from '../models/ProductUnits';
import ProductCategory from '../models/ProductCategory';

class ProductsController {
  async index(req, res) {

    const product = await Products.findAll({
      where: {
        id_provider: req.query.provider,
      },
      attributes: ['id', 'description', 'forward_price', 'cash_price', 'brand', 'comments'],
      include: [
        {
          model: ProductCategory,
          as: 'category',
          attributes: ['id', 'description'],
        },
        {
          model: ProductUnits,
          as: 'unit',
          attributes: ['id', 'description'],
        },
      ],
    });

    if (product.length === 0) {
      return res.json('empty');
    }


    return res.json(product);
  }

  async store(req, res) {
    // validations
    const schema = Yup.object().shape({
      description: Yup.string(),
      forward_price: Yup.number(),
      cash_price: Yup.number(),
      brand: Yup.string(),
      comments: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { description, forward_price, cash_price, id_provider, unit, category, brand, comments } = req.body;

    const getIdCategory = await ProductCategory.findOne({
      where: {
        description: category,
      },
    });

    const id_category = getIdCategory.id;

    const getIdUnit = await ProductUnits.findOne({
      where: {
        description: unit,
      },
    });

    const id_unit = getIdUnit.id;

    const upload = await Products.create({
      description,
      forward_price,
      cash_price,
      id_provider,
      id_unit,
      id_category,
      brand,
      comments,
    });

    return res.json(upload);
  }

  async update(req, res) {
    const product = await Products.findByPk(req.body.id);

    const { description, forward_price, cash_price, id_provider, unit, category, brand, comments } = req.body;

    const getIdUnit = await ProductUnits.findOne({
      where: {
        description: unit,
      },
    });

    const id_unit = getIdUnit.id;

    const getIdCategory = await ProductCategory.findOne({
      where: {
        description: category,
      },
    });

    const id_category = getIdCategory.id;

    await product.update({
      description,
      forward_price,
      cash_price,
      id_provider,
      id_unit,
      id_category,
      brand,
      comments,
    });

    return res.json(product);
  }

  async delete(req, res) {
    const destroyFiles = await FilesProducts.destroy({
      where: {
        id_product: req.query.id,
      },
    });

    const response = await Products.destroy({
      where: {
        id: req.query.id,
      },
    });

    return res.json(response);
  }
}

export default new ProductsController();
