import { useState, FormEvent } from "react";

const ContactForm: React.FC = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [sending, setSending] = useState<string>();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending("Sending Message...");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, email: email, message: message   })
        };
        fetch('https://swiftah-discord-bot.herokuapp.com/contact', requestOptions)
            .then(response => {
                if(response.ok) {
                    setSending("Message Sent!");
                }
                else {
                    setSending("Failed to send message");
                }
            });
    }
    
    return (    
        <div className='contact-form'>
            <h1 className="contact-header">Contact Me!</h1>
            <form onSubmit={handleSubmit}>
                <label className="contact-label" htmlFor="name">Name</label>
                <input className="contact-input" type="text" id="name" required onChange={e => setName(e.target.value)} />
                <label className="contact-label" htmlFor="email">Email</label>
                <input className="contact-input" type="email" id="email" required onChange={e => setEmail(e.target.value)} />
                <label className="contact-label" htmlFor="message">Message</label>
                <textarea className="contact-textarea" id="message" required onChange={e => setMessage(e.target.value)} />
                <button className="contact-btn" type="submit">Submit</button>
                <label className="contact-sending">{sending}</label>
            </form>
        </div>
    )
}

export default ContactForm