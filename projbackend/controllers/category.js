const User = require('../models/user');
const Order = require('../models/order');
const Category = require('../models/category');


exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if(err){
            return res.status(400).json({
                error : "Category not found in the DB"
            })
        }
        req.category = category;
        next();
    });
}

exports.createCategory = (req,res) => {
    const category
}