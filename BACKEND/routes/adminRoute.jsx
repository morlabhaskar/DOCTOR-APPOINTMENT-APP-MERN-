const express = require('express')
const router = express.Router();
const User = require("../models/usermodel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require ("./authmiddleware.jsx");
const Doctor = require ("../models/doctormodel.js")

router.get('/get-all-doctors',authMiddleware,async(req,res)=>{
    try {
        const doctors = await Doctor.find({});
        res.status(200).send({message:"Doctors fetching Successfully!",success:true,data:doctors,});

    } 
    catch (error) {
        console.log(error);
        res.status(500).send({message:"Error Doctors fetching!",success:false,error,});

        
    }
})

router.get('/get-all-users',authMiddleware,async(req,res)=>{
    try {
        const users = await User.find({});
        res.status(200).send({message:"Users fetching Successfully!",success:true,data:users,});

    } 
    catch (error) {
        console.log(error);
        res.status(500).send({message:"Error Users fetching!",success:false,error,});

        
    }
})

router.post("/change-doctor-account-status",authMiddleware,async(req,res)=>{
    try {
        const  {doctorId,status} = req.body;
        const doctor = await Doctor.findByIdAndUpdate(doctorId,{status});
        const user = await User.findOne({_id:doctor.userId});
        const unseenNotifications = user.unseenNotifications;
        unseenNotifications.push({
            type:'new-doctor-request-changed',
            message:`Your Doctor Account has been ${status}`,
            onClickPath : "/notifications",
        })
        user.isDoctor = status === "approved" ? true : false;
        await user.save();


        res.status(200).send({message:"Doctor Status Updated Successfully!",success:true,data:doctor});

    } 
    catch (error) {
        console.log(error);
        res.status(500).send({message:"Error Applying Doctor Account!",success:false,error});

        
    }
})


module.exports = router;