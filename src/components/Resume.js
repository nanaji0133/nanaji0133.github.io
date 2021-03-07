import { motion } from 'framer-motion';
import React from 'react';
import Bar from './Bar';
import { languages, tools } from './data/resume_data';



const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    };
    return (
        <motion.div
            className="container resume"
            variants={ resume_variants }
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h6 className="resume-card__title">
                            Master of Engineering in Electrical and Computer Engineering
                        </h6>
                        <p className="resume-card__name">
                            University of Waterloo, Waterloo, Ontario, Canada (Sep 2019 - Dec 2020 )
                        </p>
                        {/* <p className="resume-card__details">I am currently persuing B.tech in Computer Science Engineering from Academy of Technology</p> */ }
                    </div>
                    <div className="resume-card__body">
                        <h6 className="resume-card__title">
                            Bachelors of Technology in Electrical and Electronics
                        </h6>
                        <p className="resume-card__name">
                            Vellore Institute of Technology (VIT), Vellore, India.  (Jun 2015 - May 2019 )
                        </p>
                        {/* <p className="resume-card__details">I am currently persuing B.tech in Computer Science Engineering from Academy of Technology</p> */ }
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h6 className="resume-card__title">
                            Software Developer at Bugs & Errors Studio, Bangalore, India. (Feb 2019 - Present)
                        </h6>
                        {/* <p className="resume-card__name">
                            TCS (2020)
                        </p> */}
                        <p className="resume-card__details">SOMELINES ABT WORK</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h6 className="reume-language__heading">
                        Language and Framework
                    </h6>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={ language } />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h6 className="reume-language__heading">
                        Tools and Softwares
                    </h6>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={ tool } />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;