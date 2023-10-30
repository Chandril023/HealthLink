import React from 'react'

const topper = () => {
    return (
        <>
            <>
                <div id="topbar" className="d-flex align-items-center fixed-top">
                    <div className="container d-flex justify-content-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope" />{" "}
                            <a href="mailto:contact@example.com">contact@example.com</a>
                            <i className="bi bi-phone" /> +1 5589 55488 55
                        </div>
                        <div className="d-none d-lg-flex social-links align-items-center">
                            <a href="!#" className="twitter">
                                <i className="bi bi-twitter" />
                            </a>
                            <a href="!#" className="facebook">
                                <i className="bi bi-facebook" />
                            </a>
                            <a href="!#" className="instagram">
                                <i className="bi bi-instagram" />
                            </a>
                            <a href="!#" className="linkedin">
                                <i className="bi bi-linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* ======= Header ======= */}
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">
                        <h1 className="logo me-auto">
                            <a href="index.html">HealthLink</a>
                        </h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li>
                                    <a className="nav-link scrollto active" href="#hero">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link scrollto" href="#about">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link scrollto" href="#services">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link scrollto" href="#departments">
                                        Departments
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link scrollto" href="#doctors">
                                        Doctors
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link scrollto" href="#contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>
                        {/* .navbar */}
                        <a href="#appointment" className="appointment-btn scrollto">
                            <span className="d-none d-md-inline">Make an</span> Appointment
                        </a>
                    </div>
                </header>
                {/* End Header */}
            </>

        </>
    )
}

export default topper
