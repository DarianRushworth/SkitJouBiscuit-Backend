const { Router } = require("express")
const authMiddleware = require("../auth/middleware")

const User = require("../models").user

const router = new Router()

router.get(
    "/fav",
    authMiddleware,
    async(req, res, next) => {
        try{
            const userIdNeeded = req.user.id
            if(!userIdNeeded){
                res.status(400).send("Oops it seems something malfunctioned, please go back, refresh and retry.")
            }

            const user = await User.findByPk(userIdNeeded)
            if(!user){
                res.status(404).send("User couldn't be found please go back, refresh and try again.")
            } else {
                res.status(202).send({
                    link: `https://soundcloud.com/search?q=${user.favoriteArtist}`
                })
            }

        } catch(error){
            next(error)
        }
    }
)



module.exports = router