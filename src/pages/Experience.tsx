import { link } from "fs"
import { Tech } from "../components/Tech"
import { jobs } from "../constants/jobs"

export const Experience = () => {
    return (
        <div className="h-[100vh] me-auto ms-auto w-[90%] flex flex-col justify-between items-center" id="experience">
            <div className='flex flex-col items-start h-[10%] justify-evenly w-full'>
                <h1 className='text-primary'>Experience</h1>
                <p className='font-light'>List of skills and past relevant professional positions</p>
            </div>
            <div className="h-[85%] w-full flex flex-row items-center justify-between">
                <div className='flex flex-col items-center justify-between w-full h-full overflow-y-scroll space-y-8 py-4' id="experience-scroll">
                    {jobs.map((job, i) => {
                        return (
                            <div className='flex items-start w-full h-1/2 justify-evenly flex-col' key={i}>
                                <div className='flex flex-col items-start justify-between'>
                                    <a href={job.link}>
                                        <h3>{job.name}</h3>
                                    </a>
                                    <small className="font-bold">{job.position}</small>
                                    <small>{job.duration}</small>
                                    <small>{job.address}</small>
                                </div>
                                <div className='flex flex-col items-start justify-around w-4/5'>
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