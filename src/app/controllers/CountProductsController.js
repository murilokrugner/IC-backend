import FilesProducts from '../models/FilesProducts'

class CountProductsController {
  async index(req, res) {
    const count = await FilesProducts.count({
      where: {
        id_product: req.query.id,
      }
    });

    return res.json(count);
  }
}

export default new CountProductsController();
