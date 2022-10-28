import React from 'react';

// ? React Icons
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import { SlEnvolopeLetter } from 'react-icons/sl'
import { MdAlternateEmail } from 'react-icons/md';

// ? SCSS
import '../Styling/Contact.scss';
import RoundIcon from './RoundIcon';
import { BsFillPhoneFill, BsPhone } from 'react-icons/bs';

const Contact = () => {

    return(
        <div className='contact-wrapper'>

            <div className='contact-container'>
                <div className='socials-section'>
                    <span className='title'>Socials</span>

                    <div className='socials-icons'>
                        <RoundIcon
                            dimension='50px'
                            hoverColor='#0C0E0F'
                            iconColor='#FFFFFF'
                        >
                            <SiGithub 
                                onClick={()=> window.open('https://github.com/prazhusleecooper/', "_blank")}
                            />
                        </RoundIcon>
                        
                        <RoundIcon
                            dimension='50px'
                            hoverColor='#f2f2f2'
                            iconColor='#0961b9'
                        >
                            <SiLinkedin 
                                onClick={()=> window.open('https://www.linkedin.com/in/prashanth-srinivasan-00b461130/', "_blank")}
                            />
                        </RoundIcon>
                    </div>

                    <span className='resume-title'>Resume & Cover Letter</span>

                    <div className='resume-cv-section'>
                        <button
                            className='resume-btn'
                            onClick={()=> window.open('https://drive.google.com/file/d/1a8cfPtZivbmmUT97tLnyLMWDa6brguqG/view?usp=sharing', "_blank")}
                        >
                            Resume <HiOutlineDocumentText size={25}/>
                        </button>
                        <button
                            className='cv-btn'
                            onClick={()=> window.open('https://drive.google.com/file/d/1MA4v8y2DTk0omN7sIl6Yd1TMBe7klUnv/view?usp=sharing', "_blank")}
                        >
                            Cover Letter <SlEnvolopeLetter size={25}/>
                        </button>
                    </div>

                </div>
                <div className='contact-section'>
                    <span className='title'>
                        Contact
                        <br />
                        <span className='sub-text'>
                            You can reach out to me on
                        </span>    
                    </span>

                    <div className='contact-icons'>
                        <span className='contact-method-text'>
                            E-Mail
                        </span>
                        <button
                            className='mail-btn'
                            onClick={()=> window.open('mailto:prashanth5454@gmail.com', "_blank")}
                        >
                            <MdAlternateEmail size={25}/>&nbsp; prashanth5454@gmail.com
                        </button>

                        <span className='contact-method-text'>
                            Phone
                        </span>
                        <button
                            className='phone-btn'
                            onClick={()=> window.open('tel:+919944411899', "_blank")}
                        >
                            <BsFillPhoneFill size={25}/>&nbsp; +91 9944411899
                        </button>
                        <button
                            className='phone-btn'
                            onClick={()=> window.open('tel:+917904191090', "_blank")}
                        >
                            <BsPhone size={25}/>&nbsp; +91 7904191090
                        </button>
                        
                    </div>
                </div>
            </div>

        </div>
    )

};

export default Contact;