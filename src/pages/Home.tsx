
import { ParticleBackground } from "../components/ParticleBackground"
import  homeImg  from '../images/portfolioImg.png';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from "react-scroll";

export const Home = () => {
    const githubLink = "https://github.com/narterz";
    const linkedInLink = "https://www.linkedin.com/in/jayden-shelton-136883182/";

    const titleRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const isTitleInView = useInView(titleRef, { once: true });
    const isImageInView = useInView(imgRef, { once: true });

    const controlX = useAnimation();
    const controlY = useAnimation();

    useEffect(() => {
        if(isTitleInView){
            controlX.start("visible")
        }
    }, [isTitleInView]);

    useEffect(() => {
        if(isImageInView) {
            controlY.start("visible")
        }
    })

    return (
        <div className="h-[92vh] w-full bg-primary relative overflow-hidden" id="home">
            <ParticleBackground />
            <div className="absolute top-0 left-0 z-10 flex items-center justify-between h-full xxl:w-full xsm:max-md:me-5 xsm:max-md:ms-5 xxl:flex-row xsm:max-md:justify-evenly xsm:max-md:flex-col">
                <motion.div 
                    className="md:w-2/5 animate-blob shadow-xl lg:ms-10 lg:h-[60%] xsm:w-[90%] xsm:max-lg:h-2/5 sm:max-md:w-[70%] flex items-top justify-center bg-secondary"
                    initial="hidden"
                    animate="visible"
                    id="img-container"
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}>
                    <img src={homeImg} alt="A professional headshot of me" className="border-transparent rounded-xl h-[75%]"/>
                </motion.div>
                <div className="w-[60%] xsm:max-md:w-full h-3/4 md:h-[80%] md:ms-10 md:me-5 xsm:max-md:h-3/5 flex items-start xxl:ms-24 flex-col justify-evenly text-white cursor-default">
                    <motion.div
                        className="flex flex-col xsm:max-md:h-1/4 xxl:w-[43%] md:w-full xsm:max-md:items-center xsm:max-md:w-full hover:animate-pulse"
                        ref={titleRef}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: 0 }
                        }}>
                        <div className="flex flex-row items-center xsm:max-md:me-10">
                            <span className="text-secondary text-xlg xsm:max-md:text-lg md:text-xxl">&#123; </span>
                            <h1 className="ms-5 xsm:max-lg:text-lg lg:text-xlg">Jayden Shelton</h1>
                        </div>
                        <div className="flex flex-row items-center w-full ms-20 xsm:max-md:justify-center xsm:max-md:mb-5">
                            <h1 className="me-5 xsm:max-lg:text-lg lg:text-xlg">Web Developer</h1>
                            <span className="flex flex-row text-secondary text-xlg md:text-xxl xsm:max-md:text-lg">&#125;</span>
                        </div>
                    </motion.div>
                    <div className="flex flex-col xxl:w-3/4 h-1/3 xsm:max-md:w-full xsm:max-md:h-2/4 justify-evenly xsm:max-md:text-center">
                        <p className="sm:max-md:text-sm xsm:text-xsm md:text-norm xl:text-md">I design and optimize quality responsive web applications with rich user interfaces and interactivity. </p>
                        <p className="sm:max-md:text-sm xsm:text-xsm md:text-norm xl:text-md">I specialize in fullstack development and can a adapt and excel at any tech stack thrown my way. </p>
                    </div>
                    <div className="flex flex-row items-center justify-between xxl:w-3/4 xxl:h-1/5 xsm:max-md:h-1/4 xsm:max-xxl:w-full">
                        <div className="flex flex-row items-center justify-between h-full xxl:w-3/5 xsm:max-xxl:w-2/3">
                            <Link
                                className="xsm:w-[45%] xxl:h-1/2  md:max-xxl:h-full xsm:h-1/3 sm:max-lg:w-2/5 lg:w-[40%]" 
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                            >
                                <button className="w-full h-full xsm:text-xxsm lg:text-xsm">Contact me</button>
                            </Link>
                            <Link
                                className="xsm:w-[45%] xl:h-full xxl:h-1/2 xsm:h-1/3 xsm:m-3 md:me-8 md:h-full sm:max-lg:w-2/5 lg:w-[40%]"                                 
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                            >
                                <button className="w-full h-full xsm:text-xxsm lg:text-xsm">View Projects</button>
                            </Link>
                        </div>
                        <div className="flex flex-row items-center justify-between lg:justify-evenly xxl:justify-between xxl:w-1/4 xsm:max-xxl:w-1/3">
                            <a href={githubLink}>
                                <AiOutlineGithub size={50} className="transition-colors ease-in delay-100 cursor-pointer hover:text-secondary" />
                            </a>
                            <a href={linkedInLink}>
                                <AiOutlineLinkedin size={50} className="transition-colors ease-in delay-100 cursor-pointer hover:text-secondary" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}