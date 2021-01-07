"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _FilesProducts = require('../models/FilesProducts'); var _FilesProducts2 = _interopRequireDefault(_FilesProducts);
var _Products = require('../models/Products'); var _Products2 = _interopRequireDefault(_Products);
var _ProductCategory = require('../models/ProductCategory'); var _ProductCategory2 = _interopRequireDefault(_ProductCategory);
var _ProductUnits = require('../models/ProductUnits'); var _ProductUnits2 = _interopRequireDefault(_ProductUnits);

class FileMainProductController {
  async index(req, res) {

    //const { page = 1 } = req.query;
    const {orderSelect, brand, category, unit} = req.query;

    if (brand !== 'Todos' && category !== 'Todos' && unit !== 'Todos') {
      const service = await _FilesProducts2.default.findAll({
        where: {
          main: true,
        },
        attributes: ['id', 'path', 'url'],
        include: [
          {
            model: _Products2.default,
            as: 'product',
            where: {
              id_provider: req.query.id,
              brand: brand,
            },
            attributes: ['id', 'description', 'cash_price'],
            order: [orderSelect],
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
        limit: req.query.page,
        //offset: (page - 1) * 2,
      });

      if (service.length === 0) {
        return res.json('empty');
      }

      return res.json(service);

    } else if (brand !== 'Todos' && category === 'Todos' && unit === 'Todos') {
      const service = await _FilesProducts2.default.findAll({
        where: {
          main: true,
        },
        attributes: ['id', 'path', 'url'],
        include: [
          {
            model: _Products2.default,
            as: 'product',
            where: {
              id_provider: req.query.id,
              brand: brand,
            },
            attributes: ['id', 'description', 'cash_price'],
            order: [orderSelect],
          },
        ],
        limit: req.query.page,
        //offset: (page - 1) * 2,
      });

      if (service.length === 0) {
        return res.json('empty');
      }

      return res.json(service);

    } else if (brand === 'Todos' && category !== 'Todos' && unit === 'Todos') {
      const service = await _FilesProducts2.default.findAll({
        where: {
          main: true,
        },
        attributes: ['id', 'path', 'url'],
        include: [
          {
            model: _Products2.default,
            as: 'product',
            where: {
              id_provider: req.query.id,
            },
            attributes: ['id', 'description', 'cash_price'],
            order: [orderSelect],
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
        limit: req.query.page,
        //offset: (page - 1) * 2,
      });

      if (service.length === 0) {
        return res.json('empty');
      }

      return res.json(service);

    } else if (brand === 'Todos' && category === 'Todos' && unit !== 'Todos') {
      const service = await _FilesProducts2.default.findAll({
        where: {
          main: true,
        },
        attributes: ['id', 'path', 'url'],
        include: [
          {
            model: _Products2.default,
            as: 'product',
            where: {
              id_provider: req.query.id,
            },
            attributes: ['id', 'description', 'cash_price'],
            order: [orderSelect],
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
        limit: req.query.page,
        //offset: (page - 1) * 2,
      });

      if (service.length === 0) {
        return res.json('empty');
      }

      return res.json(service);

    } else {
        const service = await _FilesProducts2.default.findAll({
          where: {
            main: true,
          },
          attributes: ['id', 'path', 'url'],
          include: [
            {
              model: _Products2.default,
              as: 'product',
              where: {
                id_provider: req.query.id,
              },
              attributes: ['id', 'description', 'cash_price'],
              order: [orderSelect],
            },
          ],
          limit: req.query.page,
          //offset: (page - 1) * 2,
        });

        if (service.length === 0) {
          return res.json('empty');
        }

        return res.json(service);
    }
  }

  async update(req, res) {
      const verifyMain = await _FilesProducts2.default.findOne({
        where: {
          id_product: req.query.product,
          main: true,
        },
        attributes: ['id'],
      });


      const productId = await _FilesProducts2.default.findByPk(verifyMain.id);

      await productId.update({
        main: false,
      });

      const idFileProduct = await _FilesProducts2.default.findByPk(req.query.id);

      await idFileProduct.update({
        main: true,
      });

      return res.json(idFileProduct);

  }
}

exports. default = new FileMainProductController();
