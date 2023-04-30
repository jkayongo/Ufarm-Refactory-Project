const express = require("express");
const { models } = require("mongoose");
const router = express.Router();
const aoRegisterBook = require("../models/aoRegister")


router.get("/aoRegistration", (req, res)=>{
    res.render("aoRegistration")
})

router.post("/aoRegistration", async(req,res)=>{
    try{
        const aoRegistry = new aoRegisterBook(req.body);
        await aoRegistry.save()
        res.redirect("/farmerOnes")
        console.log(req.body)
    }
    catch(err){
        res.status(400).render("/")
    }
})

router.get("/farmerOnes", async(req,res)=>{
    try{
        let items = await aoRegisterBook.find();
        console.log(items)
        res.render("farmerOnes", {farmerOnes:items})
    }
    catch(err){
        console.log(err)
        res.send("Failed to retrieve farmer one's details")
    }
});

module.exports = router