"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// importando o express
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
// importando o path
var _path = require('path'); var _path2 = _interopRequireDefault(_path);


// importando arquivo de rotas
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

require('./database');

//const { Sequelize } = require('sequelize');

// criando uma classe para configuração do servidor
class App {
  constructor() {
    // atribuindo o express a var server
    this.server = _express2.default.call(void 0, );

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
    this.server.use(_express2.default.json());
    this.server.use(_cors2.default.call(void 0, ));
    // retornar arquivos estaticos
    this.server.use(
      '/files',
      _express2.default.static(_path2.default.resolve(__dirname, '..', 'tmp', 'uploads', 'files'))
    );
  }

  routes() {
    // configuração das rotas pelo arquivos routes.js
    this.server.use(_routes2.default);
  }
}

// exportando o server
exports. default = new App().server;
