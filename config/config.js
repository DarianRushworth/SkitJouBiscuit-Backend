require("dotenv").config()

module.exports = {
  "development": {
    "url": process.env.DATABASE_URL_DEV,
    "host": "127.0.0.1",
    "dialect": "pg"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "pg"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "pg"
  }
}
