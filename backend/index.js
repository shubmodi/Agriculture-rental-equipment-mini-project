//importing express
const express = require('express');
const UserRouter = require("./routers/userrouter");
const ProductRouter = require("./routers/productRouter");

const cors = require('cors');

//intializing express
const app = express();
const port = 5000;

// middleware
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json());

app.use('/user', UserRouter);
app.use('/product', ProductRouter);


// route or endpoint
app.get('/', (req, res) => {
    res.send('response from expresss')

})

app.get("/add", (req, res) => {
    res.send('response from add')
})

// get all
// get update

app.get("/update", (req, res) => {
    res.send('response from update')
})
app.get("/getall", (req, res) => {
    res.send('response from getall')
})

app.listen(port, () => { console.log('server started') });
