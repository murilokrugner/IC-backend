import FilesProducts from '../models/FilesProducts';
import Products from '../models/Products';

class FilesViewProductsController {
  async index(req, res) {

    const service = await FilesProducts.findAll({
      where: {
        id_product: req.query.id,
      },
      attributes: ['id', ['url', 'imagePath']],
    })

    if (service.length === 0) {
      return res.json('empty');
    }

    return res.json(service);
  }
}

export default new FilesViewProductsController();
