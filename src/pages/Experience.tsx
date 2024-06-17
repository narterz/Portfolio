import { Tech } from "../components/Tech"

const jobs = [
    {
        name: "Bluejestic",
        link: "https://bluejestic.com/",
        position: "Fullstack Developer Intern",
        duration: "June 2023 - June 2024",
        address: "8700 Maitland Summit Blvd, Orlando, Fl. 32810",
        description: "Assisted in the frontend and backend development of various essential features. Mentored by senior devs and CEO along the way.",
        duties: [
            "Worked with design team to implement UI designed from figma",
            "Assisted in the backend development of various essential social commerce features",
            "Communicated with dev teams of other companies to implement SDK's, APIs, and UI libraries",
            "Assisted in the integration of shopify backend"
        ],
        skills: "NextJS, GraphQL, PostgresSQL, Shopify, Docker, GIT, Redux, Webpack, Firebase"
    },
    {
        name: "Silver Hill Hospital",
        link: "https://silverhillhospital.org/",
        description: "Migrated physical patient records to SQL server to be accessed on patient portal",
        duration: "March 2024 - Present",
        address: "208 Valley Rd, New Canaan, CT 06840",
        position: "Data analyst",
        duties: [
            "Generated reports of large data sets",
            "Reported findings and recommendations based on data analysis",
            "Performed data clean ups and transformation old patient data",
        ],
        skills: "MicroSoftSQL, HIPPA compliance, data analysis"
    }
]

export const Experience = () => {
    return (
        <div className="h-[100vh] me-auto ms-auto w-[90%] flex flex-col justify-between items-center" id="experience">
            <div className='flex flex-col items-start h-[10%] justify-evenly w-full'>
                <h1 className='text-primary'>Experience</h1>
                <p className='font-light'>List of skills and past relevant professional positions</p>
            </div>
            <div className="h-[85%] w-full flex flex-row items-center justify-between">
                <div className='flex flex-col items-center justify-between w-full h-full'>
                    {jobs.map((job, i) => {
                        return (
                            <div className='flex flex-col items-start w-full justify-evenly h-1/2 fle-col' key={i}>
                                <div className='flex flex-col items-start justify-between h-[30%]'>
                                    <a href={job.link}>
                                        <h3>{job.name}</h3>
                                    </a>
                                    <small className="font-bold">{job.position}</small>
                                    <small>{job.duration}</small>
                                    <small>{job.address}</small>
                                </div>
                                <div className='flex flex-col items-start justify-around w-4/5 h-1/2'>
                                    <ul className="list-disc list-inside">
                                        {job.duties.map((duty, i) => {
                                            return (
                                                <li key={i}><small>{duty}</small></li>
                                            )
                                        })}
                                    </ul>
                                    <small>Skills: {job.skills}</small>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center w-full h-full">
                    <Tech />
                </div>
            </div>
        </div>
    )
}