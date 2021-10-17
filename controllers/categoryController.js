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

exports.list = async (req,res,next) =>{
    try {
        const result = await Category.find();
        res.json(result);
        
    } catch (err) {
        next(err);
    }

}


exports.remove = async (req,res,next) =>{
    try {
        const _id = req.params.id;
        const categoryById = await Category.findOne({ _id: _id });
        if(!categoryById){
            return res.status(404).json({ error: 'not found'});
        }
        const deleteCategory = await Category.remove(categoryById);
        res.json({ message: `The Category ${deleteCategory} has been deleted successfully` });
       
    } catch (err) {
        next(err);
    }

}