import { FC } from "react"

type TechItem = {
    name: string;
    icon: JSX.Element;
}

type TechStack = {
    techStack: TechItem[]
}

export const TechMarquee: FC<TechStack> = ({ techStack }) => {
    return (
        <div className="relative flex h-1/2" id="marquee">
            <div className=" animate-marquee whitespace-nowrap z-index-1">
                {techStack.map((tech) => (
                    <div className="inline-flex items-center h-full mx-4 xsm:w-20" key={tech.name}>
                        <div className="flex flex-col items-center w-full gap-4 bg-white border-transparent rounded-full shadow-xl justify-evenly">
                            {tech.icon}
                            <small className='font-semibold xsm:text-[0.7rem] mb-2'>{tech.name}</small>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 flex items-center justify-center h-full animate-marquee2 whitespace-nowrap z-index-1">
                {techStack.map((tech) => (
                    <div className="inline-flex items-center h-full mx-4 xsm:w-20" key={tech.name}>
                        <div className="flex flex-col items-center w-full gap-4 bg-white border-transparent rounded-full shadow-lg justify-evenly">
                            {tech.icon}
                            <small className='font-semibold xsm:text-[0.7rem] mb-2'>{tech.name}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
