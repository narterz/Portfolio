import chromaBlendr from '../../Project screenshots/chroma blendr/cb-home.png';
import { SiTailwindcss, SiCss3, SiTypescript } from 'react-icons/si';
import { BiLogoReact } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';

const chromaLanguages = [
    { name: "Typescript", icon: <SiTypescript className='text-[#3178C6]' size={40} /> },
    { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={40} /> },
    { name: "CSS", icon: <SiCss3 className='text-[#1572B6]' size={40} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className='text-[#38B2AC]' size={40} /> },
]

const websiteURL = "https://chromablendr.com/";
const githubURL = "https://github.com/narterz/Chroma-Blendr";

const keyFeatures = [
    "Sign up and sign in forms",
    "Five color tile palette generator",
    "Color palette extractor from image",
]

export const ChromaBlend = () => {
    return (
        <div className="project-container" id='chroma'>
            <div className="project-img-container">
                <div className='w-4/5 mb-5 project-title'>
                    <span className="h-full text-secondary text-title">&#123; </span>
                    <h1 className='h-full text-white ms-5'>Chroma Blendr</h1>
                    <span className="h-full text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className='img-cont'>
                    <img src={chromaBlendr} alt="chroma blendr home page" className='img' />
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
                    <h1 className='h-full text-white ms-5'>Chroma Blendr</h1>
                    <span className="h-full text-secondary text-title ms-5">&#125; </span>
                </div>
                <div className='project-text'>
                    <small>
                        Chroma Blendr is a UI tool that assists desisners and developers with crafting a color scheme for their project.
                        The Palette Generator uses concepts from color theory to generate a five tile color palette.
                        The Photo Seeker uses the K-Means and Median Cut algorithms to extract a five title color palette from any image.
                    </small>
                    <small className='text-secondary'>Warning: Deployment of this project is still a work in progress. Please visit github repo and clone locally to view</small>
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
                    {chromaLanguages.map((lang, i) => {
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