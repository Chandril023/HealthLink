import React from 'react'

const Whyus = () => {
    return (
        <>
            <section id="why-us" className="why-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-stretch">
                            <div className="content">
                                <h3>Why Choose HealthLink ?</h3>
                                <p>
                                We deliver a comprehensive solution with a single point-of-contact allowing you to focus on better patient care. Security, Privacy, Usability, Features, Speed, Support, Service, Reliability and Safety are the words that come to mind while selecting a Healthcare IT Service & that is what we bring to you.
                                </p>
                                <div className="text-center">
                                    <a href="#contact" className="more-btn">
                                        Learn More <i className="bx bx-chevron-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 d-flex align-items-stretch">
                            <div className="icon-boxes d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-receipt" />
                                            <h4>World-Class Hospitals</h4>
                                            <p>
                                            "Setting the Standard for Excellence in Healthcare: Your Trusted Destination for World-Class Hospitals and Unparalleled Patient Care."
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-cube-alt" />
                                            <h4>Best Doctors</h4>
                                            <p>
                                            "Home to the Best Doctors: Where Expertise, Compassion, and Innovation Unite for Your Health and Well-being."
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-images" />
                                            <h4>Certified Lab Procedures</h4>
                                            <p>
                                                
                                             "Ensuring Precision and Confidence: Certified Lab Procedures for Accurate Diagnostics and Comprehensive Healthcare Solutions."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End .content*/}
                        </div>
                    </div>
                </div>
            </section>
            {/* End Why Us Section */}
        </>

    )
}

export default Whyus
