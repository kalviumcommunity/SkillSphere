const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const User = require('./user');
const app = express();
app.use(express.json());

const PORT = 5000;

mongoose.set('debug', true); 

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB not connected: ", err.message);
    });

app.post('/user', async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "Invalid or empty request body" });
        }
        const newUser = new User(req.body);
        const result = await newUser.save();
        res.status(201).json({ message: "new user added", newUser: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.put('./user/:id' , async(req , res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id , req.body , {new:true});
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated", updatedUser });
    }catch(err){
        res.status(500).json({message : "falls under catch" , error: err.message})
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
