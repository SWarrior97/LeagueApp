const mongoose = require('mongoose')

const TftItemSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    }
})

module.exports = mongoose.model('TftItem', TftItemSchema)
