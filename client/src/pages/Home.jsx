import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProfile } from '../api';

function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile()
      .then((res) => setProfile(res.data))
      .catch(() => {});
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-blue-400 text-lg font-medium mb-4">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {profile?.name || 'Nu Chai'}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          {profile?.title || 'Full-Stack Software Engineer'}
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {profile?.bio ||
            'I build modern, scalable web applications with clean code and professional engineering practices. Passionate about creating software that makes a difference.'}
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
