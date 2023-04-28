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
        res.redirect("/")
        console.log(req.body)
    }
    catch(err){
        res.status(400).render("/")
    }
})

module.exports = router