module.exports = {
  dialect: 'mysql',
  dialectOptions: { decimalNumbers: true },
  host: 'mysql.knowledgesoftware.kinghost.net',
  username: 'knowledges_add1',
  password: 'c595a7dd29',
  database: 'knowledgesoftw',
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
