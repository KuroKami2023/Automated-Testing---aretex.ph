import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { slash } from '../assets';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, text }) => {
  const [isFlipped] = useState(false);


  return (
    <Tilt className="xs:w-[350px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full bg-sky-500/[0.2] p-[1px] rounded-[20px] py-5 px-12 min-h-[360px] flex flex-col" 
      >
        <div className="text-white text-center flex flex-col justify-center items-center">
          <img
            src={icon}
            alt="web-development"
            className="w-10 h-16 object-contain"
          />
          <h3 className="text-blue-900 text-[20px] font-bold">{title}</h3>
          
        </div>
        <div className="text-white text-center flex flex-col justify-center items-center mt-5">
        <p className="text-gray-700 text-[16px] font-medium ">{text}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
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
        <h2 className={styles.heroHeadText3}>The Aretex Hybrid Accounting Model</h2>
        <img
          src={slash}
          alt="Slash"
          style={{ width: "300px", height: "20px" }}
        />
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.heroSubText2} mt-2 text-gray-700 mt-5`}
      >
        The traditional outsourcing models can be expensive and still fail to
        meet the required objectives and outcomes of your business. Aretex's
        Hybrid Accounting Model combines skilled offshore resources with onshore
        oversight and documented processes to deliver you a highly
        cost-effective and powerful outsourced accounting solution
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.heroSubText2} mt-2 text-gray-700 text-center mt-20`}
      >
        There are three key elements to the hybrid accounting model.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech);
