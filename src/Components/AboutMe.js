import React from 'react';

// ? Packages
import Typewriter from "typewriter-effect";

// ? React Icons
import { BsChevronDoubleDown } from 'react-icons/bs';

// ? SCSS
import '../Styling/AboutMe.scss';

const AboutMe = () => {

    // var typewriter = new Typewriter('#typewriter', {
    //     strings: [
    //         'Full Stack Developer',
    //         'Frontend Developer',
    //         'Mobile Developer',
    //         'Backend Developer',
    //         'Tech Enthusiast',
    //         'Gamer', 
    //         'Gym Bro'
    //     ],
    //     autoStart: true,
    //     loop: true,
    //     delay: 100,
    // });

    

    return(
        <div className='about-me-wrapper'>
            
            <div className='intro-wrapper'>

                <span className='name-text'>
                    Prashanth {' '}
                    <span className='last-name'>
                        Srinivasan
                    </span>
                </span>

                <p className='changing-text-section'>
                    <span className='i-am-text'>I am a</span>
                    <span id='typewriter'>
                        <Typewriter
                            options={{
                                strings: [
                                    'Full Stack Developer ',
                                    'Frontend Developer',
                                    'Mobile Developer',
                                    'Backend Developer',
                                    'Tech Enthusiast',
                                    'Gamer', 
                                    'Book worm'
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                            }}

                            onInit={(typewriter)=> {
                                typewriter
                                    .start()
                            }}
                        />
                    </span>
                </p>

                <div className='grey-ruler' />

                <div className='intro-paragraph'>
                    <span className='intro-text'>
                        I am an enthusiastic and solution-driven Full Stack Engineer looking to
                        work on genuinely dynamic and impactful products, which will prove
                        helpful to society. I am eager to bring my problem-solving and critical
                        thinking skills to the table, thus contributing towards the
                        success of the Organization.
                    </span>
                </div>

            </div>

            <div className='scroll-icon-section'>
                <BsChevronDoubleDown className='scroll-icon' />
            </div>
        </div>
    )

};

export default AboutMe;