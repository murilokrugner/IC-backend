import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        mobile_phone: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        location_x: Sequelize.STRING,
        location_y: Sequelize.STRING,
        document: Sequelize.STRING,
        address: Sequelize.STRING,
        number_address: Sequelize.STRING,
        neighborhood_address: Sequelize.STRING,
        cep_address: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Users;
