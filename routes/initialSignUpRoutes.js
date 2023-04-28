const express = require("express");
const router = express.Router();

router.get("/initialSignUp",(req,res)=>{
    res.render("initialSignUp")
})
module.exports = router