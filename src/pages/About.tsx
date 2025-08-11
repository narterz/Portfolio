import { useEffect, useRef } from 'react';
import glassesSelfie from '../images/portfolio-selfie.jpg';
import { AiFillPushpin } from 'react-icons/ai'
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { FaGraduationCap } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { motion, useAnimation, useInView } from 'framer-motion'
import 'animate.css';

export const About = () => {
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageInView = useInView(imageRef, { once: true });
    const textInView = useInView(textRef, { once: true });

    const controlX = useAnimation();
    const controlY = useAnimation();

    useEffect(() => {
        if (imageInView) {
            controlX.start("visible")
        }
    }, [imageInView, controlX])

    useEffect(() => {
        if (textInView) {
            controlY.start("visible")
        }
    }, [textInView, controlY])

    return (
        <div className="bg-white h-[100vh] xsm:max-md:h-[110vh] flex items-center justify-center relative" id="about">
            <div className="custom-shape-divider-top-1689726451">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className='flex items-center relative flex-col lg:flex-row  md:justify-around xsm:justify-evenly h-full w-[90%]'>
                <motion.div
                    className="about-img-container flex items-center justify-center"
                    ref={imageRef}
                    initial="hidden"
                    animate={controlX}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <img src={glassesSelfie} alt="me wearing glasses on vacation" className=" xsm:max-w-[70%] xsm:max-h-[70%] sm:max-w-[80%] sm:max-h-[90%] rounded-lg" id='selfie' />
                </motion.div>

                <motion.div
                    className='about-text-container flex flex-col items-start'
                    ref={textRef}
                    initial="hidden"
                    animate={controlY}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className='w-full xl:w-10/12 xl:text-center h-1/6 mt-3'>
                        <h2 className='font-bold text-center xxl:text-start'>Hey there! I'm <b className='text-primary'>Jayden</b></h2>
                    </div>
                    <div className='flex flex-col justify-evenly font-normal sm:max-md:w-full sm:max-md-p-8 xsm:h-1/2 sm:max-lg:h-4/5 xl:w-10/12 '>
                        <h3 className=''>My goal as a software developer is to develop web apps and make challenging or even ordinary tasks easier. I am willing to achieve that goal alongside any team, for any client.</h3>
                        <h3 className='xsm:max-lg:mb-3'>I have been tech-savvy since a young age. My dream is to work with development teams and make a significant impact in the tech industry. </h3>
                    </div>
                    <div className='flex flex-row items-center justify-between w-full h-1/6 xl:w-10/12'>
                        <div className='about-icon-container'>
                            <AiFillPushpin className='about-icons' />
                            <p className='about-details'><b>Location:</b> Norwalk, Connecticut</p>
                        </div>
                        <div className='about-icon-container'>
                            <FaGraduationCap className='about-icons' />
                            <p className='about-details'><b>Education:</b> University of Connecticut BA</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}