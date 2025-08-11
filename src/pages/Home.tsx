
import { ParticleBackground } from "../components/ParticleBackground"
import  homeImg  from '../images/portfolioImg.png';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from "react-scroll";

export const Home = () => {
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

    const footerSocials = [
        { name: "Github", link: "https://github.com/narterz", icon: <AiOutlineGithub  className="social-icons home-social-icons" /> },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/jayden-shelton-136883182/", icon:  <AiOutlineLinkedin className="social-icons home-social-icons" /> }
    ]

    const footerButtons = [
        {jumpTo: "contact", text: "Contact me"},
        { jumpTo: "projects", text: "View Project"}
    ]

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
                        className="home-title-container flex flex-col justify-center hover:animate-pulse"
                        ref={titleRef}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: 0 }
                        }}>
                        <div className="home-title me-10" id="home-title-top">
                            <span className="bracket">&#123; </span>
                            <h2 className="ms-5">Jayden Shelton</h2>
                        </div>
                        <div className="home-title w-full" id="home-title-bottom">
                            <h2 className="me-5">Web Developer</h2>
                            <span className="bracket">&#125;</span>
                        </div>
                    </motion.div>
                    <div className="home-text-main flex flex-col text-start justify-evenly h-1/3">
                        <h3 className="font-normal">I design and optimize quality responsive web applications with rich user interfaces and interactivity. </h3>
                        <h3 className="font-normal">I specialize in fullstack development and can a adapt and excel at any tech stack thrown my way. </h3>
                    </div>
                    <div className="flex flex-row items-center justify-between xxl:w-3/4 xxl:h-1/5 xsm:max-md:h-1/4 xsm:max-xxl:w-full">
                        <div className="flex flex-row items-center justify-between h-full xxl:w-3/5 xsm:max-xxl:w-2/3">
                        {footerButtons.map((but) => (
                            <Link 
                                className="w-[46%] flex items-center h-1/3 md:h-full xxl:h-1/2 xxl:w-[45%]"
                                to={but.jumpTo}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                            >
                                <button className="w-full h-full xxl:h-5/6">{but.text}</button>
                            </Link>
                        ))}
                        </div>
                        <div className="home-social-container flex flex-row items-center justify-between">
                            {footerSocials.map((social) => (
                                <a href={social.link} key={social.name} id={`home-socials_${social.name}`}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}