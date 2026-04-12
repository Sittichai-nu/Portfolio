const placeholderProjects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A full-stack web application built with React and Django.',
    tech: ['React', 'Django', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A REST API service with authentication and data management.',
    tech: ['Python', 'Django REST', 'JWT'],
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A responsive dashboard with real-time data visualization.',
    tech: ['React', 'Tailwind CSS', 'Chart.js'],
  },
];

function Projects() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
        <div className="w-16 h-1 bg-blue-500 mb-8"></div>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Here are some of the projects I have worked on. Each project
          demonstrates different skills and technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
