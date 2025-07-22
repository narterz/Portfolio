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

export const jobs: Job[] = [
    {
        name: "Entrypoint Communications LLC",
        link: "https://www.linkedin.com/company/entrypoint-communications-llc",
        position: "Frontend Developer",
        duration: "June 2024 - Present",
        address: "30 Waterside Dr, Farmington, CT 06032",
        description: "Maintained company grocery store kiosk UI",
        duties: [
            "Fixed kisok bugs reporting ticket system by shareholders",
            "Upgraded legacy kisok UI to cutting edge technologies",
            "Created design system for kiosk UI using Adobe XD",
        ],
        skills: "JavaScript, Python, Bash Scripting, Docker, AureliaJS, PostgreSQL, Adobe XD"
    },
    {
        name: "Entrypoint Communications LLC",
        link: "",
        position: "Database Administrator",
        duration: "Aug 2024 - June 2025",
        address: "30 Waterside Dr, Farmington, CT 06032",
        description: "Maintained and deployed various database systems",
        duties: [
            "Developed client transactional reports using PostgreSQL, MySQL, Python, and Apache NiFi",
            "Configure and mantained various clustered database systems",
            "Developed, integratged, and maintained server monitoring system in company's portal."
        ],
        skills: "PostgreSQL, MySQL, Apache Druid, Apache NiFi, Apache Superset, Python, , JavaScript, Bash Scripting, Docker, Kubernetes, GIT"
    },
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