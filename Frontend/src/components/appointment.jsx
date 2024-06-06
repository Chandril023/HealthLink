import React, { useState } from 'react';
import axios from 'axios';

const Appointment = () => {
    const [appointmentData, setAppointmentData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        department: '',
        doctor: '',
        time: '',
    });

    const handleAppointmentSubmit = async () => {
        try {
            const response = await axios.post('https://healthlink-a92n.onrender.com/submit-appointment', appointmentData);
            const { success, message } = response.data;

            if (success) {
                console.log('Appointment request sent successfully');
                window.location.href = '/success';
            } else {
                console.log(message);
            }
        } catch (error) {
            console.error('Appointment request failed', error);
        }
    };

    const handleAppointmentChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            {/* ======= Appointment Section ======= */}
            <section id="appointment" className="appointment section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>
                           please fill up the necessary fields to make an appointment request. You will be mailed after confirmation.
                        </p>
                    </div>
                    <form className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    onChange={handleAppointmentChange}
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    onChange={handleAppointmentChange}
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    onChange={handleAppointmentChange}
                                />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control datepicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    onChange={handleAppointmentChange}
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select
                                    name="department"
                                    id="department"
                                    className="form-select"
                                    onChange={handleAppointmentChange}
                                >
                                    <option value="">Select Department</option>
                                    <option value="General">General</option>
                                </select>
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select
                                    name="doctor"
                                    id="doctor"
                                    className="form-select"
                                    onChange={handleAppointmentChange}
                                >
                                    <option value="">Select Doctor</option>
                                    <option value="Dr. Arpan Basu">Dr. Arpan Basu</option>
                                    <option value="Dr. Spandan Sahu">Dr. Spandan Sahu</option>
                                    <option value="Dr. Mamata Banerjee ">Dr. Mamata Banerjee</option>
                                </select>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                                <input
                                    type="time"
                                    name="time"
                                    className="form-control datepicker"
                                    id="time"
                                    placeholder="Appointment Time"
                                    onChange={handleAppointmentChange}
                                />
                                <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">
                                Your appointment request has been sent successfully. Thank you!
                            </div>
                        </div>
                        <div className="text-center">
                            <button className='button-1' type="button" onClick={handleAppointmentSubmit}>
                            Pay ₹1
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {/* End Appointment Section */}
        </>
    );
};

export default Appointment;

