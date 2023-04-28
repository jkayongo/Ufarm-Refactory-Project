const express = require("express")
const router = express.Router();


router.get("/initialSignIn", (req, res) => {
    res.render("initialSignIn")
});



module.exports = router