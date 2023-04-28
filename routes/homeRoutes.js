const express = require("express");
const router = express.Router();


router.get("/Home", (req, res)=>{
    res.render("home")
})


module.exports = router