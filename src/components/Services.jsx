import React from "react";
import { slash } from '../assets';
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';

import { styles } from "../styles";
import { provi } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
<Tilt className='xs:w-[300px] w-full'>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full blue p-[1px] rounded-[20px]'
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-white rounded-[20px] py-2 px-2 min-h-[5px] flex justify-evenly items-center flex-col'
    >
      <div className='flex items-center'>
        <img
          src={icon}
          alt='web-development'
          className='w-10 h-10 object-contain'
        />

        <h3 className='text-gray-500 text-[20px] font-bold text-center ml-2'>
          {title}
        </h3>
      </div>
    </div>
  </motion.div>
</Tilt>

);



const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className={`${styles.heroHeadText3}`}>Our Services</h2>
        <img src={slash} alt="Slash" style={{ width: '300px', height: '20px' }} />
      </motion.div>

      <div className={`mt-20 grid grid-cols-1 md:grid-cols-4 gap-20 ${styles.serviceGrid}`}>
        {provi.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Services);