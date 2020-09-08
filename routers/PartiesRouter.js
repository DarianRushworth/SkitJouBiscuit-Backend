const { Router } = require("express")

const Party = require("../models").party

const router = new Router()

router.get(
    "/:id",
    async(req, res, next) => {
        const partyIdNeeded = parseInt(req.params.id)
        if(!partyIdNeeded){
            res.status(400).send("Oops the url malfunctioned, go back refresh and try again.")
        }

        try{
            const specificParty = await Party.findByPk(partyIdNeeded)

            if(!specificParty){
                res.status(404).send("This party has gone on a trip... go back and try again.")
            } else{
                res.status(202).send(specificParty)
            }

        } catch(error){
            next(error)
        }
    }
)

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