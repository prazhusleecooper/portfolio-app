import React from "react";

// ? React Icons
import { BsChevronDoubleDown } from 'react-icons/bs';
import {
    SiMongodb, 
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiAngularjs,
    SiJavascript,
    SiRedux,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiSpring,
    SiJava,
    SiMysql,
    SiPostgresql,
    SiRedis,
    SiGithub,
    SiAmazonaws
} from 'react-icons/si';
import { MdSailing } from 'react-icons/md';

// ? SCSS
import '../Styling/SkillSet.scss';
import RoundIcon from "./RoundIcon";

const otherSkills = [
    {
        name: 'JavaScript',
        icon: <SiJavascript />,
        hoverColor: '#EBD51C',
        iconColor: '#000000',
    },
    {
        name: 'React',
        icon: <SiReact />,
        hoverColor: '#60DBFB',
        iconColor: '#FFFFFF',
    },
    {
        name: 'Redux',
        icon: <SiRedux />,
        hoverColor: '#7046B2',
        iconColor: '#FFFFFF',
    },
    {
        name: 'HTML',
        icon: <SiHtml5 />,
        hoverColor: '#D84924',
        iconColor: '#FFFFFF',
    },
    {
        name: 'CSS',
        icon: <SiCss3 />,
        hoverColor: '#2549D9',
        iconColor: '#FFFFFF',
    },
    {
        name: 'BootStrap',
        icon: <SiBootstrap />,
        hoverColor: '#6E10EA',
        iconColor: '#FFFFFF',
    },
    {
        name: 'Angular.js',
        icon: <SiAngularjs />,
        hoverColor: '#B8002C',
        iconColor: '#FFFFFF',
    },
    {
        name: 'SailsJS',
        icon: <MdSailing />,
        hoverColor: '#061B1E',
        iconColor: '#14879A',
    },
    {
        name: 'Express.js',
        icon: <SiExpress />,
        hoverColor: '#F2C06A',
        iconColor: '#414141',
    },
    {
        name: 'Node.js',
        icon: <SiNodedotjs />,
        hoverColor: '#99F374',
        iconColor: '#4F9640',
    },
    {
        name: 'Spring Boot',
        icon: <SiSpring />,
        hoverColor: '#F2F2F2',
        iconColor: '#67AA3B',
    },
    {
        name: 'Java',
        icon: <SiJava />,
        hoverColor: '#D76902',
        iconColor: '#537D98',
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
        hoverColor: '#792B14',
        iconColor: '#19C31A',
    },
    {
        name: 'MySQL',
        icon: <SiMysql />,
        hoverColor: '#D88801',
        iconColor: '#015C83',
    },
    {
        name: 'PostgreSQL',
        icon: <SiPostgresql />,
        hoverColor: '#305C8B',
        iconColor: '#FFFFFF',
    },
    {
        name: 'Redis',
        icon: <SiRedis />,
        hoverColor: '#D3352D',
        iconColor: '#FFFFFF',
    },
    {
        name: 'Git',
        icon: <SiGithub />,
        hoverColor: '#0C0E0F',
        iconColor: '#FFFFFF',
    },
    {
        name: 'AWS',
        icon: <SiAmazonaws />,
        hoverColor: '#242C37',
        iconColor: '#F19101',
    },
];

const workExperiences = [
    {
        name: 'Encryptus.io',
        description: 'Encryptus.io is a cross-platform cryptocurrency market-place where individual users or companie can buy and sell cryptocurries.Built End-to-End with customer side and admin panel with Sub-Admin support and KYC-Automation.',
        url: 'https://encryptus.io/',
        bgColor: '#001b4e',
        titleColor: '#CAAF4D',
        textColor: '#FFFFFF',
        buttonBg: '#CAAF4D',
        buttonTextColor: '#001b4e',
        boxShadow: '#CAAF4D',
    },
    {
        name: 'Spares4India',
        description: 'Spares4India is an E-Commerce application for Industrial Spare parts and Machineries. Built End-to-End with Customer side, Admin Panel and support for Multiple Sub-Admins.',
        url: 'https://www.spares4india.com/',
        bgColor: '#282423',
        titleColor: '#D6210E',
        textColor: '#FFFFFF',
        buttonBg: '#D6210E',
        buttonTextColor: '#FFFFFF',
        boxShadow: '#D6210E',
    },
    {
        name: 'Habitate.io',
        description: `Habitate.io is a Community Forum isolated for different Companies by domain and seperated in any amount of divisions according to the User's requirements.`,
        url: 'https://habitate.io/',
        bgColor: '#FFFFFF',
        titleColor: '#d63004',
        textColor: '#1b1a1e',
        buttonBg: '#f98210',
        buttonTextColor: '#FFFFFF',
        boxShadow: '#f98210',
    },
]

const SkillSet = () => {

    const renderOtherSkills = () => {

        return otherSkills.map(({ name, icon, hoverColor, iconColor }) => {

            return (
                <RoundIcon
                    hoverColor={hoverColor}
                    iconColor={iconColor}
                    dimension='100px'
                >
                    {icon}
                </RoundIcon>
            )

        });

    };

    const renderProjects = () => {

        return workExperiences.map(({ 
            name, 
            description, 
            url,
            bgColor,
            titleColor,
            textColor,
            buttonBg,
            buttonTextColor,
            boxShadow     
        }) => {

            return (
                <div 
                    className='experience-block'
                    style={{
                        backgroundColor: bgColor,
                        // boxShadow: `0px 0px 15px 0px ${boxShadow}`
                        border: `2px solid ${boxShadow}`
                    }}    
                >
                    <span 
                        style={{
                            color: titleColor
                        }}
                        className='project-name'
                    >
                        {name}
                    </span>

                    <span
                        style={{
                            color: textColor
                        }}
                        className='project-description'
                    >
                        {description}
                    </span>

                    <button
                        onClick={()=> window.open(url, "_blank")}
                        style={{
                            backgroundColor: buttonBg,
                            color: buttonTextColor
                        }}
                        className='visit-btn'
                    >
                        Visit
                    </button>
                </div>
            )

        });
    }

    return (
        <>

            <div className='skill-set-wrapper'>
                <div className='skill-set-container'>
                    <span className='title-text'>
                        SKILL SET
                    </span>

                    <div className='purple-ruler' />

                    <div className='primary-focus'>
                        <p>
                            I primarily work with the {' '}<span className='mern-text'>MERN STACK</span>
                            <br />
                            <span className='mern-text'>
                                MongoDB, Express.js, React.js, Node.js
                            </span>
                        </p>

                        &nbsp;&nbsp;

                        <RoundIcon
                            hoverColor='#792B14'
                            iconColor='#19C31A'
                            dimension='85px'
                        >
                            <SiMongodb />
                        </RoundIcon>

                        <RoundIcon
                            hoverColor='#F2C06A'
                            iconColor='#414141'
                            dimension='85px'
                        >
                            <SiExpress />
                        </RoundIcon>

                        <RoundIcon
                            hoverColor='#60DBFB'
                            iconColor='#FFFFFF'
                            dimension='85px'
                        >
                            <SiReact />
                        </RoundIcon>

                        <RoundIcon
                            hoverColor='#99F374'
                            iconColor='#4F9640'
                            dimension='85px'
                        >
                            <SiNodedotjs />
                        </RoundIcon>
                    </div>

                    <div className='purple-ruler' />

                    <div className='other-skills'>
                        <span className='other-skills-title'>
                            All Skills
                        </span>

                        <div className='other-skills-section'>
                            {
                                renderOtherSkills()
                            }
                        </div>
                    </div>
                </div>

                
            </div>

            <div className='work-experience-wrapper'>
                <div className='work-experience-container'>
                    <span className='title-text'>
                        Work <span className='experience-text'>Experience</span>

                        <br />

                        <span className='sub-text'>
                            These are some of my {' '} <span className='experience-text'>Noteworthy Projects</span>
                        </span>
                    </span>

                    <div className='purple-ruler' />

                    <div className='experience-section'>
                        {
                            renderProjects()
                        }
                    </div>
                </div>
            </div>

            <div className='scroll-icon-section'>
                <BsChevronDoubleDown className='scroll-icon' />
            </div>
        </>
    );

};

export default SkillSet;