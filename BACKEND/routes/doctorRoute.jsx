const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctormodel");
const authMiddleware = require ("./authmiddleware.jsx");

router.post('/get-doctor-info-by-user-id', authMiddleware, async(req,res) => {
    try {
        const doctor = await Doctor.findOne({userId:req.body.userId});
        res.status(200).send({success:true,message:"Doctor info fetched SuccessFully!",data:doctor});

    } 
    catch (error) {
        res.status(500).send({message:"Error getting doctor info",success:false,error});
        console.log (error)
        
    }
})

router.post('/update-doctor-profile', authMiddleware, async(req,res) => {
    try {
        const doctor = await Doctor.findOneAndUpdate({userId:req.body.userId},req.body);
        res.status(200).send({success:true,message:"Doctor Profile Updated SuccessFully!",data:doctor});

    } 
    catch (error) {
        res.status(500).send({message:"Error getting doctor info",success:false,error});
        console.log (error)
        
    }
})

module.exports = router;