const bcrypt = require("bcrypt")
const { Router } = require("express")
const { toJWT } = require("../auth/jwt")
const authMiddleware = require("../auth/middleware")
const { SALT_ROUNDS } = require("../config/constants")
const User = require("../models").user
const Parties = require("../models").party

const router = new Router()

router.post(
    "/signup",
    async(req, res, next) => {
        try{
        const { 
            fullName, 
            favoriteArtist, 
            email, 
            password, 
            isEventOwner 
        } = req.body
        if(!fullName || !email || !password || !isEventOwner){
            res.status(400).send("Please provide: Full-Name, Email, Password and if you are an Event Owner.")
        }

        const favArtist = favoriteArtist
                        ? favoriteArtist
                        : "None"

        const newUser = await User.create({
            fullName,
            favoriteArtist: favArtist,
            email,
            password: bcrypt.hashSync(password, SALT_ROUNDS),
            isEventOwner,
        })
        if(!newUser){
            res.status(400).send("Oops something went wrong whilst trying to create your account, please retry.")
        } else {
            delete newUser.dataValues["password"]
            const token = toJWT({userId: newUser.id})
            res.status(201).send({
                token,
                ...newUser.dataValues
            })
        }

        } catch(error){
            if (error.name === "SequelizeUniqueConstraintError") {
                return res
                  .status(400)
                  .send({ message: "There is an existing account with this email" })
              }
        }
    }
)

router.post(
    "/login",
    async(req, res, next) => {
        
        try{
            const emailNeeded = req.body.email
            console.log("request", req.body)
            const passwordNeeded = req.body.password
            
            if(!emailNeeded || !passwordNeeded){
                res.status(400).send("Please make sure to enter both Email and Password.")
            }
            
            const user = await User.findOne({
                where: {
                    email: emailNeeded,
                }
            })
            console.log("user test",user)
            console.log("password test", bcrypt.compareSync(passwordNeeded, user.password))
            if(!user || !bcrypt.compareSync(passwordNeeded, user.password)){
                res.status(404).send("User with that email/password doesn't exist. Please check both inputs and retry.")
            } else {
                delete user.dataValues["password"]
                const token = toJWT({userId: user.id})
                res.status(202).send({token, ...user.dataValues})
            }

        } catch(error){
            next(error)
        }
    }
)

router.patch(
    "/user",
    authMiddleware,
    async(req, res, next) => {
        try{
            const userIdNeeded = req.user.id
            const userPasswordNeeded = req.user.password
            if(!userIdNeeded || !userPasswordNeeded){
                res.status(400).send("Oops it seems something malfunctioned, please refresh and try again.")
            }

            const {
                fullName,
                favoriteArtist,
                email,
                isEventOwner,
            } = req.body

            const updateUser = await User.update({
                fullName,
                favoriteArtist,
                email,
                isEventOwner
            },{
                where:{
                    id: userIdNeeded,
                }
            })

            const sendUser = await User.findByPk(userIdNeeded,{
                include: [Parties]
            })
            if(!updateUser || !sendUser){
                res.status(404).send("It seems your profile couldn't be update, go back, refresh and try again.")
            } else {
                delete sendUser.dataValues["password"]
                res.status(202).send({...sendUser.dataValues})
            }

        } catch(error){
        next(error)
        }
    }
)


module.exports = router