import React, { useState } from "react";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const PageFive = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "", phone: "" }); // Reset form
      } else {
        setError(`Failed to send email: ${result.message}`);
      }
    } catch (err) {
      setError("Error sending email. Please try again later.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#2b2b2b] min-h-screen text-white p-10">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold font-chapFont pb-2">
          Wanna see magic happen at your event?
        </h1>
        <p className="text-lg sm:text-xl font-medium text-gray-300 font-chapFont">
          Fill up the form below to send a message, Luis will get back to you within 24 hours. Or make a call to chat right now.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-3xl bg-[#1f2a38] p-8 rounded-lg shadow-lg mb-12">
        {/* Buttons */}
        <div className="flex justify-between items-center mb-6 gap-10">
          <button
            className="bg-blue-600 text-white sm:mx-2 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            onClick={() => (window.location.href = "mailto:luisshrestha2@gmail.com")}
          >
            Send Email
          </button>
          <button
            className="bg-green-600 text-white  sm:mx-2  px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            onClick={() => (window.location.href = "tel:+9779869375735")}
          >
            Make a Call
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center font-chapFont">
          Message
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              required
              onWheel={(e) => e.target.blur()}
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full text-white font-semibold p-3 rounded-lg transition duration-300 ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
        {status && <p className="mt-4 text-center text-green-500">{status}</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>

      {/* Social Media and Contacts Section */}
      <div className="w-full max-w-3xl text-center">
        {/* <h2 className="text-3xl font-bold mb-6 font-chapFont">Connect with Me</h2> */}
        <div className="flex justify-center gap-8 text-2xl font-chapFont">
          {/* Social Media Links */}
          <a
            href="https://www.facebook.com/magicbyluis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <CiFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@magicbyluis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/magicbyluis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@magicbyluis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition duration-300"
          >
            <CiYoutube />
          </a>
        </div>

        {/* Email or Phone Contact */}
        <div className="mt-8">
          <p className="text-lg">
            <strong>Email:</strong> luisshrestha2@gmail.com
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> +977 9869375735
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
