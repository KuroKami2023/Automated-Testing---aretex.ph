import React from 'react';
import { clients } from "../constants";
import { styles } from "../styles";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const Feedbacks = () => (
  <motion.div variants={textVariant()}> 
    <h2 className='text-center mt-20'>
      <span className={`${styles.title3}`}>Those </span> <span className={`${styles.title2} loving`}>Loving </span> <span className={`${styles.title3}`}>Our Work</span>
    </h2>
    <section id="clients" className={`${styles.flexCenter} my-4 mt-0`}>
      <div
        className={`${styles.flexCenter} flex-wrap w-full`}
        style={{ flexDirection: "row" }}
      >
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            style={{ margin: '10px' }} // Adding margin here
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
              style={{ margin: '10px' }} // Adding margin to the image
            />
          </div>
        ))}
      </div>
    </section>
    <div className="my-10"></div>
  </motion.div>
);

export default SectionWrapper(Feedbacks);
