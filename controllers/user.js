const User = require("../models/user")
const passport = require('passport')
const jsonWebToken = require("jsonwebtoken");
const { json } = require("express");


module.exports = {
    index:(req,res)=>{
        User.find({})
        .then(users=>{
            res.json({users})
        })
        .catch(error=>{
            res.json({error: error})
        })
    }, 
    show:(req,res)=>{
        let userId = req.params.uid
        User.findById(userId)
        .then(user =>{
            res.json({user})
        })
        .catch(error =>{
            res.json({error: error})
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
            res.json({message: "User information has been updated"})
        })
        .catch(error=>{
            res.json({error: error})
        })
    },
    delete: (req,res)=>{
        let userId = req.params.uid
        User.findByIdAndRemove(userId)
        .then( ()=>{
            res.json({message: "User is deleted"})
        })
        .catch(error =>{
            res.json({error: error})
        })
    },
    create: (req,res)=>{
        let newUser= new User({
            name : req.body.name ,
            email : req.body.email ,
            age : req.body.age
        })
        User.register(newUser, req.body.password, (error, user)=>{
            if(user){
                res.json({message : "User inserted!"})
            } else {
                res.json({error : error })
            }
        })
    },
    authenticate: (req, res, next) =>{
        passport.authenticate('local', (error, user) =>{
            if(user){
                let signedToken = jsonWebToken.sign({
                    data: user._id,
                    exp: new Date().setDate(new Date().getDate() + 1)
                },'Lacorbi86');

                res.json({
                    success: true,
                    token: signedToken
                });
            }else{
                res.json({
                    success: false,
                    message: 'Could not authenticate user.'
                });
            }
        })(req, res, next);
    },
    verifyJWT: (req,res, next)=>{
        let token = req.body.token
        if(token){
            jsonWebToken.verify(token, 'Lacorbi86', (errors, payload)=>{
                if(payload){
                    User.findById(payload.data).then(user =>{
                        if(user){
                            next()
                        }
                        else{
                            res.json({error: error})
                        }
                    })
                }
                else{
                    res.json({message: "No user account found", error: true})
                }
            })
            next()
        }
        else{
            res.json({error: "Please provide a token!"})
        }
    }

}
