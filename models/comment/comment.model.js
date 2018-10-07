const mongoose = require('mongoose');
const Comment = mongoose.Schema({
    idHusky: {
        type: String,
        require: true
    },
    nameUser: {
        type: String,
        require: true
    },
    contentComment :{
        type:String,
        default: "."
    },
    likeComment : {
        type : Number,
        default : 0
    }
})

module.exports = mongoose.model('Commnents',Comment)