import React from 'react'

const Services = () => {
    return (
        <>
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>
                        We pride ourselves on delivering a diverse range of world-class services tailored to meet the unique needs of our patients. Whether you're looking to book hospital beds, make an appointment with the doctor, or cutting-edge lab results, we have you covered. 
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="fas fa-heartbeat" />
                                </div>
                                <h4>
                                    <a href="!">Hospital Beds</a>
                                </h4>
                                <p>
                                    Book beds at your nearest world class hospitals with the hassle of being there physically
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="fas fa-pills" />
                                </div>
                                <h4>
                                    <a href="!">Doctors Appointment</a>
                                </h4>
                                <p>
                                   Book an appointment with the best doctors from the comfort of your home
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="fas fa-hospital-user" />
                                </div>
                                <h4>
                                    <a href="!">Lab Report</a>
                                </h4>
                                <p>
                                    Get accurate lab results without worrying about authenticity
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Services Section */}
        </>

    )
}

export default Services
