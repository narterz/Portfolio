import Login from '../../Project screenshots/city login/login-home.png.png';
import { SiSass } from 'react-icons/si';
import { BsDot } from 'react-icons/bs';
import { BiLogoJavascript, BiLogoReact } from 'react-icons/bi';

const LoginLanguages = [
    { name: "Javascript", icon: <BiLogoJavascript className='text-[#F7DF1E]' size={50} /> },
    { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={50} /> },
    { name: "SCSS", icon: <SiSass className='text-[#CC6699]' size={50} /> },
]

const websiteURL = "https://thecitylogin.com";
const githubURL = "https://github.com/narterz/City-login.git";

const keyFeatures = [
    "Credential validation indicators",
    "Login success screen"
]

export const CityLogin = () => {
    return (
        <div className="project-container" id='city'>
            <div className="project-img-container">
                <div className='w-4/5 mb-5 project-title'>
                    <span className="h-full text-secondary text-title">&#123; </span>
                    <h1 className='h-full text-white ms-5'>City Login</h1>
                    <span className="h-full text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className="img-cont">
                    <img src={Login} alt="City login screen" className='img' />
                </div>
                <div className="project-links">
                    <a href={websiteURL} className='w-1/3 h-2/3'>
                        <button className='project-btns'>View Website</button>
                    </a>
                    <a href={githubURL} className='w-1/3 h-2/3'>
                        <button className='project-btns'>View on Github</button>
                    </a>
                </div>
            </div>
            <div className="project-desc">
                <div className="project-title">
                    <span className="text-secondary text-title">&#123; </span>
                    <h1 className='text-white ms-5'>City Login</h1>
                    <span className="text-secondary text-title ms-5">&#125; </span>

                </div>
                <div className="project-text">
                    <small>
                        City Login is a login screen that checks for login validation such as character legnth, capital letter, special characters, and numbers.
                    </small>
                </div>
                <div>
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
                <div className="project-langs-container">
                    {LoginLanguages.map((lang) => {
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