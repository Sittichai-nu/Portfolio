const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Python', 'Django', 'REST APIs', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'VS Code'] },
];

const experience = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'Building and maintaining full-stack web applications.',
  },
  {
    id: 2,
    role: 'Junior Developer',
    company: 'Company Name',
    period: '2020 - 2022',
    description: 'Developed features and fixed bugs in production applications.',
  },
];

function Resume() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
        <div className="w-16 h-1 bg-blue-500 mb-8"></div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6"
              >
                <h4 className="text-blue-400 font-medium mb-4">
                  {group.category}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-gray-400 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((job) => (
              <div
                key={job.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">
                    {job.role}
                  </h4>
                  <span className="text-sm text-gray-500">{job.period}</span>
                </div>
                <p className="text-blue-400 text-sm mb-2">{job.company}</p>
                <p className="text-gray-400 text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
