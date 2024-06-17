import { ChromaBlend } from '../components/projects/ChromaBlend';
import { KetoMan } from '../components/projects/KetoManagers';
import { Shirt } from '../components/projects/ShirtAI';
import { StudyTimer } from '../components/projects/StudyTimer';
import { CityLogin } from '../components/projects/CityLogin';
import { useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion'
import { QuickTrivia } from '../components/projects/QuickTrivia';
import { LaughLogin } from '../components/projects/LaughLogin';


export const Projects = () => {
    const ref = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const ProjectinView = useInView(ref, { once: true });
    const controlY = useAnimation();

    const repoLink = "https://github.com/narterz?tab=repositories"

    useEffect(() => {
        if (ProjectinView) {
            controlY.start("visible")
        }
    }, [ProjectinView, controlY])

    return (
        <div className="h-[750vh] bg-primary relative flex justify-center" id="projects" ref={scrollRef}>
            <div className="shape-divider-projects xsm:hidden md:block">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="projects-shape-fill"></path>
                </svg>
            </div>
            <motion.div
                className="xxl:w-[80%] lg:w-[90%] xsm:max-lg:w-[90%] h-[95%] flex flex-col justify-between absolute bottom-0"
                initial="hidden"
                ref={ref}
                animate={controlY}
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div className="flex flex-col justify-evenly xsm:max-md:text-center md:w-3/4 lg:w-[60%] xsm:w-full xxl:h-[30vh] xsm:max-xl:h-[40vh]">
                    <h1 className="font-bold text-white xsm:text-lg sm:text-xlg md:text-start">My <b className="text-secondary">Projects</b></h1>
                    <small className="font-light text-white xsm:text-xsm sm:text-sm md:text-md lg:text-sm xxl:w-4/5">Below are some featured projects that will knock your socks off! Each projects aims to solve any problem that a developer or ordinary person might run into.</small>
                    <a href={repoLink} className='w-full h-1/6'>
                        <button className="h-full border-transparent rounded-lg xsm:w-4/5 sm:w-7/12 md:w-5/12 xxl:w-4/12 bg-secondary text-primary">View all projects on Github</button>
                    </a>
                </div>
                <ChromaBlend />
                <LaughLogin />
                <KetoMan />
                <Shirt />
                <StudyTimer />
                <QuickTrivia />
            </motion.div>
        </div>
    )
}