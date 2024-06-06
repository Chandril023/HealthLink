const nodemailer=require('nodemailer')
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Add this line to load .env file
const app = express();
const port = 8000;

const {connectDB,User,Appointment} =require('./db/dbConnection.js');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
//function for sending mail
async function sendMail(name,email,doctor,date,time){    
   const transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'yaski15.1005@gmail.com',
            pass: 'jswpyulzgwjetslq'
        }
    })
    const mailOptions = {
        from:'yaski15.1005@gmail.com',
        to: email ,
        subject: 'Doctors Appointment',
        text: `Hello ${name},Your Appointment with ${doctor} is successfully Booked on ${date} at ${time}.
        \nThank you for choosing HealthLInk.`,
    }

 //3. send email
    try {
       const result = await transporter.sendMail(mailOptions);
       console.log('Eamil sent successfully')
    } catch (error) {
        console.log('Email send failed with error:', error)
    }
}


//Middleware for parsing JSON
app.use(express.json());

//Enable CORS
app.use(cors())

//Registration
app.post('/register',async(req,res) => {
    try{
        const {username,password} = req.body;
        console.log(req.body)
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'Registration Successful'});
    }
    catch(error){
        res.status(500).json({error:'Registration failed'});
    }
})

//Login
app.post('/login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({success: false, message:'Invalid username or Password'});
        }

        if(user.password !== password){
            return res.status(401).json({success: false, message:'Invalid username or password'});
        }
        res.status(200).json({success:true,message:'Login successful'});
       
        }
    
    catch(error){
        res.status(500).json({success: false, message:'Login failed'})
    }
})
//appointment
app.post('/submit-appointment', async (req, res) => {
    try {
        const { name, email, phone, date, department, doctor, time } = req.body;
        const appointment = new Appointment({ name, email, phone, date, department, doctor, time });
        await appointment.save();
        res.status(201).json({ success:true,message: 'Appointment submitted successfully' });
        await sendMail(appointment.name,appointment.email,appointment.doctor,appointment.date,appointment.time);
     } catch (error) {
        console.error('Error submitting appointment:', error);
        res.status(500).json({ error: 'Error submitting appointment' });
    }
});
const adminRouter = require('./routes/admin');
app.use('/admin', adminRouter);
connectDB();

app.listen(port,()=> {
 console.log('Server is listening on Post 8000')
});
