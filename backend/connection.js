const mongoose = require('mongoose');
const url ="mongodb+srv://shubhammodi:8528@mern.acjco.mongodb.net/Agriculturerentalequipments?retryWrites=true&w=majority&appName=MERN"

// connect to the database

// asynchronous -return a promise
mongoose.connect(url)
.then((result) => {
    console.log("Connected to the database");
})
.catch((err) => {
 console.log(err);

})

module.exports = mongoose;