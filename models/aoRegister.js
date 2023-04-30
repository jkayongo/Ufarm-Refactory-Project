const mongoose = require("mongoose")
const aoRegisterSchema = new mongoose.Schema({
    farmerOneName:{
        type: String,
        trim: true
    },
    foNin:{
        type: String,
        trim: true
    },
    foDob:{
        type: String,
        trim:true
    },
    gender:{
        type: String,
        trim:true
    },
    foTel:{
        type: Number,
        trim: true
    },
    ward:{
        type: String,
        trim:true
    },
    residenceType:{
        type: String,
        trim: true
    },
    years:{
        type:String,
        trim: true
    },
    foDirections:{
        type: String,
        trim: true
    },
    foActivities:{
        type: String,
        trim: true
    },
    foUniqueID:{
        type: String,
        trim: true
    },
    foDor:{
        type: String,
        trim: true
    },
})
module.exports = mongoose.model("aoRegisterBook", aoRegisterSchema )