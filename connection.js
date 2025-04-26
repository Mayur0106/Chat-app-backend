const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.jasausc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, ()=>{
    console.log('connected to mongodb')
})
