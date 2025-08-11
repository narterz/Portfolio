// Nav
export interface NavLinks {
    name: string;
    link: string
}

// Experience

export interface Job {
    name: string;
    link?: string;
    position: string;
    duration: string;
    address: string;
    description: string;
    duties: string[];
    skills: string;
}

export type TechDescription = {
    name: string
    icon: React.ReactElement;
}

// Projects

export type ProjectLinks = {
    githubLink: string;
    websiteLink: string;
}

type ProjectDetails = {
    summary: string;
    features: string[];
    warnings?: string
}


export type ProjectDescription = {
    projectName: string;
    projectScreenshot: any;
    projectLanguages: TechDescription[];
    projectLinks: ProjectLinks;
    projectDetails: ProjectDetails
}