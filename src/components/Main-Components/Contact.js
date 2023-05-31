import React, {useEffect, useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    useEffect(()=>{
    },[])

    //https://api.telegram.org/bot6242430268:AAG7yrq4aLxfi0iT8KEs92vuUXHKMAcdQc8/sendMessage?chat_id=380889789&text=Hello%20from%20your%20new%20bot

    const onSubmit = () => {
        if(name === '') {
            alert('Please Enter your Full Name!')
        } else if(email === '' || !email.includes('@')){
            alert('Please Enter your Correct Email!')
        } else if(subject === ''){
            alert('Please select Subject!')
        } else if(message === ''){
            alert('Please enter any Message!')
        } else {
            const url = 'https://api.telegram.org/bot6242430268:AAG7yrq4aLxfi0iT8KEs92vuUXHKMAcdQc8/sendMessage?chat_id=380889789&'
            const msg = 'text=Name: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message
            fetch(url + msg)
                .then(response => response)
                .then((res) => alert('Successfully sent Message'))
                .catch(error => console.error(error));
        }
    }

  return (
    <section className="contact-area page-section scroll-content" id="contact">
        <div className="custom-container">
            <div className="contact-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-dollar-sign"></i> contact
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Let's Work <span>Together!</span></h1>
                </div>
                <h3 className="scroll-animation" data-aos='fade-up'>nikhilkmaguwala@gmail.com</h3>
                <p id="required-msg">* Marked fields are required to fill.</p>

                <form className="contact-form scroll-animation">
                    <div className="alert alert-success messenger-box-contact__msg" style={{display: 'none'}} role="alert">
                        Your message was sent successfully.
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <label htmlFor="full-name">full Name <sup>*</sup></label>
                                <input
                                    type="text"
                                    name="full-name"
                                    id="full-name"
                                    placeholder="Your Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <label htmlFor="email">Email <sup>*</sup></label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email adress"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <label htmlFor="subject">subject <sup>*</sup></label>
                                <select
                                    name="subject"
                                    id="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                >
                                    <option value="">Select a subject</option>
                                    <option value="subject1">Development</option>
                                    <option value="subject2">Course</option>
                                    <option value="subject3">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="input-group">
                                <label htmlFor="message">message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Wrire your message here ..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="input-group submit-btn-wrap">
                                <button
                                    className="theme-btn"
                                    name="submit"
                                    id="submit-form"
                                    onClick={onSubmit}
                                >send message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
