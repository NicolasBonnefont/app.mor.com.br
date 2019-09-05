import Sequelize from 'sequelize';

import importacao from '../app/models/importacao';
import databaseConfig from '../config/database';

const models = [importacao];

class Database {
  constructor(){
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));


  }


}

export default new Database();