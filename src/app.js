// importando o express
import express from 'express';

import cors from 'cors';
// importando o path
import path from 'path';


// importando arquivo de rotas
import routes from './routes';

import './database';

//const { Sequelize } = require('sequelize');

// criando uma classe para configuração do servidor
class App {
  constructor() {
    // atribuindo o express a var server
    this.server = express();

    /*async function testConnectDb() {
      const sequelize = new Sequelize('mysql', 'root', 'mysql', {
        host: 'localhost',
        dialect: 'mysql',
      });

      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }


    testConnectDb();*/

    // chamando os middlewares
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // configuração para enviar json
    this.server.use(express.json());
    this.server.use(cors());
    // retornar arquivos estaticos
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads', 'files'))
    );
  }

  routes() {
    // configuração das rotas pelo arquivos routes.js
    this.server.use(routes);
  }
}

// exportando o server
export default new App().server;
