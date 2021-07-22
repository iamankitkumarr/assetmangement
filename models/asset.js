const mongoose = require('mongoose');

//movie schema 
const assetSchema = new mongoose.Schema({
    filename:{
        type: String,
        trim: true,
        maxlength: 55,
        required: true,
    },
    filedate:{
        type: Date,
        required: true,
        trim: true
    },
    filetype:{
        type:String,
        trim: true,
        maxlength:55,
        required: true
    },
    filesize:{
        type:String,
        trim:true,
    },
    fileurl:{
        type:String,
        trim:true
    }

},{timestamps:true});

module.exports = mongoose.model("Asset",assetSchema);