const mongoose = require('mongoose')

const TftChampsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    champId:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true

    },
    traits:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"TftTraits"
    }]
})

module.exports = mongoose.model('TftChamp', TftChampsSchema)
