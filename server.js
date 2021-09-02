const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL,{ useUnifiedTopology: true})
.then(()=>{
    console.log('connected to database');
})
.catch((err)=>{
    console.log('error while connecting database' + err);
})


app.use(express.json());

const subscribersRoute = require('./routes/subscribers');

app.use('/subscribers',subscribersRoute);







app.listen(3000, ()=> console.log(`Server Started at port no. ${port}`));