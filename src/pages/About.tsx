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
            <div className='flex md:flex-row xsm:max-md:flex-col md:justify-around xsm:justify-evenly  items-center relative h-full w-[90%]'>
                <motion.div
                    className="flex items-center justify-center w-2/5 h-full md:w-5/12 md:h-3/5 xsm:w-full xsm:mt-10 sm:mt-20 xsm:max-md:h-2/6 lg:h-5/12"
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
                    className='flex flex-col items-start w-3/5 md:w-7/12 justify-evenly h-3/5 xsm:max-md:h-4/6 md:h-7/12 xsm:max-md:w-full'
                    ref={textRef}
                    initial="hidden"
                    animate={controlY}
                    transition={{duration: 0.5, delay: 0.25}}
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h1 className='w-full font-bold xsm:max-md:text-center xsm:text-md sm:text-lg lg:text-xlg'>Hey there! I'm <b className='text-primary'>Jayden</b></h1>
                    <div className='flex flex-col font-normal justify-evenly xsm:h-1/2 sm:max-lg:h-4/5 xl:w-10/12 '>
                        <p>My goal as a software developer is to code web apps that make challenging or even ordinary tasks easier. I am willing to achieve that goal alongisde any team, for any client.</p>
                        <p className='xsm:max-lg:mb-3'>My go to tech stack is <b className='text-[#61dbfb]'>React</b>, <b className='text-[#007acc]'>Typescript</b>, and <b className='text-[#06B6D4]'>TailwindCSS</b> but im more than willing to master any frontend or fullstack tech stack.</p>
                    </div>
                    <div className='flex flex-row items-center justify-between sm:w-5/6 sm:ms-auto sm:me-auto md:max-xl:w-full xl:w-4/5 xxl:w-full sm:h-1/5'>
                        <div className='flex flex-col justify-between w-1/2 h-full'>
                            <div className='about-icon-container'>
                                <AiFillPushpin className='about-icons' />
                                <small className='about-details'>Location: Norwalk, Connecticut</small>
                            </div>
                            <div className='about-icon-container'>
                                <FaGraduationCap className='about-icons' />
                                <small className='about-details'>Education: University of Connecticut BA</small>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between w-1/2 h-full'>
                            <div className='about-icon-container sm:ms-10'>
                                <LiaBirthdayCakeSolid className='about-icons' />
                                <small className='about-details'>Age: 23</small>
                            </div>
                            <div className='about-icon-container sm:ms-10'>
                                <MdComputer className='about-icons' />
                                <small className='about-details'>Experience: 1+ years</small>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}