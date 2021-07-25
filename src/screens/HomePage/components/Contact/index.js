import React, { useState } from "react";
import axios from 'axios';
import './index.css';
import Swal from 'sweetalert2'

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const submitSMS = () => {
        console.log(name, email, phone, message);
        let sms = 'New message from ' + name + ' \n' + message + " \n contact: " + phone;
        axios.post('https://react-sesh-sms-3829.twil.io/sendsms', {
            Body: sms
        }).then(response => {
            console.log(response)
            if (response.data.status === "success") {
                Swal.fire(
                    'Message Sent!',
                    'Successfully sent the message!',
                    'success'
                );
            }
        }).catch(err => {
            console.log(err)
            Swal.fire(
                'Error!',
                err,
                'error'
            )
        })
    }

    return (
        <section className="contact-section">
            <h1 className="title is-3 mb-4">Reach out to me</h1>
            <div className="columns">
                <div className="column is-6 contact-image-column">
                    <img src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif"></img>
                </div>
                <div className="column is-6">
                    <form>
                        <div class="field">
                            <label class="label">Your Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input" onChange={(e) => { setName(e.target.value) }} />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Your Email</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="Text input" onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Your Phone</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input" onChange={(e) => { setPhone(e.target.value) }} />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Message</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Textarea" onChange={(e) => { setMessage(e.target.value) }}></textarea>
                            </div>
                        </div>
                    </form>
                    <div class="field is-grouped mt-3">
                        <div class="control">
                            <button class="button is-link" onClick={submitSMS}>Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
