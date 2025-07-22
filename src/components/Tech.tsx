import { AiFillHtml5 } from 'react-icons/ai';
import { FaFigma } from "react-icons/fa";
import { SiCss3, SiLinux, SiGnubash, SiApachedruid, SiKubernetes, SiSass, SiTailwindcss, SiShopify, SiBootstrap, SiFirebase, SiMicrosoftsqlserver, SiDocker, SiExpress, SiGraphql, SiNextdotjs, SiPostgresql, SiMongodb, SiTypescript, SiDjango } from 'react-icons/si';
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoPython } from 'react-icons/bi';
import { BsGit } from 'react-icons/bs';
import { GrMysql } from "react-icons/gr";
import { useMediaQuery } from 'react-responsive';

export const Tech = () => {

    const IsSmallScreen = useMediaQuery({ query: '(max-width: 1280px)' })

    const iconSize: number = IsSmallScreen ? 20 : 25;

    const tech = [
        { name: "HTML", icon: <AiFillHtml5 className='text-[#E34F26]' size={iconSize} /> },
        { name: "CSS", icon: <SiCss3 className='text-[#1572B6]' size={iconSize} /> },
        { name: "SCSS", icon: <SiSass className='text-[#CC6699]' size={iconSize} /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className='text-[#38B2AC]' size={iconSize} /> },
        { name: "Bootstrap", icon: <SiBootstrap className='text-[#7952B3]' size={iconSize} /> },
        { name: "Javascript", icon: <BiLogoJavascript className='text-[#F7DF1E]' size={iconSize} /> },
        { name: "Typescript", icon: <SiTypescript className='text-[#3178C6]' size={iconSize} /> },
        { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={iconSize} /> },
        { name: "NextJS", icon: <SiNextdotjs className='text-[#333333]' size={iconSize} /> },
        { name: "NodeJS", icon: <BiLogoNodejs className='text-[#339933]' size={iconSize} /> },
        { name: "ExpressJS", icon: <SiExpress className='text-black' size={iconSize} /> },
        { name: "Django", icon: <SiDjango className='text-[#F7DF1E]' size={iconSize} /> },
        { name: "MongoDB", icon: <SiMongodb className='text-[#589636]' size={iconSize} /> },
        { name: "GraphQL", icon: <SiGraphql className='text-[#E10098]' size={iconSize} /> },
        { name: "PostgresSQL", icon: <SiPostgresql className='text-[#E10098]' size={iconSize} /> },
        { name: "MySQL", icon: <GrMysql className='text-[#4479A1]' size={iconSize} /> },
        { name: "Apache Druid", icon: <SiApachedruid className='text-[#F37626]' size={iconSize} /> },
        { name: "MicrosoftSQL", icon: <SiMicrosoftsqlserver className='text-red-500' size={iconSize} /> },
        { name: "Python", icon: <BiLogoPython className='text-[#3776AB]' size={iconSize} /> },
        { name: "Bash", icon: <SiGnubash className='text-[#4EAA25]' size={iconSize} /> },
        { name: "GIT", icon: <BsGit className='text-[#F05032]' size={iconSize} /> },
        { name: "Linux", icon: <SiLinux className='text-[#FCC624]' size={iconSize} /> },
        { name: "Docker", icon: <SiDocker className='text-[#0db7ed]' size={iconSize} /> },
        { name: "Kubernetes", icon: <SiKubernetes className='text-[#326ce5]' size={iconSize} /> },
        { name: "Figma", icon: <FaFigma className='text-[#a259ff]' size={iconSize} /> },
        { name: "Shopify", icon: <SiShopify className='text-[#96bf48]' size={iconSize} /> },
        { name: "Firebase", icon: <SiFirebase className='text-[#F6820D]' size={iconSize} /> },
    ]

    return (
        <div className="flex flex-col items-center w-3/4 h-3/5 justify-evenly" id="tech">
            <div className='h-[10%] w-full flex justify-center items-start'>
                <h3>Skills</h3>
            </div>
            <div className='mt-4 h-[80%] w-full grid grid-cols-4 gap-5 ps-2 pe-2'>
                {tech.map((lang, i) => {
                    return (
                        <div className='flex flex-row items-center border-2 bg-primaryLight border-primary justify-evenly rounded-xl' key={i}>
                            <div className='icon'>
                                {lang.icon}
                            </div>
                            <div>
                                <small className='font-bold'>{lang.name}</small>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div >
    )
}