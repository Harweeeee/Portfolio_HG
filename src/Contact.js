import React, { useState } from 'react'
import Nav from './Nav'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')
    let [number, setNumber] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        const serviceId = 'service_vv394ui'
        const templateId = 'template_tnmc4jg'
        const publicKey = 'Zio6IV9P9v2qcffKf'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Harleigh',
            message: message,
            number: number,
        }

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response)
                setName('')
                setEmail('')
                setMessage('')
                setNumber('')
                alert('Your email has been sent, chat soon ☕')
            })
            .catch((error) => {
                console.error('Error sending email:', error)
            })
    }
    return (
        <div className="Contact">
            <Nav />

            <div className="Contact">
                <h1 className="secondaryFont">Contact</h1>
                <form className="contactForm" onSubmit={handleSubmit}>
                    <div className="userDetails">
                        <input
                            className="detailInput"
                            placeholder="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        ></input>
                        <input
                            className="detailInput"
                            placeholder="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        ></input>
                        <input
                            className="detailInput"
                            placeholder="number"
                            type="tel"
                            max="10"
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                        ></input>
                    </div>
                    <div className="userMessage">
                        <input
                            className="messageInput"
                            placeholder="message"
                            type="text"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
                        ></input>
                    </div>
                    <div className="submitButtonContainer">
                        <input type="submit" className="submitButton"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
