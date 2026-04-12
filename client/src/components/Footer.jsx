function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your@email.com"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
