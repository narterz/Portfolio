import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ProjectDescriptions } from "../constants/projectText";
import { BsDot } from "react-icons/bs";

export const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ProjectinView = useInView(ref, { once: true });
  const controlY = useAnimation();

  useEffect(() => {
    if (ProjectinView) {
      controlY.start("visible");
    }
  }, [ProjectinView, controlY]);

  return (
    <div
      className="bg-primary relative flex flex-col items-center justify-between"
      id="projects"
      ref={scrollRef}
    >
      <div className="shape-divider-projects xsm:hidden md:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="projects-shape-fill"
          ></path>
        </svg>
      </div>
      <motion.div
        className="w-[90%] h-full flex flex-col justify-between absolute md:top-[10rem] lg:top-[12rem] "
        initial="hidden"
        ref={ref}
        animate={controlY}
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="project-header mb-36 flex flex-col">
          <h1 className="text-white">
            My <b className="text-secondary">Projects</b>
          </h1>
          <p className="font-normal xsm:text-center lg:text-start text-white md:w-5/6 lg:w-8/12 xl:w-1/2">
            Behold! A collection of my favorite project.
          </p>
        </div>
        {ProjectDescriptions.map((project) => (
          <div className="project-container mb-11" key={project.projectName}>

            <div className="project-visuals-container h-full mb-10 flex flex-col">

              <div className="project-visuals-title flex flex-row justify-evenly items-center">
                <span className="bracket">&#123;</span>
                  <h2 className="h-full text-white flex items-center">{project.projectName}</h2>
                <span className="bracket">&#125;</span>
              </div>

              <div className="project-visuals-img flex justify-center">
                <img
                  src={project.projectScreenshot}
                  alt={`Home page of the ${project.projectName} project`}
                  className="rounded-lg"> 
                </img>
              </div>

              <div className="project-visuals-btns-container flex flex-row justify-between">
                <a href={project.projectLinks.websiteLink}>
                  <button className="project-btns">View Website</button>
                </a>
                <a href={project.projectLinks.websiteLink}>
                  <button className="project-btns">View on Github</button>
                </a>
              </div>

            </div>

            <div className="project-description-container xsm:max-md:w-full md:w-[45%] xsm:max-md:h-3/5 xsm:max-md:ms-0 xsm:max-md:text-center xxl:ms-10  md:h-2/3 flex flex-col justify-between">

              <div className="project-description-summary">
                <h3 className="text-white xsm:text-sm md:text-norm lg:text-md">{project.projectDetails.summary}</h3>
              </div>

              <div className="project-description-features">
                <h3 className="font-semibold text-white xsm:text-sm md:text-norm lg:text-md">Key Features</h3>
                {project.projectDetails.features.map((feat) => {
                  return (
                    <div className="flex flex-row items-center md:h-1/4" key={feat}>
                      <BsDot
                        size={15}
                        className="text-secondary w-[5%] h-full"
                      />
                      <p className="text-white lg:text-xsm xxl:text-sm">{feat}</p>
                    </div>
                  );
                })}
              </div>

              <div className="project-description-tech flex flex-row items-center justify-between">
                {project.projectLanguages.map((lang) => {
                  return (
                    <div
                      className="flex flex-row items-center"
                      key={lang.name}
                    >
                      {lang.icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
