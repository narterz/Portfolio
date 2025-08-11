import { ProjectDescription } from "../types"
import ketoManagerImg from "../Project screenshots/Keto managers/keto-managers-home.png.png";
import  chromaBlendrImg  from '../Project screenshots/chroma blendr/cb-home.png';
import cityLoginImg from '../Project screenshots/city login/login-home.png.png';
import quickTriviaImg from '../Project screenshots/quick trivia/qt-home.png';
import studyTimerImg from '../Project screenshots/quick trivia/qt-home.png';
import shirtAIImg from '../Project screenshots/shirtAi/sa-home.png.png';
import { SiBootstrap, SiExpress, SiSass, SiCss3, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs } from 'react-icons/bi';

export const ProjectDescriptions:ProjectDescription[] = [

     {
        projectName: "Chroma Blendr",
        projectScreenshot: chromaBlendrImg,
        projectLanguages: [
            { name: "Typescript", icon: <SiTypescript className='text-[#3178C6]' size={40} /> },
            { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={40} /> },
            { name: "CSS", icon: <SiCss3 className='text-[#1572B6]' size={40} /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className='text-[#38B2AC]' size={40} /> },
        ],
        projectLinks: {
            githubLink: "https://github.com/narterz/Chroma-Blendr",
            websiteLink: "https://chromablendr.com/"
        },
        projectDetails: {
            summary: "Chroma Blendr is a UI tool that assists designers and developers with crafting a color scheme for their project. The Palette Generator uses concepts from color theory to generate a five tile color palette. The Photo Seeker uses the K-Means and Median Cut algorithms to extract a five title color palette from any image.",
            features: [
                "Sign up and sign in forms",
                "Five color tile palette generator",
                "Color palette extractor from image",
            ]
        }
    },

    {
        projectName: "City Login",
        projectScreenshot: cityLoginImg,
        projectLanguages: [
            { name: "Javascript", icon: <BiLogoJavascript className='text-[#F7DF1E]' size={50} /> },
            { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={50} /> },
            { name: "SCSS", icon: <SiSass className='text-[#CC6699]' size={50} /> },
        ],
        projectLinks: {
            githubLink: "https://thecitylogin.com",
            websiteLink: "https://github.com/narterz/City-login.git"
        },
        projectDetails: {
            summary: "City Login is a login screen that checks for login validation such as character length, capital letter, special characters, and numbers.",
            features: [
                "Credential validation indicators",
                "Login success screen"
            ],
            warnings: ""
        }
    },

    {
        projectName: "Study Timer",
        projectScreenshot: studyTimerImg,
        projectLanguages: [
            { name: "Typescript", icon: <SiTypescript className='text-[#3178C6]' size={40} /> },
            { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={40} /> },
            { name: "CSS", icon: <SiCss3 className='text-[#1572B6]' size={40} /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className='text-[#38B2AC]' size={40} /> },
        ],
        projectLinks: {
            githubLink: "https://study-timers.com",
            websiteLink: "https://github.com/narterz/Study-Time.git"
        },
        projectDetails: {
            summary: "Study time is a productivity app for individuals who need to focus on studying and document their progress. Study Time uses the Pomodoro technique and has a complex todo that tracks the users tasks",
            features: [
                "Comprehensive ToDo that tracks completion quantity and duration",
                "Timers displayed on window tab",
                "transitions to short and long break timers",
            ],
            warnings: ""
        }
    },
    {
        projectName: "",
        projectScreenshot: shirtAIImg,
        projectLanguages: [
            { name: "Typescript", icon: <SiTypescript className='text-[#3178C6]' size={40} /> },
            { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={40} /> },
            { name: "CSS", icon: <SiCss3 className='text-[#1572B6]' size={40} /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className='text-[#38B2AC]' size={40} /> },
            { name: "NodeJS", icon: <BiLogoNodejs className='text-[#339933]' size={50} /> },
            { name: "ExpressJS", icon: <SiExpress className='text-black' size={50} /> },
        ],
        projectLinks: {
            githubLink: "https://tshirt-ai.com",
            websiteLink: "https://github.com/narterz/Shirt-AI.git"
        },
        projectDetails: {
            summary: "ShirtAI is my first fullstack project that allows users to create a T-shirt in four easy steps with AI. Users pick a t-shirt color, customize their logo via upload or AI generation, customize their brand logo, and download their choices as a AI generated shirt.",
            features: [
                "Editing of brand name using cropping, scaling, and rotation",
                "download options for brand name, brand logos, and shirt",
                "Generation of shirt with all user choices using AI"
            ],
            warnings: "fun fact: I was a able to use this app to create shirts for my family reunion!"
        }
    },
    {
        projectName: "Keto Managers",
        projectScreenshot: ketoManagerImg,
        projectLanguages: [
            { name: "Javascript", icon: <BiLogoJavascript className='text-[#F7DF1E]' size={50} /> },
            { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={50} /> },
            { name: "SCSS", icon: <SiSass className='text-[#CC6699]' size={50} /> },
            { name: "Bootstrap", icon: <SiBootstrap className='text-[#7952B3]' size={50} /> },
        ],
        projectLinks: {
            githubLink: "https://github.com/narterz/Keto-manager",
            websiteLink: "https://ketomanagers.com"
        },
        projectDetails: {
            summary: "Keto Managers an informational and dietary management website that I wish to turn into a business in the near future. User can sift through rules and benefits of the keto diet and discover dietary information and ingredients of various keto meals.",
            features: [
                "Keto meal search",
                "Detailed dietary and recipe information for each meal",
                "A map that directs users to various business locations"
            ],
            warnings: "Warning: Spoonacular API website (which was used for this project) has been having issues"
        }
    },

    {
        projectName: "Quick Trivia",
        projectScreenshot: quickTriviaImg,
        projectLanguages: [
            { name: "React", icon: <BiLogoReact className='text-[#61dbfb]' size={50} /> },
            { name: "Javascript", icon: <BiLogoJavascript className='text-[#F7DF1E]' size={50} /> },
            { name: "SCSS", icon: <SiSass className='text-[#CC6699]' size={50} /> },
        ],
        projectLinks: {
            githubLink: "https://github.com/narterz/Quick-Trivia.git",
            websiteLink: "https://quick-trivia.com"
        },
        projectDetails: {
            summary: "Quick Trivia challenges the user to a 20 question trivia quiz on a variety of questions related to film & TV, history, and science. The progress and score is displayed as the user answers questions. At the end of the quiz the final score is displayed and game can eb restarted with all new questions.",
            features: [
                "Progression bar",
                "Score counter and final grade",
                "Smooth transition UI"
            ],
            warnings: ""
        }
    }

]