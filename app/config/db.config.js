// DB Config
module.exports = {
  HOST: `${dbSocketPath}/${process.env.react-postgres:australia-southeast1:postgres14}`,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASS,
  DB: process.env.DB_NAME,
  dialect: "postgres",
    /* pool is optional, it will be used for Sequelize connection pool configuration */
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };