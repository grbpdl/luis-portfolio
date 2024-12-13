import React from 'react';

const PageFive = () => {
  return (
    <div className="flex flex-col items-center w-full bg-[#2b2b2b] min-h-screen text-white p-10">
      {/* Contact Form Section */}
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center font-chapFont">Contact Me</h2>
        <form className="flex flex-col gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Social Media and Contacts Section */}
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-6 font-chapFont">Connect with Me</h2>
        <div className="flex justify-center gap-8 text-2xl">
          {/* Social Media Links */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <i className="fab fa-facebook"></i> {/* Replace with your preferred icon */}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Email or Phone Contact */}
        <div className="mt-8">
          <p className="text-lg">
            <strong>Email:</strong> contact@example.com
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> +123 456 7890
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
