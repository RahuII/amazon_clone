const express = require("express"); // importing express
const mongoose = require('mongoose');

// IMPORTS FROM OTHER FILES

const authRouter = require('./routes/auth');
const DB = "mongodb+srv://rahul:rahul@cluster0.arecgqz.mongodb.net/?retryWrites=true&w=majority";

// INIT
const PORT = 3000;

const app = express();

// middleware
app.use(express.json());
app.use(authRouter);

mongoose.connect(DB).then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.log(e);
});




app.listen(PORT, "0.0.0.0", function () {
    console.log(`connected at port ${PORT}`);
});

