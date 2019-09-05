module.exports = {
  host: 'mysql669.umbler.com',
  port:'41890',
  username: 'morinfo',
  password: 'numsey1008',
  database: 'apontaproducao',
  dialect: 'mysql',
  timezone: '-03:00',
  dialectOptions: {
    useUTC: '-03:00', // for reading from database
  },
  define: {
    timestamps: true,
    underscored: false,
    underscoredAll: false

  }

}