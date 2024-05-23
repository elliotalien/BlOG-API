const mongoose = require("mongoose");

const blogShema = new mongoose.Schema({

    titleheading: {
        type: String,  
        required: true
    },
    titledescription: {
        type: String, 
        required: true
    },  
    description: { 
        type: String,
        required: true
    }, 
    imageUrl: {
        type: String, 
        required: true
    },
    date: { 
         type: Date,
         default: Date.now 
    },
    comment: { 
        type: Number,
        default: 0
    } 
}) 

const Blog = mongoose.model("blogModel", blogShema)

module.exports = Blog;
