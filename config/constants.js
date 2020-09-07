require("dotenv").config()

module.exports = {
    PORT: process.env.PORT,
    SALT_ROUNDS: 10,
}