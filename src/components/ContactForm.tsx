import { useState, FormEvent } from "react";
import { setTimeout } from "timers/promises";
import ContactFormInput from "./ContactFormInput";
import Person from './images/person.png'
import Phone from './images/phone.png'
import Email from './images/email.png'

const ContactForm: React.FC = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [sending, setSending] = useState<string>('Send Message');
    const [error, setError] = useState<string>();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        if (sending == 'Message Sent!') {
            setError("You've already sent a message, are you sure you want to send another one?");
            setSending('Send Message');
            return;
        }
        setSending('Sending Message...');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, email: email, phone: phone, message: message   })
        };
        fetch('https://swiftah-discord-bot.herokuapp.com/contact', requestOptions)
            .then(response => {
                if(response.ok) {
                    setSending("Message Sent!");
                }
                else {
                    setSending('Error!');
                    setError('An error occured while sending your message. Please try again.');
                    window.setTimeout(() => {
                        setSending('Send Message');
                      }, 3000);
                }
            });
    }
    
    return (    
        <div className='contact-form-container'>
            <h1 className='contact-header'>Contact Me!</h1>
            <form className='contact-form' onSubmit={handleSubmit}>
                <label className='contact-error'>{error}</label>
                <div className='contact-info-container'>
                    <ContactFormInput name='Name' icon={Person} onChange={e => setName(e.target.value)}/>
                    <ContactFormInput name='Email' icon={Email} onChange={e => setEmail(e.target.value)}/>
                    <ContactFormInput name='Phone' icon={Phone} onChange={e => setPhone(e.target.value)}/>
                </div>
                <div className='contact-message-container'>
                    <label className='contact-label'>Message</label>
                    <textarea className='contact-textarea' required onChange={e => setMessage(e.target.value)} />
                </div>
                <div className='contact-btn-container'>
                    <button className="contact-btn" type='submit'>{sending}</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm