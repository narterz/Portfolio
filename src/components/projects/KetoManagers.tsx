import ketoMan from '../../Project screenshots/Keto managers/keto-managers-home.png.png';
import { SiBootstrap, SiSass } from 'react-icons/si';
import { BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';

const ketoManagersLanguages = [
    { name: "Javascript", icon: <BiLogoJavascript className='text-[#F7DF1E]' size={50} /> },
    { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={50} /> },
    { name: "SCSS", icon: <SiSass className='text-[#CC6699]' size={50} /> },
    { name: "Bootstrap", icon: <SiBootstrap className='text-[#7952B3]' size={50} /> },
]

const websiteURL = "https://ketomanagers.com";
const githubURL = "https://github.com/narterz/Keto-manager";

const keyFeatures = [
    "Keto meal search",
    "Detailed dietary and recipie infromation for each meal",
    "A map that directs users to various business locations"
]

export const KetoMan = () => {
    return (
        <div className="project-container" id='keto'>
            <div className="project-img-container">
                <div className='w-4/5 mb-5 project-title'>
                    <span className="h-full text-secondary text-title">&#123; </span>
                    <h1 className='h-full text-white ms-5'>Keto Manager</h1>
                    <span className="h-full text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className="img-cont">
                    <img src={ketoMan} alt="keto managers home page" className='w-full max-h-full' />
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
                    <h1 className='text-white ms-5'>Keto Managers</h1>
                    <span className="text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className="project-text">
                    <small className='font-normal text-white text-medium'>
                        Keto Managers an imformational and dietary management website that I wish to turn into a business in the near future.
                        User can sift through rules and benefits of the keto diet and discover dietary infromation and ingridients of varous keto meals.
                        <br />
                        <small className='text-secondary'>Warning: Spoonacular API website (which was used for this project) has been having issues</small>
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
                    {ketoManagersLanguages.map((lang, i) => {
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