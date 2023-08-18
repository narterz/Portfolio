import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3, SiSass, SiTailwindcss, SiBootstrap, SiExpress, SiTypescript } from 'react-icons/si';
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoPython } from 'react-icons/bi';
import { BsGit } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import 'animate.css/animate.min.css'
import { TechMarquee } from '../components/TechMarquee';

export const Tech = () => {

    const IsSmallScreen = useMediaQuery({ query: '(max-width: 1280px)' })

    const iconSize: number = IsSmallScreen ? 35 : 40

    const techStack = [
        { name: "HTML", icon: <AiFillHtml5 className='text-[#E34F26]' size={iconSize} /> },
        { name: "CSS", icon: <SiCss3 className='text-[#1572B6]' size={iconSize} /> },
        { name: "Javascript", icon: <BiLogoJavascript className='text-[#F7DF1E]' size={iconSize} /> },
        { name: "Typescript", icon: <SiTypescript className='text-[#3178C6]' size={iconSize} /> },
        { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={iconSize} /> },
        { name: "SCSS", icon: <SiSass className='text-[#CC6699]' size={iconSize} /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className='text-[#38B2AC]' size={iconSize} /> },
        { name: "Bootstrap", icon: <SiBootstrap className='text-[#7952B3]' size={iconSize} /> },
        { name: "NodeJS", icon: <BiLogoNodejs className='text-[#339933]' size={iconSize} /> },
        { name: "Python", icon: <BiLogoPython className='text-[#3776AB]' size={iconSize} /> },
        { name: "ExpressJS", icon: <SiExpress className='text-black' size={iconSize} /> },
        { name: "GIT", icon: <BsGit className='text-[#F05032]' size={iconSize} /> },
    ];


    return (
        <div className="h-[30vh] bg-white flex items-center justify-center" id="tech">
            <div className="w-[85%] h-full ">
                <div className='flex flex-col items-center justify-between h-full'>
                    <h2 className='font-bold text-center text-primary h-1/5 xsm:mt-10'>Tech Stack </h2>
                    {IsSmallScreen
                        ? <TechMarquee techStack={techStack} />
                        : <div className='relative flex flex-row items-center justify-center w-full whitespace-no-wrap xl:gap-4 xxl:gap-8 h-4/5'>
                            {techStack.map((tech, i) => {
                                return (
                                    <div className={`flex flex-col items-center bg-white border rounded-full ${i === 0 || i === 11 ? "shadow-none" : " shadow-xl"} xl:w-full h-1/2 justify-evenly animate__animated animate__infinite animate__pulse animate__slower`} key={tech.name}>
                                        {tech.icon}
                                        <small className='font-semibold xl:text-[0.7rem] xxl:text-[0.760rem]'>{tech.name}</small>
                                    </div>
                                );
                            })}
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}