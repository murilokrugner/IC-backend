import Sequelize, { Model } from 'sequelize';

class Order_Client extends Model {
  static init(sequelize) {
    super.init(
      {
        id_provider: Sequelize.INTEGER,
        id_service_provider: Sequelize.INTEGER,
        obs: Sequelize.STRING,
        finished: Sequelize.BOOLEAN,
        paid: Sequelize.BOOLEAN,
        price: Sequelize.DECIMAL,
        time: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'id_provider', as: 'provider' });
    this.belongsTo(models.Services_Providers, { foreignKey: 'id_service_provider', as: 'service' });
  }
}

export default Order_Client;
