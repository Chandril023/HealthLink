import React from 'react'

const footer = () => {
    return (
        <>
            {/* ======= Footer ======= */}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>HealthLink</h3>
                                <p>
                                    Kachrapara <br />
                                    Kolkata , WB 700001
                                    <br />
                                    Bharat <br />
                                    <br />
                                    <strong>Phone:</strong> +1 5589 55488 55
                                    <br />
                                    <strong>Email:</strong> info@HealthLink.com
                                    <br />
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="!#">Home</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="!#">About us</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="!#">Services</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="!#">Terms of service</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="!#">Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="!#">Web Booking</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="!#">Ambulance</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="!#">Bed Availability</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="!#">Hospital Management</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="!#">Healthcare</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>
                                    Tamen quem nulla quae legam multos aute sint culpa legam noster
                                    magna
                                </p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" defaultValue="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            © Copyright{" "}
                            <strong>
                                <span>HealthLink</span>
                            </strong>
                            . All Rights Reserved
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="!#" className="twitter">
                            <i className="bx bxl-twitter" />
                        </a>
                        <a href="!#" className="facebook">
                            <i className="bx bxl-facebook" />
                        </a>
                        <a href="!#" className="instagram">
                            <i className="bx bxl-instagram" />
                        </a>
                        <a href="!#" className="google-plus">
                            <i className="bx bxl-skype" />
                        </a>
                        <a href="!#" className="linkedin">
                            <i className="bx bxl-linkedin" />
                        </a>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
        </>
    )
}

export default footer
