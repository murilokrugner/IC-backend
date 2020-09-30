import Sequelize, { Model } from 'sequelize';

class servicesProviders extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        price: Sequelize.DECIMAL,
        time: Sequelize.INTEGER,
        complete: Sequelize.BOOLEAN,
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

export default servicesProviders;
