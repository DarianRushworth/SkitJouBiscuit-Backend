const bcrypt = require("bcrypt")
const { Router } = require("express")
const { toJWT } = require("../auth/jwt")
const authMiddleware = require("../auth/middleware")
const { SALT_ROUNDS } = require("../config/constants")
const User = require("../models").user
const Parties = require("../models").party

const router = new Router()

router.post(
    "/login",
    async(req, res, next) => {
        
        try{
            const { email, password } = req.body
            
            if(!email || !password){
                res.status(400).send("Please make sure to enter both Email and Password.")
            }
            
            const user = await User.findOne({
                include: [Parties]
            },{
                where: {
                    email,
                }
            })
            if(!user || !bcrypt.compareSync(password, user.password)){
                res.status(404).send("User with that email/password doesn't exist. Please check both inputs and retry.")
            } else {
                delete user.dataValues["password"]
                const token = toJWT({userid: user.id})
                res.status(202).send({token, ...user.dataValues})
            }

        } catch(error){
            next(error)
        }
    }
)


module.exports = router