import FilesProducts from '../models/FilesProducts'
import Products from '../models/Products';

class CountProductsController {
  async index(req, res) {
    const count = await FilesProducts.count({
        include: [
          {
            model: Products,
            as: 'product',
            where: {
              id_provider: req.query.id,
            },
            attributes: ['id'],
          },
        ],
    });

    return res.json(count);
  }
}

export default new CountProductsController();
