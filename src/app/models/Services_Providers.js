import Sequelize, { Model } from 'sequelize';

class Services_Providers extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        id_provider: Sequelize.INTEGER,
        id_service: Sequelize.INTEGER,
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
    this.belongsTo(models.Services, { foreignKey: 'id_service', as: 'service' });
  }
}

export default Services_Providers;
