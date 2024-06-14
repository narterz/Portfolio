import BluejesticLogo from '../images/Bluejestic Logo.webp';
import { SiSass, SiTailwindcss, SiGraphql, SiExpress, SiTypescript, SiDocker, SiPostgresql } from 'react-icons/si';
import { BiLogoReact, BiLogoNodejs, } from 'react-icons/bi';
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit } from 'react-icons/bs';

const jobs = [
    {
        name: "Bluejestic",
        logo: BluejesticLogo,
        description: "Social commerce marketplace that uses eCommerce to host clothing stores and sell products to users.",
        duties: [
            "Developed UI components alongside design teams",
            "Queried, inserted, and maintained data using PostgreSQL",
            "Queried and mutated data through GraphQL",
            "Communicated with dev teams from other companies to implement SDK's, APIs, and UI libraries"
        ],
        position: "Fullstack Developer",
        duration: "June 2023 - Present",
        address: "8700 Maitland Summit Blvd",
        state: "Orlando, Fl. 32810",
        phone: "(888) 917-1078",
        techMain: [
            { name: "TypeScript", logo: SiTypescript },
            { name: "React", logo: BiLogoReact },
            { name: "Next.js", logo: TbBrandNextjs },
            { name: "SCSS", logo: SiSass },
            { name: "Tailwind", logo: SiTailwindcss },
            { name: "GraphQL", logo: SiGraphql },
            { name: "NodeJS", logo: BiLogoNodejs },
            { name: "ExpressJS", logo: SiExpress },
            { name: "PostgreSQL", logo: SiPostgresql },
            { name: "Docker", logo: SiDocker },
            { name: "Git", logo: BsGit },
        ],
        otherTech: [
            { name: "Redux" },
            { name: "Axios" },
            { name: "Framer Motion" },
            { name: "Webpack" },
            { name: "Shopify" },
        ]
    }
]

export const Experience = () => {
    return (
        <div className="h-[70vh] w-full flex flex-col justify-between items-center" id="experience">
            <div className='flex flex-col items-start w-[90%] justify-evenly h-1/4'>
                <h1 className='text-primary'>Experience</h1>
                <p className='font-light'>Explore my journey through various professional positions within the industry, showcasing my expertise and contributions.</p>
            </div>
            {jobs.map((job, i) => {
                return (
                    <div className='flex flex-row justify-between w-[90%] h-2/3' key={`job${i}`}>
                        <div className='flex flex-col justify-between w-1/3 mb-4 '>
                            <h2 className='text-primary'>{job.name}</h2>
                            <p className='w-4/5'>{job.description}</p>
                            <div className='flex flex-col items-start justify-evenly'>
                                <div className='flex flex-col items-start justify-evenly'>
                                    <p>{job.address}</p>
                                    <p>{job.state}</p>
                                    <p>{job.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-between w-1/3 h-full mb-4'>
                            <div className='h-1/5'>
                                <h2 className='text-primary'>{job.position}</h2>
                                <p className=' experience-text'>{job.duration}</p>
                            </div>
                            <ul className='flex flex-col justify-evenly h-4/5'>
                                {job.duties.map((duty, i) => {
                                    return (
                                        <li key={i}>
                                            <p>{duty}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='flex flex-col justify-between w-1/4'>
                            <h2 className='text-primary h-1/4'>Tech Stack</h2>
                            <div className='flex flex-row mb-4 h-3/4'>
                                <ul className='w-1/2'>
                                    {job.techMain.map((tech, i) => {
                                        return (
                                            <li key={i} className='list-disc list-inside'>
                                                {tech.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul className='w-1/2'>
                                    {job.otherTech.map((tech, i) => {
                                        return (
                                            <li key={i} className='list-disc list-inside '>
                                                {tech.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}