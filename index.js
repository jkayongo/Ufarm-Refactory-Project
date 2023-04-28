const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const config = require("./config/database")
const router = express.Router();
const initialSignInRoutes = require("./routes/initialSignInRoutes")
const initialSignUpRoutes = require("./routes/initialSignUpRoutes")
const aoRegistrationRoutes = require("./routes/aoRegistrationRoutes")
const foRegistrationRoutes = require("./routes/foRegistrationRoutes")
const agricOfficerRoutes = require("./routes/agricOfficerRoutes")
const farmerOneRoutes = require("./routes/farmerOneRoutes")
const urbanfarmerroutes = require("./routes/urbanfarmerroutes")
const homeRoutes = require("./routes/homeRoutes")


mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.once("open", ()=>{
    console.log("connected to db")
})
db.on("error", (err)=>{
    console.error(err)
})
// require("dotenv").config();

// const indexRoutes = require("./routes/indexRoutes")


// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/Index.html'))
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","pug")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
//routing
app.use("/", initialSignInRoutes)
app.use("/", initialSignUpRoutes)
app.use("/", aoRegistrationRoutes)
app.use("/", foRegistrationRoutes)
app.use("/", agricOfficerRoutes)
app.use("/", farmerOneRoutes)
app.use("/", urbanfarmerroutes)
app.use("/", homeRoutes)



app.listen(3000, () => console.log('listening on port 3000'));