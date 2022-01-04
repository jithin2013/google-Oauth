// required modules are imported here

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');

// Google passport authentication config is reqired
require('./passport')

// configure modules required to avoid urlencode and cross origin issues

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Initialised cookie for store session

app.use(cookieSession({
    name: 'Oauth-session',
    keys: ['key1'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Middleware to authorize login or not
const isLoggedIn=(req,res,next)=>{
    if(req.user){
        next();
    }else{
        res.sendStatus(401);
    }
}
// initialize passport js and session

app.use(passport.initialize());
app.use(passport.session());

// default route
app.get('/', (req, res) => {
    res.send("Server is ready");
});

//route to authenticate google account
app.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

// redirect route configured in google developer account
app.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/info' }),
    function (req, res) {
        // Successful authentication, redirect success route.
        res.redirect('/success');
    });

// in case user got unauthenticated it hits info route
app.get('/info', (req, res) => {
    res.send('Not an authenticated user');
})

// Success route can be used only after a google authentication
app.get('/success',isLoggedIn, (req, res) => {
    res.send(`Authenticated successfully with ${req.user._json.email}`);
})

//logout the current session and navigate to base route
app.get('/logout', (req, res) => {
    req.session=null;
    req.logout();
    res.redirect('/')
})

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (user, cb) {
    cb(null, user);
});


app.listen(3000, () => {
    console.log("Server is listening");
})