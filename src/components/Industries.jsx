import React from 'react';
import { slash } from '../assets';
import soft from '../assets/soft.png';
import pharmacy from '../assets/pharmacy.png';
import home from '../assets/home.png';
import real from '../assets/real.png';
import med from '../assets/med.png';
import pro from '../assets/pro.png';
import fit from '../assets/fit.png';
import consume from '../assets/consume.png';
import Card from './Card';
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from 'framer-motion';
import { SectionWrapper2 } from '../hoc';

const Industries = () => {

  const industryData = [
    { img: pharmacy, text: 'Pharmacy' },
    { img: real, text: 'Real Estate + Property' },
    { img: home, text: 'Trade + Home Services' },
    { img: med, text: 'Medical + Allied Health' },
    { img: consume, text: 'Retail, Food + Consumer' },
    { img: pro, text: 'Professional Services' },
    { img: fit, text: 'Health, Fitness + Beauty' },
    { img: soft, text: 'Software + Technology' },
  ];

  return (
    <div className='flex flex-col md:flex-row max-w-[100%] text-center'>

      <motion.div
        variants={textVariant()} 
        className='w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-center'
      >
        <h2 className={`${styles.heroHeadText3} text-white`}>Industries</h2>
        <img src={slash} alt='Slash' style={{ width: '300px', height: '20px' }} />
        <div>
          <motion.p variants={fadeIn("","",0.3,3)} className={`${styles.heroSubText2} text-white-100 max-w-[600px] mt-6 md:mt-8 text-left`}>
            We layer decades of financial and accounting experience with industry-specific knowledge to deliver tailored advice and services to meet your business's unique needs.
          </motion.p>
        </div>
      </motion.div>

      <motion.div className='w-full md:w-1/2 p-6 md:p-10 flex flex-col  items-center '>
        <motion.div variants={fadeIn("right", "spring", 0, 0.90)} className=' grid grid-cols-1 md:grid-cols-4 gap-2 md:flex flex-wrap'>
          {industryData.map((industry, index) => (
            <Card key={index} img={industry.img}>
              <p>{industry.text}</p>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SectionWrapper2(Industries);
