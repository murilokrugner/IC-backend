module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('services_providers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      time: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      id_provider: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      id_service: {
        type: Sequelize.INTEGER,
        references: { model: 'services', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      complete: {
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
    return queryInterface.dropTable('services_providers');
  },
};
