import { useState, useEffect } from 'react';
import { getSkills, getExperience, getEducation } from '../api';

function Resume() {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getSkills(), getExperience(), getEducation()])
      .then(([skillsRes, expRes, eduRes]) => {
        setSkills(skillsRes.data);
        setExperience(expRes.data);
        setEducation(eduRes.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Group skills by category
  const skillGroups = skills.reduce((groups, skill) => {
    if (!groups[skill.category]) groups[skill.category] = [];
    groups[skill.category].push(skill.name);
    return groups;
  }, {});

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  if (loading) {
    return (
      <section className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-500">Loading resume...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
        <div className="w-16 h-1 bg-blue-500 mb-8"></div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
          {Object.keys(skillGroups).length === 0 ? (
            <p className="text-gray-500">Skills will appear here once added via the admin panel.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(skillGroups).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                >
                  <h4 className="text-blue-400 font-medium mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-gray-400 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Experience</h3>
          {experience.length === 0 ? (
            <p className="text-gray-500">Experience will appear here once added via the admin panel.</p>
          ) : (
            <div className="space-y-6">
              {experience.map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{job.role}</h4>
                    <span className="text-sm text-gray-500">
                      {formatDate(job.start_date)} — {formatDate(job.end_date)}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm mb-2">{job.company}</p>
                  <p className="text-gray-400 text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Education */}
        {education.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <span className="text-sm text-gray-500">
                      {formatDate(edu.start_date)} — {formatDate(edu.end_date)}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm mb-2">{edu.school}</p>
                  {edu.description && (
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Resume;
