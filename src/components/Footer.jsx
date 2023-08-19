import React from 'react';
import '../footer.css'; 


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="contact-details">
                    <p>Email: lkvharitha@gmail.com</p>
                    <p>Phone: +1 514-238-7985</p>
                    <div className="social-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        {/* Add more social icons as needed */}
                    </div>
                </div>
            </div>
            <p className="footer-note">© 2023 Your Name. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
