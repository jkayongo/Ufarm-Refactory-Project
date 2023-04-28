const express = require("express");
const router = express.Router();


router.get("/foRegistration", (req, res)=>{
    res.render("foRegistration")
})

module.exports = router