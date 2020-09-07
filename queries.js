const User = require("./models").user
const Comment = require("./models").comment
const Parties = require("./models").party
const UserParty = require("./models").userParty

async function findUsers(){
    try{
        const allUsers = await User.findAll()

        const sendThese = allUsers.map(user => user.get({
            plain: true
        }))
        console.log("users test", sendThese)
    } catch(error){
        console.log(error.message)
    }
}
// findUsers()
async function findParties(){
    try{
        const allParties = await Parties.findAll()

        const sendThese = allParties.map(party => party.get({
            plain:true
        }))
        console.log("parties test", sendThese)

    } catch(error){
        console.log(error.message)
    }
}
// findParties()
async function findComments(){
    try{
        const allComments = await Comment.findAll()

        const sendThese = allComments.map(comment => comment.get({
            plain: true
        }))
        console.log("comments test", sendThese)

    } catch(error){
        console.log(error.message)
    }
}
// findComments()