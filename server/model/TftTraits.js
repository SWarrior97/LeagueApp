const mongoose = require('mongoose')

const TftTraitSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    sets:[{
        style: { type: String },
        min: { type: Number },
        max: { type: Number }
    }]
})

module.exports = mongoose.model('TftTrait', TftTraitSchema)
