import React, {useEffect} from 'react';
import './Contact.css';
import Footer from '../0Components/Footer/Footer';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className='contact-page'>
            <div className="contact-container">
                <h1 className='contact-header'>Contact</h1>
                <div className="contact-info-container">
                    <div className="contact-block">
                        <p>Email:</p>
                        <p>ANHDevTech@gmail.com</p>
                    </div>
                    <div className="contact-block">
                        <p>Phone:</p>
                        <p>562-760-4476</p>
                    </div>
                    <div className="contact-block">
                        <p>GitHub:</p>
                        <a href='https://github.com/AleyH30' target='_blank' rel="noreferrer"> View GitHub</a>
                    </div>
                    <div className="contact-block">
                        <p>LinkedIn:</p>
                        <a href='https://www.linkedin.com/in/aleyh30/' target='_blank' rel="noreferrer"> View Profile</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact