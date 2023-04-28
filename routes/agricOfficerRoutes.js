const express = require("express")
const router = express.Router();

router.get("/agricOfficer", (req, res)=>{
    res.render("agricOfficer")
})

module.exports = router