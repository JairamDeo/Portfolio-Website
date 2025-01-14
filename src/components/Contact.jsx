import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Modal from "react-modal";
import { motion } from "framer-motion";

// Modal styles
Modal.setAppElement("#root");

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const API_Key = import.meta.env.VITE_Form_API_Key;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formDataToSubmit = new FormData(event.target);
    formDataToSubmit.append("access_key", API_Key); // Web3Forms Public Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
        setResult("Form submitted successfully!");
        setFormSubmitted(true); // Show success modal
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-blue-900 to-black py-16 p-2 text-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-10 text-transparent bg-clip-text text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-teal-400 mb-4">Send a Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-black font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </motion.button>
            <div className="text-center text-white">{result}</div>
          </motion.form>

          {/* Contact Information Card */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-teal-400 mb-4">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt size={30} className="text-teal-400 transition-all duration-300 hover:text-teal-500 transform hover:scale-110" />
                <a
                  href="tel:+918830973046"
                  className="text-white hover:text-teal-400 transition-all duration-300"
                >
                  +91 88309 73046
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope size={30} className="text-teal-400 transition-all duration-300 hover:text-teal-500 transform hover:scale-110" />
                <a
                  href="mailto:jairamdeo2002@gmail.com"
                  className="text-white hover:text-teal-400 transition-all duration-300"
                >
                  jairamdeo2002@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaGithub size={30} className="text-teal-400 transition-all duration-300 hover:text-teal-500 transform hover:scale-110" />
                <a
                  href="https://github.com/JairamDeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-400 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin size={30} className="text-teal-400 transition-all duration-300 hover:text-teal-500 transform hover:scale-110" />
                <a
                  href="https://www.linkedin.com/in/jairamdeo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-400 transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal for Success */}
      <Modal
        isOpen={formSubmitted}
        onRequestClose={() => setFormSubmitted(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="p-8 text-center bg-teal-800 text-white rounded-lg">
          <motion.h3
            className="text-2xl font-bold mb-4 text-teal-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Form Submitted Successfully!
          </motion.h3>
          <p className="text-gray-200 mb-4">Thank you for reaching out. I will get back to you shortly.</p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;
