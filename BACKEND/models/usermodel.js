const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
    },
    isDoctor:{
        type:Boolean,
        default:false,
    },
    isAdmin: {
        type:Boolean,
        default:false,
    },
    seenNotifications: {
        type:Array,
        default:[],
    },
    unseenNotifications: {
        type:Array,
        default:[],
    },
})

const usermodel = mongoose.model("users",userSchema);

module.exports = usermodel;