import { motion } from 'framer-motion';
import React from 'react';
import github from '../assets/icons-awe/github.svg';
import linkedin from '../assets/icons-awe/linkedin.svg';
import pin from '../assets/icons-awe/pin.svg';
import tie from '../assets/icons-awe/tie.svg';
import mightycoder from '../assets/mightycoder.svg';
import resume from '../assets/resume.pdf';


const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("nsanka@uwaterloo.ca");
    };
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    };


    return (
        <motion.div className="sidebar"
            variants={ sidebar_variant }
            initial='hidden'
            animate="visible"

        >
            <img src={ mightycoder } alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Nanaji <span>Sanka</span> </div>
            <div className="sidebar__item sidebar__title">Full Stack Developer</div>
            <a href={ resume } download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={ tie } alt="resume" className="sidebar__icon" />Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="!#"><img src={ github } alt="github" className="sidebar__icon mr-3" /></a>
                <a href="!#"><img src={ linkedin } alt="linkedin" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    {/* <a href="!#"><img src={ github } alt="github" className="sidebar__icon mr-3" />github</a> */ }
                </div>
                <div className="sidebar__location">
                    <img src={ pin } alt="location" className="sidebar__icon mr-1" />
                    Waterloo, ON, Canada</div>
                <div className="sidebar__item">nsanka@uwaterloo.ca</div>
                <div className="sidebar__item">+1-(548)-333-1346</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={ handleEmailMe }>Email Me</div>
        </motion.div>
    );
};

export default Sidebar;