import FilesProducts from '../models/FilesProducts';
import Products from '../models/Products';

class FileMainProductController {
  async index(req, res) {

    const service = await FilesProducts.findAll({
      where: {
        id_product: req.query.id,
        main: true,
      },
      attributes: ['id', 'path', 'url'],
      include: [
        {
          model: Products,
          as: 'product',
          attributes: ['id', 'description', 'cash_price'],
        },
      ],
    })

    if (service.length === 0) {
      return res.json('empty');
    }

    return res.json(service);
  }
}

export default new FileMainProductController();
