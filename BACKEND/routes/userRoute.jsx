const express = require('express');
const router = express.Router();
const User = require("../models/usermodel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require ("./authmiddleware.jsx");
const Doctor = require ("../models/doctormodel.js")

router.post('/register', async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(200).send({ message: "User already Exists", success: false })
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newuser = new User(req.body);
        await newuser.save();
        res.status(200).send({ message: "User Created Successfully", success: true });
    }
    catch (error) {
        res.status(500).send({ message: "Error Creating User", success: false,error})
        console.log(error)

    }
});

router.post('/login', async (req, res) => {
   
    
    try {
        const user = await User.findOne({email:req.body.email});
        if (!user) {
            return res.status(200).send({message:"User does not Exist",success:false});
        }

        const isMatch = await bcrypt.compare(req.body.password,user.password);
        if (!isMatch) {
            return res.status(200).send({message:"Password is Incorrect",success:false});
        }
        else {
            const token = jwt.sign({id:user._id},"Bhaskat_Healthy_app",{
                expiresIn:"1d",
            });
            res.status(200).send({message:"Login Successful",success:true,data:token});
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({message:"Error logging in",success:false,error})

    }
});

router.post('/get-user-info-by-id', authMiddleware, async(req,res) => {
    try {
        const user = await User.findOne({_id:req.body.userId});
        user.password = undefined;
        if(!user) {
            return res.status(200).send({message:"User does not Exist",success:false});

        }
        else {
            // res.status(200).send({success:true, data:{name:user.name,email:user.email,},});
            res.status(200).send({success:true, data:user});
        }
        
    } 
    catch (error) {
        res.status(500).send({message:"Error getting user info",success:false,error});
        console.log (error)
        
    }
})

router.post('/apply-doctor-account', authMiddleware ,async (req, res) => {
    try {
        const newdoctor = new Doctor({...req.body , status : "pending"});
        await newdoctor.save();
        const adminUser = await User.findOne({isAdmin:true});
        const unseenNotifications = adminUser.unseenNotifications
        unseenNotifications.push({
            type:'new-doctor-request',
            message:`${newdoctor.firstName} ${newdoctor.lastName} has applied for a doctor account`,
            data:{
                doctorId:newdoctor._id,
                name:newdoctor.firstName + " " + newdoctor.lastName,
            },
            onClickPath : "/admin/doctor",
        })
        await User.findByIdAndUpdate(adminUser._id,{unseenNotifications});
        res.status(200).send({success:true,message:"Doctor account applied successfully"});
        
    }
    catch (error) {
        res.status(500).send({ message: "Error Applying doctor account", success: false,error})
        console.log(error)

    }
});

//data transfer from unseen msg to seen msg
router.post('/mark-all-notifications-as-seen', authMiddleware ,async (req, res) => {
    try {
        const user = await User.findOne({_id:req.body.userId});
        const unseenNotifications = user.unseenNotifications;
        const seenNotifications = user.seenNotifications;
        seenNotifications.push(...unseenNotifications);
        user.unseenNotifications=[];
        user.seenNotifications = seenNotifications;
        const updatedUser = await user.save();
        updatedUser.password = undefined;

        res.status(200).send({success:true,message:"All notifications marked as seen"});
        
    }
    catch (error) {
        res.status(500).send({ message: "Error notifications marked as seen", success: false,error})
        console.log(error)

    }
});

router.post('/detete-all-notifications', authMiddleware ,async (req, res) => {
    try {
        const user = await User.findOne({_id:req.body.userId});
        user.unseenNotifications = []
        user.seenNotifications = []
        const updatedUser = await user.save();
        updatedUser.password = undefined;

        res.status(200).send({success:true,message:"Deleted All Messages"});
        
    }
    catch (error) {
        res.status(500).send({ message: "Error Deleted All Messages", success: false,error})
        console.log(error)

    }
});


module.exports = router;
