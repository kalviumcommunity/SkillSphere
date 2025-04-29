const express = require ("express");
const mongoose = require ("mongoose");
const User = require ('./user');
const app = express();
app.use(express.json());
const PORT = 5000 ;
app.post('/user' , async (req , res) => {
    try{
        const newUser = new User (req.body);
        await newUser.save();
        res.status(201).json({message : "new user added" , newUser});
    }catch(err){
        res.status(500).json({error : err.message});
    }
    
})
app.get('/user/:id' , async (req , res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json({user});
    }catch(err){
        res.status(500).json({error : err.message});
    }
    
})
app.listen(PORT , () => {
    console.log(`the server is running on http://localhost:${PORT}`);
})