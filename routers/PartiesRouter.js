const { Router } = require("express")
const authMiddleware = require("../auth/middleware")

const Party = require("../models").party
const Comment = require("../models").comment

const router = new Router()

router.get(
    "/:id/comments",
    authMiddleware,
    async(req, res, next) => {
        try{
            const limit = req.query.limit || 3
            const offset = req.query.offset || 0

            const partyIdNeeded = parseInt(req.params.id)
            if(!partyIdNeeded){
                res.status(400).send("Oops, looks like the URL malfunctioned, go back refresh and try again.")
            }

            const partyComments = await Comment.findAndCountAll({
                where: {
                    partyId: partyIdNeeded,
                },
                limit,
                offset,
            })

            .then((result) => {
                if(!result){
                    res.status(404).send("Seems there aren't any comments, please be the first.")
                } else {
                    res.status(202).send({
                        comments: result.rows,
                        total: result.count,
                    })
                }
            })

        } catch(error){
            next(error)
        }
    }
)

router.post(
    "/new",
    authMiddleware,
    async(req, res, next) => {
        try{
            const ownerCheck = req.user.isEventOwner
            if(!ownerCheck){
                res.status(401).send("Sorry, but only Event Owners can see and post on this page.")
            }

            const {
                eventName,
                image,
                month,
                duration,
                description,
                accomodation,
                lineUp,
                ticketLink,
                rules,
                extraInfo,
                covidClosure,
                continent,
                country,
                city,
            } = req.body
            if(
                !eventName || !month || !duration ||
                !description || !covidClosure || !continent ||
                !country
            ){
                res.status(400).send("Please provide: Event Name, Month with Year, Duration, Description, Covid Closure, Continent and Country.")
            }
            
            const newParty = await Party.create({
                eventName,
                image,
                month,
                duration,
                description,
                accomodation,
                lineUp,
                ticketLink,
                rules,
                extraInfo,
                covidClosure,
                continent,
                country,
                city,
            })

            res.status(201).send(newParty)

        } catch(error){
        next(error)
        }
    }

)

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