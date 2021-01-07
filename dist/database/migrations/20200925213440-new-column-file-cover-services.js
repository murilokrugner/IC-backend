"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    // adicionar coluna a uma tabela
    return queryInterface.addColumn('users', 'cover_id', {
      type: Sequelize.INTEGER,
      references: { model: 'file_covers', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'cover_id');
  },
};

