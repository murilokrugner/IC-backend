"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("files_document_providers", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_provider: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      name_verse: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      path_verse: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      name_your: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      path_your: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
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

  down: (queryInterface) => {
    return queryInterface.dropTable("files_document_providers");
  },
};
