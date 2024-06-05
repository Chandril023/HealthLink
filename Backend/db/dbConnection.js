const User = require('./user');
const Appointment= require('./appointment')
const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://chandril:kolkata100@cluster0.h4kjctc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {connectDB,User,Appointment};