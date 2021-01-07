"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payment_products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_payment: {
        type: Sequelize.INTEGER,
        references: { model: 'payment_methods', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      id_product: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    }, { freezeTableName: true });
  },

  down: queryInterface => {
    return queryInterface.dropTable('payment_products');
  },
};
