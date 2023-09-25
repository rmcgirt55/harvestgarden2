const express = require('express')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const passport = require('passport');
const passportConfig = require('./passport-config'); // Import your Passport configuration
require('dotenv').config()
const plantController = require('./controllers/plant')
const userController = require('./controllers/user')

const app = express()

app.use(
    session({
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI
        }),
        secret: 'your-secret-key', // Change this to a secure secret
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

passportConfig(passport); // Initialize Passport with your configuration


// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/plants', plantController)

app.use('/users', userController)

// ROUTES
app.get('/', (req, res) => {
    res.render('home', { user: req.user })
})

// get authUser
app.get('/authUser', (req, res) => {
    console.log("req.user");
    console.log(req.user);
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
        // If authenticated, send the user data in the response
        res.json({ user: req.user });
    } else {
        // If not authenticated, send an empty object or an error message
        res.json({ user: null }); // You can customize this response as needed
    }
})

app.get('/logout', (req, res) => {
    // console.log('loging out...');
    // req.logout();
    // console.log(`you're logged out!`);
    // res.redirect('/');

    console.log('Logging out...');

    // Use req.logout() with a callback function
    req.logout(() => {
        console.log(`You're logged out!`);
        res.redirect('/');
    });
});

app.get('*', (req, res) => {
    res.render('error404')
})


// DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`listening on port ${PORT}`))

// npx nodemon js