module.exports = {
  up: (queryInterface, Sequelize) => {
    // adicionar coluna a uma tabela
    return queryInterface.addColumn('servicesProviders', 'file_id', {
      type: Sequelize.INTEGER,
      references: { model: 'filesServices', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('servicesProviders', 'file_id');
  },
};
