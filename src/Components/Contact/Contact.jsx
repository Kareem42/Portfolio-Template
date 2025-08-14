import React from "react";
import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";
import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // Here is where you would typically handle the email sending logic, e.g., using an API or a service like EmailJS
    console.log("Email sent!");
    toast.success("Email sent successfully!");
    e.target.reset();
  };

  return (
    <RevealOnScroll>
      <div
        id="contact"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 px-6 py-16 text-white"
      >
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
          <p className="text-center mb-6 text-gray-200">
            I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
          
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Write your message..."
              ></textarea>
            </div>


            <button
            onSubmit={sendEmail}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white border border-white rounded-lg hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-white transition duration-300 hover:scale-105"
              >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Contact;
