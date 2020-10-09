const express = require('express');
const router = express.Router();    

const { getCategoryById, createCategory} = require('../controllers/category')
const { getUserById, getUser, updateUser, userPurchaseList } = require('../controllers/user');
const { isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth');


// param
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// actual routers goes here
router.post('/category/create/:userId', isSignedIn, isAuthenticated, isAdmin, createCategory)

module.exports = router;