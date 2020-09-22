const User = require("../models").user
const { toData } = require("./jwt")
const Parties = require("../models").party

async function auth(req, res, next) {
  console.log("do i get here", req.headers)
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ")
    console.log("split headers", auth[0], auth[1])
  if (!auth || !auth[0] === "Bearer" || !auth[1]) {
    res.status(401).send({
      message:
        "This endpoint requires an Authorization header with a valid token"
    })
  }

  try {
    console.log("present here")
    const data = toData(auth[1])
    console.log("data test", data)
    const user = await User.findByPk(data.userId,{
      include: [Parties]
    })
    if (!user) {
      return res.status(404).send({ message: "User does not exist" })
    }
    console.log("user found", user)
    req.user = user

    return next();
  } catch (error) {
    console.log("ERROR IN AUTH MIDDLEWARE", error)

    switch (error.name) {
      case "TokenExpiredError":
        return res
          .status(401)
          .send({ error: error.name, message: error.message })

      case "JsonWebTokenError":
        return res
          .status(400)
          .send({ error: error.name, message: error.message })

      default:
        return res.status(400).send({
          message: "Something went wrong, sorry"
        })
    }
  }
}

module.exports = auth