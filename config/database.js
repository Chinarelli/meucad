require('dotenv').config();
module.exports = {
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  dialect: process.env.PG_DIALECT,
}