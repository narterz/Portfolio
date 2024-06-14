import laughLogin from '../../Project screenshots/laugh login/LL-start.png';
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiExpress, SiTypescript } from "react-icons/si";
import { BiLogoReact } from 'react-icons/bi';
import { FaNodeJs } from "react-icons/fa";
import { BsDot } from 'react-icons/bs';

const languages = [
    { name: "Typescript", icon: <SiTypescript className='text-[#3178C6]' size={20} /> },
    { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={20} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className='text-[#38B2AC]' size={20} /> },
    { name: "MongoDB", icon: <SiMongodb className='text-[#589636]' size={20} /> },
    { name: "NodeJS", icon: <FaNodeJs className='text-[#333333]' size={20} /> },
    { name: "ExpressJS", icon: <SiExpress className='text-[#333333]' size={20} /> },
    { name: "NextJS", icon: <SiNextdotjs className='text-[#333333]' size={20} /> },
]

const websiteURL = "https://laugh-login-client.vercel.app/home";
const githubURL = "https://github.com/narterz/City-Login-2";

const keyFeatures = [
    "Local and Oauth2.0 authentication",
    "Comprehensive form validation",
    "Joke generator"
]

export const LaughLogin:any = () => {
    <div className="project-container" id='chroma'>
        <div className="project-img-container">
            <div className='w-4/5 mb-5 project-title'>
                <span className="h-full text-secondary text-title">&#123; </span>
                <h1 className='h-full text-white ms-5'>Laugh Login</h1>
                <span className="h-full text-secondary text-title ms-5">&#125; </span>
            </div>
            <div className='img-cont'>
                <img src={laughLogin} alt="chroma blendr home page" className='img' />
            </div>
            <div className='project-links'>
                <a href={websiteURL}>
                    <button className='project-btns'>View Website</button>
                </a>
                <a href={githubURL}>
                    <button className='project-btns'>View on Github</button>
                </a>
            </div>
        </div>
        <div className="project-desc">
            <div className='w-4/5 mb-5 project-title'>
                <span className="h-full text-secondary text-title">&#123; </span>
                <h1 className='h-full text-white ms-5'>Laugh Login</h1>
                <span className="h-full text-secondary text-title ms-5">&#125; </span>
            </div>
            <div className='project-text'>
                <small>
                    This project is an upgrade of one of my first projects city-login.
                    Unlike city-login, Laugh Login utilizes the MERN stack to authenticate users
                    locally or vai Oauth2.0 from social media platforms Facebook, Github, Google, or Discord.
                    Upon singing in, the user is redirected to the joke page where they can view their account details and generate jokes.
                    The authentication flow follows industry standards by securely handling data through encryption and database storage. 
                    When a user logs out their data will remain the database for 48 hours.
                </small>
            </div>
            <div className='project-features'>
                <h2 className='font-semibold text-white'>Key Features</h2>
                {keyFeatures.map((feat) => {
                    return (
                        <div className='flex flex-row items-center' key={feat}>
                            <BsDot size={15} className='text-secondary w-[5%] h-full' />
                            <small className='text-white'>{feat}</small>
                        </div>
                    )
                })}
            </div>
            <div className='project-langs-container'>
                {languages.map((lang, i) => {
                    return (
                        <div className='project-langs' key={lang.name}>
                            {lang.icon}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>

}
