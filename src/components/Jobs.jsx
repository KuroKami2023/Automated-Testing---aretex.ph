import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { slash } from '../assets';
import { styles } from "../styles";
import { latestjobs } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import analyst from '../assets/analyst.png';
import acc from '../assets/acc.png';
const Modal = ({ title, title2, content, qualifications, location, link, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black absolute bg-opacity-70">
      <div className="w-[800px] h-[600px] bg-white p-5 rounded-[20px] py-5 px-12 flex flex-col overflow-hidden ">
        <div className="text-justify overflow-auto">
          <h3 className="text-[25px] text-blue-900 font-bold">{title}</h3>
          <h3 className="text-[16px] text-orange-500 font-bold">{title2}</h3>
          <div className="text-[16px] text-gray-700 font-medium mt-3 mb-5">
            <ul className="list-disc list-inside">
              <h1 className="text-[18px] text-gray-800 font-bold">Job Description</h1>
              {content.map((sentence, index) => (
                <li key={index}>{sentence}</li>
              ))}
            </ul>
          </div>
          <div className="text-[16px] text-gray-700 font-medium mt-3 mb-5">
            <ul className="list-disc list-inside">
              <h1 className="text-[18px] text-gray-800 font-bold">Qualifications</h1>
              {qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
          <h1 className="text-[18px] text-gray-800 font-bold">Location</h1>
          <p className="text-[16px] text-gray-700 font-medium mt-3">{location}</p>
        </div>
        <div className="flex mt-5 justify-between">
        <a
  className="bg-sky-500 text-white rounded-md py-2 px-4 cursor-pointer"
  href={link}
  target="_blank"
  rel="noopener noreferrer"
>
  Apply
</a>
<button
  className="bg-sky-500 text-white rounded-md py-2 px-4 cursor-pointer"
  onClick={onClose}
>
  Close
</button>

        </div>
      </div>
    </div>
  );
};





const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <motion.div
        variants={textVariant()}
        className="text-center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 className={`${styles.heroHeadText3} text-white  text-center`}>Latest Jobs</h2>
        <img
          src={slash}
          alt="Slash"
          style={{ width: "300px", height: "20px" }}
        />
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {latestjobs.map((service, index) => (
          <Tilt className="xs:w-[500px] w-full" key={index}>
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className="w-full bg-sky-500/[0.2] p-[1px] rounded-[20px] py-5 px-12 min-h-[360px] flex flex-col cursor-pointer"
              onClick={() => openModal(service)}
            >
              <div className="text-white text-center flex flex-col justify-center items-center">
                <img
                  src={service.icon}
                  alt="web-development"
                  className="w-10 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold">{service.title}</h3>
              </div>
              <div className="text-white text-center flex flex-col justify-center items-center mt-5">
                <p className="text-white-700 text-[16px] font-medium ">{service.text}</p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {selectedJob && (
  <Modal
    title={selectedJob.title}
    title2={selectedJob.title2}
    content={selectedJob.content}
    qualifications={selectedJob.qualifications}
    location={selectedJob.location}
    link={selectedJob.link}
    onClose={closeModal}
  />
)}

    </>
  );
};

export default SectionWrapper(Jobs);
