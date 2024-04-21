import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import IntersectionAnim from "./IntersectionAnim";
import NumHeading from "./NumHeading";
import { projects } from "../consts";
import LinkIcon from "./icons/LinkIcon";
import OutlinedButton from "./OutlinedButton";

const ProjectsContent = () => {
  const [projectHighlighted, setProjectHighlighted] = useState(0);
  const [isShowMore, setIsShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shownProjects = isShowMore
    ? projects[projectHighlighted].projects
    : projects[projectHighlighted].projects.slice(0, 6);

  const [selectedProject, setSelectedProject] = useState(shownProjects[0]);

  const onProjectClicked = (index) => {
    setSelectedProject(shownProjects[index]);
    setIsModalOpen(true);
  };

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center py-4"
    >
      {isModalOpen && (
        <ProjectModal
          setIsModalOpen={setIsModalOpen}
          project={selectedProject}
        />
      )}
      <IntersectionAnim index={0} delay={0.2} type={"transLeft"}>
        <NumHeading number={3} content={"My Projects"} />
      </IntersectionAnim>
      <div className="lg:flex mx-auto">
        <div className="hidden lg:inline w-px h-44 mx-4 my-5 bg-slate-400 dark:bg-slate-700"></div>
        <div className="lg:w-72 flex flex-wrap lg:flex-nowrap lg:flex-col justify-center lg:justify-start lg:items-start mr-2 my-1 lg:my-10">
          {projects.map((project, index) => (
            <IntersectionAnim
              key={index}
              index={1}
              delay={0.1}
              type={"transUp"}
            >
              <button
                className={`px-2 py-1 lg:py-2 transition duration-300 ease-in-out hover:underline ${
                  projectHighlighted == index ? "primary-color" : ""
                }`}
                onClick={() => {
                  setProjectHighlighted(index);
                  setIsShowMore(false);
                }}
              >
                {project.name}
              </button>
            </IntersectionAnim>
          ))}
        </div>
        <hr className="lg:hidden w-full greyish-color border-slate-400 dark:border-slate-700 mb-5" />
        <div className="w-full flex flex-col items-center gap-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center">
            {shownProjects.map((project, index) => (
              <IntersectionAnim key={index} index={2} delay={0.1} type={""}>
                <div
                  onClick={() => onProjectClicked(index)}
                  className="max-w-80 lg:max-w-full w-full md:max-w-full border rounded-md border-slate-400 dark:border-slate-700 bg-sky-400/10 hover:bg-sky-400/20 overflow-hidden cursor-pointer transition duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-4">
                    <p className="secondary-color line-clamp-1">{project.name}</p>
                    <p className="text-sm line-clamp-2 my-2">
                      {project.description}
                    </p>
                    <a href={project.repoSource} target="_blank">
                      <button className="flex gap-1 items-center px-2 py-1 text-sm border border-slate-400 dark:border-slate-700 rounded-xl hover:border-slate-500 hover:dark:border-slate-600">
                        <p>Source</p>
                        <LinkIcon />
                      </button>
                    </a>
                  </div>
                </div>
              </IntersectionAnim>
            ))}
          </div>
          {projects[projectHighlighted].projects.length > 6 && !isShowMore && (
            <div onClick={() => setIsShowMore(true)}>
              <OutlinedButton text={"Show More"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
