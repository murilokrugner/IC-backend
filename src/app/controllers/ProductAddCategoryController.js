import Products from '../models/Products';
import ProductCategory from '../models/ProductCategory';

class ProductAddCategoryController {
  async store(req, res) {

    const { id_provider, category } = req.body;

    const getIdCategory = await ProductCategory.findOne({
      where: {
        description: category,
      },
    });

    const id_category = getIdCategory.id;

    const upload = await Products.create({
      id_provider,
      id_category,
    });

    return res.json(upload);
  }
}

export default new ProductAddCategoryController();

