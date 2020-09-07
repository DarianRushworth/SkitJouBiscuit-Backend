const User = require("./models").user
const Comment = require("./models").comment
const Parties = require("./models").party
const UserParty = require("./models").userParty

async function findUserComments(id){
    try{
        const userComments = await User.findByPk(id, {
            include: [Comment],
        })
        
        const sendThese = userComments.length
                        ? userComments.map(comment => comment.get({
                            plain: true
                        }))
                        :userComments.get({
                            plain: true
                        })
        console.log("user comments test", sendThese)

    } catch(error){
        console.log(error.message)
    }
}
// findUserComments(1)
async function findPartyComments(id){
    try{
        const partyComments = await Parties.findByPk(id, {
            include: [Comment],
        })

        const sendThese = partyComments.length
                        ? partyComments.map(comment => comment.get({
                            plain: true
                        }))
                        : partyComments.get({
                            plain: true
                        })
        console.log("party comments test", sendThese)

    } catch(error){
        console.log(error.message)
    }
}
// findPartyComments(1)
async function findUserParties(id){
    try{
        const userParties = await User.findByPk(id, {
            include: [Parties],
        })

        const sendThese = userParties.length
                        ? userParties.map(party => party.get({
                            plain: true
                        }))
                        : userParties.get({
                            plain: true
                        })
        console.log("user paties test", sendThese)

    } catch(error){
        console.log(error.message)
    }
}
// findUserParties(1)