import Products from '../models/Products';
import ProductCategory from '../models/ProductCategory';
import ProductUnits from '../models/ProductUnits';

class ProductsIdController {
  async index(req, res) {

    const product = await Products.findOne({
      where: {
        id: req.query.id,
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
}

export default new ProductsIdController();
