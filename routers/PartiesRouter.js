const { Router } = require("express")

const Party = require("../models").party

const router = new Router()

router.get(
    "/list",
    async(req, res, next) => {
        const limit = req.query.limit || 2
        const offset = req.query.offset || 0

        try{
            const listAndCount = await Party.findAndCountAll({limit, offset})

            .then((result) => {
                if(!result){
                    res.status(404).send("No Parties Found, What a Bummer, Try again in 5 minutes.")
                } else {
                    res.status(202).send({
                        parties: result.rows,
                        total: result.count
                    })
                }
            })

        } catch(error){
            next(error)
        }
    }
)


module.exports = router