const express = require('express');
const router = express.Router();
const User = require("../models/usermodel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require ("./authmiddleware.jsx");

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

router.post('get-user-info-by-id', authMiddleware, async(req,res) => {
    try {
        const user = await User.findOne({_id:req.body.userId});
        if(!user) {
            return res.status(200).send({message:"User does not Exist",success:false});

        }
        else {
            res.status(200).send({success:true, data:{name:user.name,email:user.email,},});
        }
        
    } 
    catch (error) {
        res.status(500).send({message:"Error getting user info",success:false,error});
        console.log (error)
        
    }
})

module.exports = router;
