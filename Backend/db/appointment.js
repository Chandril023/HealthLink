const mongoose=require('mongoose');
const appointmentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    phone: {
        type:Number,
        required:true,
        unique:true
    },
    date: {
        type:Date,
        required:true,
    },
    department: {
        type:String,
        required:true,
    },
    doctor: {
        type:String,
        required:true,
    },
    time: {
        type:String,
        required:true,
    },
  });
  const Appointment = mongoose.model('Appointment',appointmentSchema);
  module.exports = Appointment;