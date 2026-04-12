import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to Django API later
    setStatus('Thank you! Your message has been received.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
        <div className="w-16 h-1 bg-blue-500 mb-8"></div>
        <p className="text-gray-400 mb-8">
          Have a question or want to work together? Send me a message and
          I'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            Send Message
          </button>

          {status && (
            <p className="text-green-400 text-sm text-center">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
