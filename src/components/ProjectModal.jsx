const ProjectModal = ({ setIsModalOpen, project }) => {
  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-slate-800/70 flex items-center justify-center z-[100]"
      onClick={closeProjectModal}
    >
      <div
        className="w-10/12 md:w-9/12 max-w-xl max-h-[90vh] pl-4 py-4 pr-3 relative rounded-lg bg-white dark:bg-slate-900 overflow-y-scroll"
        onClick={handleContentClick}
      >
        <div>
          <p className="text-xl md:text-2xl font-bold">{project.name}</p>
          <p className="text-md">{project.description}</p>
          <div className="flex flex-wrap gap-2 items-center pt-2">
            <p className="primary-color">Technologies Used</p>
            <div className="flex gap-2">
              {project.tech.map((single, index) => (
                <div key={index} className="px-2 py-1 rounded-2xl bg-sky-400/10 hover:bg-sky-400/20">
                  {single}
                </div>
              ))}
            </div>
          </div>
          <p className="pt-2 text-sm md:text-base"><a className="hover:underline" href={project.repoSource} target="_blank">{project.repoSource}</a></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
