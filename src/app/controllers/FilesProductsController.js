import FilesProducts from '../models/FilesProducts';
import Products from '../models/Products';

class FilesProductsController {
  async index(req, res) {

    const service = await FilesProducts.findAll({
      where: {
        id_product: req.query.id,
      },
      attributes: ['id', 'path', 'url', 'main'],
    })

    if (service.length === 0) {
      return res.json('empty');
    }

    return res.json(service);
  }

  async store(req, res) {
    const alterMain = await FilesProducts.findOne({
      where: {
        id_product: req.query.id,
        main: true,
      }
    });

    if (alterMain) {
      await alterMain.update({
        main: false,
      });
    }

   const { originalname: name, filename: path } = req.file;

    const file = await FilesProducts.create({
      name,
      path,
      id_product: req.query.id,
      main: true,
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
