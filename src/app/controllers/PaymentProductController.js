import PaymentProduct from '../models/PaymentProduct';
import PaymentMethods from '../models/PaymentMethods';

class PaymentProductController {
  async index(req, res) {
    const product = PaymentMethods.findAll({
      where: {
        id_product: req.query.id,
      },
      attributes: ['id'],
      include: [
        {
          model: PaymentMethods,
          as: 'payment',
          attributes: ['id', 'description'],
        },
      ],
    });

    return res.json(product)
  }

   async store(req, res) {
    const {id_product, payment} = req.body;

    const getIdMethod = await PaymentMethods.findOne({
      where: {
        description: payment,
      },
    });

    const id_payment = getIdMethod.id;

    const product = await PaymentProduct.create({
      id_payment,
      id_product,
    });

    return res.json(product);
  }

  async delete(req, res) {
    const product = await PaymentProduct.destroy({
      where: {
        id: req.query.id,
      },
    });

    return res.json(product);
  }
}

export default new PaymentProductController();
