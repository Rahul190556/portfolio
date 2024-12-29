import React, { useState } from 'react';
import { Mail, Github, Linkedin, Code } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_90id01f'; // Your EmailJS service ID
    const templateID = 'template_1pqqpz5'; // Your EmailJS template ID
    const publicKey = 'QXpTWOHLPHegkCRRS'; // Your EmailJS public key

    // Initialize EmailJS
    emailjs.init(publicKey);

    // Send form data using sendForm
    emailjs
      .sendForm(serviceID, templateID, e.target)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitted(true);
        setErrorMessage('');
        e.target.reset(); // Clear the form after successful submission
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setErrorMessage('Failed to send your message. Please try again.');
      });
  };

  return (
    <section id="contact" className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Contact Me</h2>

        <div className="flex flex-wrap justify-center md:flex-nowrap gap-12">
          {/* Form Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 lg:ml-auto px-6 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            {!isSubmitted ? (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden Field for Recipient */}
                <input
                  type="hidden"
                  name="to_name"
                  value="Rahul Kumar" // Replace with the recipient's name
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium dark:text-white">Name</label>
                  <input
                    type="text"
                    name="from_name" // Matches {{from_name}} in the template
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium dark:text-white">Email</label>
                  <input
                    type="email"
                    name="from_email" // Matches {{from_email}} in the template
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium dark:text-white">Message</label>
                  <textarea
                    name="message" // Matches {{message}} in the template
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <p className="text-center text-green-600 font-bold">Thank you! Your message has been sent.</p>
            )}
            {errorMessage && <p className="text-center text-red-600 mt-4">{errorMessage}</p>}
          </div>

          {/* Professional Profiles */}
          <div className="w-full md:w-1/2 lg:w-1/3 space-y-6">
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold dark:text-white">Professional Profiles</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/Rahul190556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-kumar-7400ba228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/rahul190556/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Code className="w-5 h-5" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Download Resume</h3>
              <a
                href="https://drive.google.com/file/d/1jaeh_TL0QmyzZgZp8JI5gUFDYIxF7W0A/view?usp=drivesdk"
                download
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
