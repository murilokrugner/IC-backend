"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _FilesProducts = require('../models/FilesProducts'); var _FilesProducts2 = _interopRequireDefault(_FilesProducts);
var _Products = require('../models/Products'); var _Products2 = _interopRequireDefault(_Products);
var _ProductCategory = require('../models/ProductCategory'); var _ProductCategory2 = _interopRequireDefault(_ProductCategory);
var _ProductUnits = require('../models/ProductUnits'); var _ProductUnits2 = _interopRequireDefault(_ProductUnits);

class CountProductsController {
  async index(req, res) {
    const {orderSelect, brand, category, unit} = req.query;

    if (brand !== 'Todos' && category !== 'Todos' && unit !== 'Todos') {
      const count = await _FilesProducts2.default.count({
          include: [
            {
              model: _Products2.default,
              as: 'product',
              where: {
                id_provider: req.query.id,
                brand: brand,
              },
              attributes: ['id'],
              include: [
                {
                  model: _ProductUnits2.default,
                  as: 'unit',
                  where: {
                    description: unit,
                  },
                  attributes: ['id'],
                },
                {
                  model: _ProductCategory2.default,
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
        const count = await _FilesProducts2.default.count({
          include: [
            {
              model: _Products2.default,
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
      const count = await _FilesProducts2.default.count({
        include: [
          {
            model: _Products2.default,
            as: 'product',
            where: {
              id_provider: req.query.id,
            },
            attributes: ['id'],
            include: [
              {
                model: _ProductCategory2.default,
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
      const count = await _FilesProducts2.default.count({
        include: [
          {
            model: _Products2.default,
            as: 'product',
            where: {
              id_provider: req.query.id,
            },
            attributes: ['id'],
            include: [
              {
                model: _ProductUnits2.default,
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
      const count = await _FilesProducts2.default.count({
        include: [
          {
            model: _Products2.default,
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

exports. default = new CountProductsController();
