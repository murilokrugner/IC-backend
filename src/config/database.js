module.exports = {
  dialect: 'mysql',
  dialectOptions: { decimalNumbers: true },
  host: 'localhost',
  username: 'root',
  password: 'password',
  database: 'icdatabase',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};


/*module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  //dialectOptions: { decimalNumbers: true }
};*/

/*dialectOptions: {
    decimalNumbers: true
}*/
