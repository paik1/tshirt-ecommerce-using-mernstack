const express = require('express');
const router = express.Router();

const { getUserById, getUser, updateUser, userPurchaseList } = require('../controllers/user');
const { isSignedIn, isAuthenticated, isAdmin, sampleMiddleware} = require('../controllers/auth');

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.get("/orders/user/:userId", isSignedIn, isAuthenticated, userPurchaseList)

router.get("/newuser",sampleMiddleware , (req, res) =>{
    // console.log(req.headers.authorization);
    res.json({message: "He is working"})
})




module.exports = router;