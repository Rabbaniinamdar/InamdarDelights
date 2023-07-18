import React from 'react';
import "../components/styles/Footer.css";

const Footer = () => {
    return (
        <div>
            <div className="footer-background">
                <div className="footer-container">
                    <p>Inamdar Delights is a charming neighborhood bistro that serves simple and classic food in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                    <div className="footer-content">
                        <div className="locations">
                            <h5>LOCATIONS</h5>
                            <ul>
                                <li>Bidar</li>
                                <li>Humnabad</li>
                                <li>Bhalki</li>
                                <li>Gulbarga</li>
                            </ul>
                        </div>
                        <div className="opening-times">
                            <h5>OPENING TIMES</h5>
                            <ul>
                                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                                <li>Fri: 12:00PM - 1:00AM</li>
                                <li>Sat - Sun: 10:30AM - 12:00AM</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h5>CONTACT US</h5>
                            <ul>
                                <li>Police Station, opp. Gurudwara Rd </li>
                                <li>phone: 7760375578</li>
                                <li>Email: info@inamdardelights.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© 2023 Inamdar Delights Ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
