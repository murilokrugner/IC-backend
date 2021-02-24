module.exports = {
  dialect: 'mysql',
  dialectOptions: { decimalNumbers: true },
  host: 'mysql.knowledgesoftware.kinghost.net',
  username: 'knowledg01_add2',
  password: 'xtz125top',
  database: 'knowledgesoftw01',
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
