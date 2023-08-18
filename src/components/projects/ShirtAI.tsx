import Shirtai from '../../Project screenshots/shirtAi/sa-home.png.png';
import { SiTailwindcss, SiCss3, SiTypescript, SiExpress } from 'react-icons/si';
import { BiLogoReact, BiLogoNodejs } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';


const ShirtLanguages = [
    { name: "Typescript", icon: <SiTypescript className='text-[#3178C6]' size={40} /> },
    { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={40} /> },
    { name: "CSS", icon: <SiCss3 className='text-[#1572B6]' size={40} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className='text-[#38B2AC]' size={40} /> },
    { name: "NodeJS", icon: <BiLogoNodejs className='text-[#339933]' size={50} /> },
    { name: "ExpressJS", icon: <SiExpress className='text-black' size={50} /> },
]

const websiteURL = "https://tshirt-ai.com";
const githubURL = "https://github.com/narterz/Shirt-AI.git";

const keyFeatures = [
    "Editing of brand name using cropping, scaling, and rotation",
    "download options for brand name, brand logos, and shirt",
    "Generation of shirt with all user choices using AI"
]

export const Shirt = () => {
    return (
        <div className="project-container" id='shirt'>
            <div className="project-img-container">
                <div className='w-4/5 mb-5 project-title'>
                    <span className="h-full text-secondary text-title">&#123; </span>
                    <h1 className='h-full text-white ms-5'>ShirtAI</h1>
                    <span className="h-full text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className="img-cont">
                    <img src={Shirtai} alt="ShirtAI home page" className='img' />
                </div>
                <div className="project-links">
                    <a href={websiteURL} >
                        <button className='project-btns'>View Website</button>
                    </a>
                    <a href={githubURL}>
                        <button className='project-btns'>View on Github</button>
                    </a>
                </div>
            </div>
            <div className="project-desc">
                <div className="project-title">
                    <span className="text-secondary text-title">&#123; </span>
                    <h1 className='text-white ms-5'>ShirtAI</h1>
                    <span className="text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className="relative project-text">
                    <small className='flex flex-col font-normal justify-evenly text-medium'>
                        ShirtAI is my first fullstack project that allows users to create a T-shirt in four easy steps with AI.
                        Users pick a t-shirt color, customize their logo via upload or AI generation, customize their brand logo, and download their choices as a AI generated shirt.
                        <small className='text-secondary text-start'>fun fact: I was a able to use this app to create shirts for my family reunion!</small>
                    </small>
                </div>
                <div className='project-features'>
                    <h2 className='font-semibold text-white'>Key Features</h2>
                    {keyFeatures.map((feat) => {
                        return (
                            <div className='flex flex-row items-center' key={feat}>
                                <BsDot size={15} className='text-secondary w-[5%] h-full' />
                                <small className='text-white kf'>{feat}</small>
                            </div>
                        )
                    })}
                </div>
                <div className="project-langs-container">
                    {ShirtLanguages.map((lang, i) => {
                        return (
                            <div className='project-langs' key={lang.name}>
                                {lang.icon}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}