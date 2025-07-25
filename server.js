const express = require('express')
const connectToDB=require('./database/db')
const app = express();

const Port = process.env.PORT || 3000;
connectToDB();
app.use(express.json())


app.listen(Port, () => {
    console.log(`the server is running on ${Port}`)
})