'use strict';

const Category = require('../models/Category');

exports.create = async (req,res,next) =>{
    try {
        const category = new Category(req.body);
        const createdCategory = await category.save();
        res.status(201).json({result: createdCategory});
    } catch (err) {
        next(err);
    }

}

exports.list = async(req,res,next)=>{

    try {
        const result = await Category.find();
        res.json(result);
        
    } catch (error) {
        next(err);
    }

}