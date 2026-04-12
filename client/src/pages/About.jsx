function About() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-16 h-1 bg-blue-500 mb-8"></div>
        <div className="text-gray-400 leading-relaxed space-y-4">
          <p>
            I am a software engineer with a passion for building clean,
            scalable, and modern web applications. I enjoy solving complex
            problems and turning ideas into real products.
          </p>
          <p>
            My experience spans full-stack development, working with
            technologies like React, Django, Python, JavaScript, and more.
            I am always learning and improving my skills.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies,
            contributing to open-source projects, and sharing knowledge
            with the community.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
