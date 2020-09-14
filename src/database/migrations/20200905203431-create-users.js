module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobile_phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location_x: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location_y: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      document: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      number_address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      neighborhood_address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cep_address: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      state_address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
