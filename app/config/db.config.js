// DB Config
module.exports = {
    HOST: "34.151.88.87",
    USER: "postgres",
    PASSWORD: "root",
    DB: "my_database",
    dialect: "postgres",
    /* pool is optional, it will be used for Sequelize connection pool configuration */
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };