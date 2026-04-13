import { useState, useEffect } from 'react';
import { getProfile } from '../api';

const fallbackBio = `I am a software engineer with a passion for building clean, scalable, and modern web applications. I enjoy solving complex problems and turning ideas into real products.

My experience spans full-stack development, working with technologies like React, Django, Python, JavaScript, and more. I am always learning and improving my skills.`;

function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile()
      .then((res) => setProfile(res.data))
      .catch(() => {});
  }, []);

  const bio = profile?.bio || fallbackBio;

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-16 h-1 bg-blue-500 mb-8"></div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Bio */}
          <div className="md:col-span-2 text-gray-400 leading-relaxed space-y-4">
            {bio.split('\n').filter(Boolean).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Info Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
            {profile?.location && (
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-gray-300 text-sm">{profile.location}</p>
              </div>
            )}
            {profile?.email && (
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${profile.email}`} className="text-blue-400 text-sm hover:underline">
                  {profile.email}
                </a>
              </div>
            )}
            {profile?.github_url && (
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">GitHub</p>
                <a href={profile.github_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">
                  View Profile
                </a>
              </div>
            )}
            {profile?.linkedin_url && (
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">LinkedIn</p>
                <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">
                  View Profile
                </a>
              </div>
            )}
            {!profile && (
              <p className="text-gray-500 text-sm">Profile info will appear here once added via the admin panel.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
