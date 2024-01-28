import React from 'react'

const Contact = () => {
    return (
        <>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>
                        Our streamlined communication allows users to easily connect with their chosen doctors for appointments, inquiries, or any necessary follow-ups. We prioritize user convenience and effective communication, placing your health and well-being at the forefront of our app's features.
                        </p>
                    </div>
                </div>
                <div>
                    <iframe
                    title='Kolkata'
                        style={{ border: 0, width: "100%", height: 350 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231268413!2d88.26495110695352!3d22.535406374587144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1698653433200!5m2!1sen!2sin"
                        allowFullScreen=""
                    />
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p>Saltlake, <br/>Iem gurukul campus, Electronic Complex , WB 700091 <br/>Biddhanagar</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>iem@gmail.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+100 22334455</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Contact Section */}
        </>

    )
}

export default Contact
