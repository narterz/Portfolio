import StudyTime from '../../Project screenshots/study time/st-reg.png.png';
import { SiTailwindcss, SiCss3, SiTypescript } from 'react-icons/si';
import { BiLogoReact } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';

export const StudyTimer = () => {
    const studyLanagues = [
        { name: "Typescript", icon: <SiTypescript className='text-[#3178C6]' size={40} /> },
        { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={40} /> },
        { name: "CSS", icon: <SiCss3 className='text-[#1572B6]' size={40} /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className='text-[#38B2AC]' size={40} /> },
    ]

    const websiteURL = "https://study-timers.com";
    const githubURL = "https://github.com/narterz/Study-Time.git";

    const keyFeatures = [
        "Comprehensive ToDo that tracks completion quantity and duration",
        "Timers displayed on window tab",
        "transitions to short and long break timers",
    ]
    return (
        <div className="project-container" id='study'>
            <div className="project-img-container">
                <div className='w-4/5 mb-5 project-title'>
                    <span className="h-full text-secondary text-title">&#123; </span>
                    <h1 className='h-full text-white ms-5'>Study Timer</h1>
                    <span className="h-full text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className="img-cont">
                    <img src={StudyTime} alt="StudyTimer default timer" className='img' />
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
                    <h1 className='text-white ms-5'>Study Time</h1>
                    <span className="text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className="project-text">
                    <small>Study time is a productivity app for individuals who need to focus on studying and document their progress.
                        Study Time uses the <a href="https://francescocirillo.com/products/the-pomodoro-technique" className='font-bold cursor-pointer text-secondary'>Pomodoro technique</a> and has a complex
                        todo tracks the users inputed tasks.
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
                    {studyLanagues.map((lang, i) => {
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