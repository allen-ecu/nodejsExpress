// DB Config
const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';

module.exports = {
  HOST: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`, // "35.244.79.228", //"localhost",
  USER: process.env.DB_USER, // "postgres", //"alen",
  PASSWORD: process.env.DB_PASS, // "postgres", //"root",
  DB: process.env.DB_NAME, // "postgres", //"my_database",
  dialect: "postgres",
    /* pool is optional, it will be used for Sequelize connection pool configuration */
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };