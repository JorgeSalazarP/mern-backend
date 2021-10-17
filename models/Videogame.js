'use strict';

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const videogameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true, 
      require: true,
      maxlength: 32,
      index:true
    },
    description: {
      type: String,
      trim: true,
      require: true,
      maxlength: 2000,
      index:true
    },
    price: {
      type: Number,
      trim: true,
      require: true,
      maxlength: 32,
      index:true
    },
    category: {
      type: ObjectId,
      ref: 'Category',
      require: true,
      index:true
    },
    quantity: {
      type: Number,
    },
    photo: {
      type: String,
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("Videogame", videogameSchema);