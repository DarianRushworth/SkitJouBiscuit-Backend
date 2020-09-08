const express = require("express")
const loggerMiddleware = require("morgan")
const corsMiddleware = require("cors")
const { PORT } = require("./config/constants")

const partiesRouter = require("./routers/PartiesRouter")

const app = express()

app.use(loggerMiddleware("dev"))

const bodyParserMiddleware = express.json()
app.use(bodyParserMiddleware)

app.use(corsMiddleware())

if (process.env.DELAY) {
    app.use((req, res, next) => {
      setTimeout(() => next(), parseInt(process.env.DELAY))
    })
}

app.use("/parties", partiesRouter)

app.listen(
    PORT, 
    () => {
    console.log(`Listening on port: ${PORT}`)
})