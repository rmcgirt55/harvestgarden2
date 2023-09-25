const router = require('express').Router()
const bcrypt = require('bcrypt')
const db = require('../models')
const passport = require('passport');

//GET All Users
// router.get('/', (req, res) => {
//     db.User.find()
//         .then((users) => {
//             res.render('users/index', { users })
//         })
//         .catch(err => {
//             console.log(err)
//             res.render('error404')
//         })
// })

//GET User login Form
router.get('/login', (req, res) => {
    const users = db.User.find()
    res.render('users/login', { users })
})

//GET New User Form
router.get('/register', (req, res) => {
    const users = db.User.find()
    res.render('users/new', { users })
})

// GET User by Id
router.get('/:id', (req, res) => {
    db.User.findById(req.params.id)
        .then(user => {
            res.render('users/show', { user })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// POST Create new User
router.post('/register', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    // Validate user input (e.g., check for duplicate email)

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = { first_name, last_name, email, password: hashedPassword }
    // Create a new user in the database with the hashed password
    await db.User.create(data)
        .then(() => {
            // passport.authenticate('local', {
            //     successRedirect: '/',
            //     failureRedirect: '/users/login',
            //     failureFlash: true, // Enable flash messages for error messages
            // })
            res.redirect('/users/login')
        })
        .catch(err => {
            console.log('err here', err.kind)
            // res.redirect('/')
            // console.log('err', err)
            // res.render('error404')
        })
})

// POST User login
router.post('/login', async (req, res, next) => {
    // passport.authenticate('local', {
    //     successRedirect: '/',
    //     failureRedirect: '/users/login',
    //     failureFlash: true, // Enable flash messages for error messages
    // }), (req, res) => {
    //     console.log(req.user);
    // }
    // });

    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        if (!user) {
            return res.send({ success: false, message: 'authentication failed' });
        }
        // ***********************************************************************
        // "Note that when using a custom callback, it becomes the application's
        // responsibility to establish a session (by calling req.login()) and send
        // a response."
        // Source: http://passportjs.org/docs
        // ***********************************************************************
        req.login(user, loginErr => {
            if (loginErr) {
                return next(loginErr);
            }
            // return res.send({ success: true, message: 'authentication succeeded' });
            return res.redirect('/')
        });
    })(req, res, next);    
})


module.exports = router