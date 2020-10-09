var express = require('express');
var router = express.Router();
const { check } = require('express-validator');

const {signout, signup, signin, isSignedIn} = require('../controllers/auth')

router.post('/signup', [
    check("name", "Name should have a minimum length of 3").isLength({ min:3 }),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password should have a minimum length of 3").isLength({ min:3 }),
], signup)

router.post('/signin', [
    check("email", "Email is required").isEmail(),
    check("password", "Password field is required").isLength({ min:3 }),
], signin)

router.get('/signout', signout);

module.exports = router;