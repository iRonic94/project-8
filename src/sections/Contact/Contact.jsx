import '../Contact/Contact.scss';
import { useState } from 'react';

function Contact() {
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    function handleSubmit(event) {
        event.preventDefault();

        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
            setSuccess(false);
        }, 4000);
    }
    return (
        <section id="contact" className="contact">
            <h1 className="section-title"> Contact</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder="Your Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit"> Send Message</button>
            </form>
            {success && (
                <div className="toast success">
                    Message sent successfully!
                </div>
            )}
        </section>
    )
}

export default Contact;