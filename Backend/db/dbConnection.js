const User = require('./user');
const Appointment= require('./appointment')
const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://root:root@hospital.nurkzi0.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {connectDB,User,Appointment};