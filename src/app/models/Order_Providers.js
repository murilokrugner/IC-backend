import Sequelize, { Model } from 'sequelize';

class Order_Providers extends Model {
  static init(sequelize) {
    super.init(
      {
        id_provider: Sequelize.INTEGER,
        id_user: Sequelize.INTEGER,
        id_service: Sequelize.INTEGER,
        obs: Sequelize.STRING,
        finished: Sequelize.BOOLEAN,
        paid: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'id_provider', as: 'provider' });
    this.belongsTo(models.Users, { foreignKey: 'id_user', as: 'user' });
    this.belongsTo(models.Services, { foreignKey: 'id_service', as: 'service' });
  }
}

export default Order_Providers;
