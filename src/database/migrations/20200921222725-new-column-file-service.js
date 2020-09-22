module.exports = {
  up: (queryInterface, Sequelize) => {
    // adicionar coluna a uma tabela
    return queryInterface.addColumn('services_providers', 'file_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files_services', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('services_providers', 'file_id');
  },
};
