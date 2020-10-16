import FilesProducts from '../models/FilesProducts';
import Products from '../models/Products';

class FileMainProductController {
  async index(req, res) {

    //const { page = 1 } = req.query;

    const service = await FilesProducts.findAll({
      where: {
        main: true,
      },
      attributes: ['id', 'path', 'url'],
      include: [
        {
          model: Products,
          as: 'product',
          where: {
            id_provider: req.query.id,
          },
          attributes: ['id', 'description', 'cash_price'],
        },
      ],
      order: ['created_at'],
      limit: req.query.page,
      //offset: (page - 1) * 2,
    })

    if (service.length === 0) {
      return res.json('empty');
    }

    return res.json(service);
  }

  async update(req, res) {
      const verifyMain = await FilesProducts.findOne({
        where: {
          id_product: req.query.product,
          main: true,
        },
        attributes: ['id'],
      });


      const productId = await FilesProducts.findByPk(verifyMain.id);

      await productId.update({
        main: false,
      });

      const idFileProduct = await FilesProducts.findByPk(req.query.id);

      await idFileProduct.update({
        main: true,
      });

      return res.json(idFileProduct);

  }
}

export default new FileMainProductController();
