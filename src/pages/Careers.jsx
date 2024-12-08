import React, { useState } from "react";
import PropTypes from "prop-types";
import ModernBackground from "../components/ModernBackground";
import Navigation from "../components/Navigation";
import AnimatedFooter from "../components/Footer";
import { motion } from "framer-motion";

const jobListings = [
  {
    title: "Frontend Developer",
    description:
      "We are looking for a skilled frontend developer with experience in React and Tailwind CSS.",
    email: "frontend@example.com",
  },
  {
    title: "Backend Developer",
    description:
      "Join our team as a backend developer. Experience with Node.js and MongoDB is required.",
    email: "backend@example.com",
  },
  {
    title: "UI/UX Designer",
    description:
      "We need a creative UI/UX designer to help us build user-friendly interfaces.",
    email: "uiux@example.com",
  },
];

const JobListing = ({ job, index }) => (
  <motion.div
    className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-800"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 * index }}
  >
    <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
    <p className="text-gray-400">{job.description}</p>
    <p className="text-gray-400 mt-4">
      Contact:{" "}
      <a href={`mailto:${job.email}`} className="text-blue-400">
        {job.email}
      </a>
    </p>
  </motion.div>
);

JobListing.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const ContactForm = ({ formData, handleChange, handleSubmit }) => (
  <motion.div
    className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 shadow-lg mt-16 lg:w-1/2 w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-400">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-gray-400">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-gray-400">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  </motion.div>
);

ContactForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <ModernBackground>
      <div className="h-screen overflow-y-auto no-scrollbar">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-white mt-16">
          <motion.h1
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Careers
          </motion.h1>
          <motion.p
            className="text-lg text-center text-gray-400 mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our team and help us build the future of digital solutions.
          </motion.p>
          <div className="flex gap-8 justify-start items-start lg:flex-row flex-col">
            <div className="space-y-8">
              {jobListings.map((job, index) => (
                <JobListing key={index} job={job} index={index} />
              ))}
            </div>
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
        <hr className="border-t-1 border-[#bfbfbf] w-[90%] mx-auto opacity-30" />
        <AnimatedFooter />
      </div>
    </ModernBackground>
  );
}
