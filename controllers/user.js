const User = require("../models/user")
const passport = require('passport')


module.exports = {
    index:(req,res)=>{
        User.find({})
        .then(users=>{
            res.json(users)
        })
        .catch(error=>{
            res.json(error)
        })
    },
    show:(req,res)=>{
        let userId = req.params.uid
        User.findById(userId)
        .then(user=>{
            res.json(user)
        })
        .catch(error=>{
            res.json(error)
        })
    },
    update:(req,res)=>{
        let userId = req.params.uid
        let userInfo = {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
        User.findByIdAndUpdate(userId,{$set: userInfo})
        .then(user=>{
            res.json("User information has been updated")
        })
        .catch(error =>{
            res.json(error)
        })
    },
    delete:(req,res)=>{
        let userId = req.params.uid
        User.findByIdAndRemove(userId)
        .then(user =>{
            res.json("User is deleted successfully")
        })
        .catch(error =>{
            res.json(error)
        })
    },
    create:(req,res)=>{
        let newUser = new User({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        })
        User.register(newUser, req.body.password, (error, user)=> {
            if(user){
                res.json("User is inserted successfully")
            }
            else{
                res.json({error: error})
            }
        })
    },
    login: (req,res)=>{
        passport.authenticate('local',{
            
        })
    }

}
