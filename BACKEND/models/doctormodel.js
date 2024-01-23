const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    specialization: {
        type: String,
        require: true,

    },
    experience: {
        type: String,
        require: true,
    },
    feePerConsultation: {
        type: Number,
        require: true,
    },
    // timings: {
    //     type: String,
    //     require: true,
    // },
    timings: {
        type: [String],
        required: true,
    },
    status:{
        type:String,
        default:"pending"
    }
},
    {
        timestamps: true,
    })

const doctorModel = mongoose.model("doctors", doctorSchema);

module.exports = doctorModel;