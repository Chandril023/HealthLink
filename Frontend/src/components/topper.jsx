import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';
const Topper = () => {
    
    return (
        <>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" />{" "}
                        <a href="mailto:contact@example.com">healthlink@gmail.com</a>
                        <i className="bi bi-phone" /> +91 9189786756
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
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li ><Link to='/admin/login'>Admin</Link></li>
                            <li ><a>Signup</a></li>
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
                             <li>
                             <SignedIn>
                            <a href="#appointment" >
                            <button className='button-18'>Make an Appointment</button>
                             </a>
                            </SignedIn>
                             </li>
                            <li><SignedOut>
                                <SignInButton className='button-18' />
                            </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                   
                </div>
            </header>
            {/* End Header */}
        </>
    );
};

export default Topper;
