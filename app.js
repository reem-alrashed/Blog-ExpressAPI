let express = require('express')
let mongoose = require('mongoose'),
app = express()
const router = require('./routes/index')
const passport = require('passport')
const User = require('./models/user')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/blogs',{
    useNewUrlParser:true
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cookieParser('api'))
app.use(expressSession({
    secret: 'api',
    cookie:{ maxAge: 4000000}
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use('/',router)

app.listen(3000,()=>{
    console.log("express has started!")
})