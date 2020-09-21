const { Router } = require("express")
const authMiddleware = require("../auth/middleware")

const Party = require("../models").party
const Comment = require("../models").comment
const User = require("../models").user
const UserParties = require("../models").userParty

const router = new Router()

router.post(
    "/:id/newComment",
    authMiddleware,
    async(req, res, next) => {
        try{
            const userIdNeeded = req.user.id
            const partyIdNeeded = parseInt(req.params.id)
            if(!userIdNeeded || !partyIdNeeded){
                res.status(400).send("Oops, something malfunctioned, please refresh and try again")
            }

            const { input } = req.body
            if(!input){
                res.status(404).send("Please fill in a comment to continue.")
            }

            const newComment = await Comment.create({
                input,
                userId: userIdNeeded,
                partyId: partyIdNeeded,
            })

            res.status(202).send(newComment)

        } catch(error){
            next(error)
        }
    }
)

router.post(
    "/:id/newFavored",
    authMiddleware,
    async(req, res, next) => {
        try{
            const userIdNeeded = req.user.id
            const partyIdNeeded = parseInt(req.params.id)
            if(!userIdNeeded || !partyIdNeeded){
                res.status(400).send("Oops it seems something malfunctioned, please go back, refresh and try again.")
            }

            const newFavored = await UserParties.create({
                userId: userIdNeeded,
                partyId: partyIdNeeded,
            })
            if(!newFavored){
                res.status(404).send("it seems you couldn't favorite this party, its okay you can try again.")
            } else {
                res.status(202).send(newFavored)
            }

        } catch(error){
            next(error)
        }
    }
)

router.get(
    "/:id/favored",
    authMiddleware,
    async(req, res, next) => {
        try{
            const partyIdNeeded = parseInt(req.params.id)
            if(!partyIdNeeded){
                res.status(400).send("Oops seemd the URL malfunctioned, pleae go back refresh and try again.")
            }

            const userFavoredParty = await Party.findByPk(partyIdNeeded,{
                include: [User],
            })
            if(!userFavoredParty){
                res.status(404).send("It seems no one likes this event, be the first!!")
            } else {
                const users = userFavoredParty.users.map(user => {
                    delete user.dataValues["password"]
                    return user.dataValues
                })
                res.status(202).send(users)
            }

        } catch(error){
            next(error)
        }
    }
)

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
                include: {
                    model: User,
                    attributes: ["fullName"],
                },
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
    "/list/:id",
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