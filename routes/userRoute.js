const express=require('express')
const router = express.Router()
const User=require('../models/User')
const {mongoose} = require('mongoose')
const jwt = require("jsonwebtoken");
const bcrypt = require ("bcrypt")
const secreatkey="vau.phy@2025" //you can create your own key
/*
router.post('/register', async (req,res)=>{
    try{
    let { username,email,password} = req.body
    if(!username || !email || !password){
        return res.status(400).send("Please provide the required fileds!")
    }
    if(await User.findOne({username})){
        return res.status(404).send("username already available!")
    }
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)
    const results = await User.create({username,email,password})
    return res.status(200).json(results)

}catch (error) {
    console.error(error);
    res.status(500).send("Server Error !")
}   

})
*/
// login authen
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).send("Please provide the required fields!");
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).send("Invalid username or password!");
        }

        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            return res.status(400).send("Invalid username or password!");
        }

        const payload = { ID: user._id, NAME: user.username };
        const token = jwt.sign({ ID: user._id, NAME: user.username }, "your-secret-key");

        res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error!");
    }
});

module.exports = router;