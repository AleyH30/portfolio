import React, {useEffect} from 'react';
import resume from "../../Components/Alexis_Hall_Resume2024.pdf"
import './Contact.css';

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
                        <a className="contact-resume-downloader" href={resume} download="Alexis_Hall_Resume2024">
                            Download My Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact