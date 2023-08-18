import quickTrivia from '../../Project screenshots/quick trivia/qt-questions.png';
import { BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { SiSass } from 'react-icons/si';
import { BsDot } from 'react-icons/bs';

const quickTriviaLans = [
    { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={50} /> },
    { name: "Javascript", icon: <BiLogoJavascript className='text-[#F7DF1E]' size={50} /> },
    { name: "SCSS", icon: <SiSass className='text-[#CC6699]' size={50} /> },
]

const websiteURL = 'https://quick-trivia.com';
const githubURL = 'https://github.com/narterz/Quick-Trivia.git'

const keyFeatures = [
    "Progression bar",
    "Score counter and final grade",
    "Smooth transition UI"
]

export const QuickTrivia = () => {
    return (
        <div className="project-container" id='quick'>
            <div className="project-img-container">
                <div className='w-4/5 mb-5 project-title'>
                    <span className="h-full text-secondary text-title">&#123; </span>
                    <h1 className='h-full text-white ms-5'>Quick Trivia</h1>
                    <span className="h-full text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className='img-cont'>
                    <img src={quickTrivia} alt="Quick trivia home page" className='img' />
                </div>
                <div className='project-links'>
                    <a href={websiteURL} className='w-1/3 h-2/3'>
                        <button className='project-btns'>View Website</button>
                    </a>
                    <a href={githubURL} className='w-1/3 h-2/3'>
                        <button className='project-btns'>View on Github</button>
                    </a>
                </div>
            </div>
            <div className="project-desc">
                <div className='w-4/5 mb-5 project-title'>
                    <span className="h-full text-secondary text-title">&#123; </span>
                    <h1 className='h-full text-white ms-5 '>Quick Trivia</h1>
                    <span className="h-full text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className='project-text'>
                    <small className='font-normal text-white text-projectText'>Quick Trivia challenges the user to a 20 question trivia quiz
                        on a variety of quesitons related to film & TV, history, and science. The progress and score is displayed as the user answers questions.
                        At the end of the quiz the final score is displayed and game can eb restarted with all new questions.
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
                    {quickTriviaLans.map((lang) => {
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