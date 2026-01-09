import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatus('success');
                    console.log('SUCCESS!');
                    e.target.reset(); // Clear form
                    setTimeout(() => setStatus(''), 5000); // Clear success message after 5s
                },
                (error) => {
                    setStatus('error');
                    console.log('FAILED...', error.text);
                    setTimeout(() => setStatus(''), 5000);
                }
            );
    };

    return (
        <section id="contact" className="section contact">
            <div className="contact-sidebar">

                <div className="social-icons">
                    <a href="https://wa.me/917591952860" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" title="WhatsApp">W</a>
                    <a href="https://www.instagram.com/bloo_beee___" target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Instagram">I</a>
                    <a href="https://www.linkedin.com/in/mohammed-salim-0532a7369" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" title="LinkedIn">in</a>
                    <a href="https://t.me/bloobee1233" target="_blank" rel="noopener noreferrer" className="social-icon telegram" title="Telegram">t</a>
                </div>
            </div>

            <div className="contact-main">
                <h2 className="contact-title">CONTACT US.</h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <h4>Phone</h4>
                            <p>+91 7591952860</p>
                        </div>
                        <div className="info-item">
                            <h4>Email</h4>
                            <p>iadarke400@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        {/* Corner Brackets */}
                        <div className="corner-tl"></div>
                        <div className="corner-tr"></div>
                        <div className="corner-bl"></div>
                        <div className="corner-br"></div>

                        <form className="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" name="user_name" placeholder="NAME" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="user_email" placeholder="EMAIL" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" rows="4" placeholder="MESSAGE" required></textarea>
                            </div>

                            <button type="submit" className="send-btn" disabled={status === 'sending'}>
                                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>

                            {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
                            {status === 'error' && <p className="status-msg error">Failed to send. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
