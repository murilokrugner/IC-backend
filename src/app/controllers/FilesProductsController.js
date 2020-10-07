import FilesProducts from '../models/FilesProducts';
import Products from '../models/Products';

class FilesProductsController {
  async index(req, res) {

    const service = await FilesProducts.findAll({
      where: {
        id_product: req.query.id,
      },
      attributes: ['id', 'path', 'url'],
    })

    if (!service) {
      return res.status(400).json({error: 'Product not image'});
    }

    return res.json(service);
  }

  async store(req, res) {
    const verifyidProduct = await Products.findOne({
      where: {
        id: req.query.id,
      }
    });

    if(!verifyidProduct) {
      return res.status(400).json({ error: 'error'});
    }

   const { originalname: name, filename: path } = req.file;

    const file = await FilesProducts.create({
      name,
      path,
      id_product: req.query.id,
    });

    return res.json(file);
  }

  async delete(req, res) {
    const response = await FilesProducts.destroy({
      where: {
        id: req.query.id,
      },
    });

    return res.json(response);
  }
}

export default new FilesProductsController();
