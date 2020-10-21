import FilesProducts from '../models/FilesProducts';
import Products from '../models/Products';
import ProductCategory from '../models/ProductCategory'
import ProductUnits from '../models/ProductUnits'

class CountProductsController {
  async index(req, res) {
    const {orderSelect, brand, category, unit} = req.query;

    if (brand !== 'Todos' && category !== 'Todos' && unit !== 'Todos') {
      const count = await FilesProducts.count({
          include: [
            {
              model: Products,
              as: 'product',
              where: {
                id_provider: req.query.id,
                brand: brand,
              },
              attributes: ['id'],
              include: [
                {
                  model: ProductUnits,
                  as: 'unit',
                  where: {
                    description: unit,
                  },
                  attributes: ['id'],
                },
                {
                  model: ProductCategory,
                  as: 'category',
                  where: {
                    description: category,
                  },
                  attributes: ['id'],
                },
              ]
            },
          ],
      });

      return res.json(count);

    } else if (brand !== 'Todos' && category === 'Todos' && unit === 'Todos') {
        const count = await FilesProducts.count({
          include: [
            {
              model: Products,
              as: 'product',
              where: {
                id_provider: req.query.id,
                brand: brand,
              },
              attributes: ['id'],
            },
          ],
        });

        return res.json(count);

    } else if (brand === 'Todos' && category !== 'Todos' && unit === 'Todos') {
      const count = await FilesProducts.count({
        include: [
          {
            model: Products,
            as: 'product',
            where: {
              id_provider: req.query.id,
            },
            attributes: ['id'],
            include: [
              {
                model: ProductCategory,
                as: 'category',
                where: {
                  description: category,
                },
                attributes: ['id'],
                order: [orderSelect],
              },
            ]
          },
        ],
      });

      return res.json(count);

    } else if (brand === 'Todos' && category === 'Todos' && unit !== 'Todos') {
      const count = await FilesProducts.count({
        include: [
          {
            model: Products,
            as: 'product',
            where: {
              id_provider: req.query.id,
            },
            attributes: ['id'],
            include: [
              {
                model: ProductUnits,
                as: 'unit',
                where: {
                  description: unit,
                },
                attributes: ['id'],
                order: [orderSelect],
              },
            ]
          },
        ],
      });

      return res.json(count);
    } else {
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
}

export default new CountProductsController();
