import React from 'react';
import { ab, ck, cc, slash } from '../assets';
import { layout,styles } from '../styles';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const Leaders = () => {
  return (
    <>
    <section>
      <motion.div
        variants={textVariant()}
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center gap-5`}
      >
        <div className='flex flex-col items-center'>
          <h1 className={`${styles.heroHeadText3} text-center -mt-10`}>
            LEADERSHIP
          </h1>
          <img src={slash} alt='Slash' style={{ width: '300px', height: '20px' }} />
        </div>
        <section className='flex flex-col md:flex-row justify-center items-center gap-x-16 text-white mt-20'>

          {/* Chris Kendall */}
          <div className='w-full md:w-[400px] h-[420px] bg-transparent'>
            <div>
              <div>
                <img src={ck} alt='ck' className='w-[100%] h-[100%] relative z-[5] rounded-full' />
              </div>
            </div>
            <div className='-mt-10 '>
            <h3 className={`${styles.positionHeading3} mt-10 text-center`}>Chris Kendall</h3>
              <p className={`${styles.positionHeading4} text-center`}>CEO</p>
            <p className={`${styles.paragraph12} hidden md:block text-center mt-5 `}>
                Chris's passion for clients and accounting started at Price Waterhouse in the early ’90s. As a chartered accountant, Chris has worked with businesses globally to drive financial strategy and performance, bringing a ruthless focus on improving performance and efficiency and driving down costs. He’s a small business advocate, always striving to give his clients insight into their business performance.
            </p>
            </div>
          </div>
                    {/* ab */}
                    <div className='w-full md:w-[400px] h-[420px] bg-transparent'>
            <div>
              <div>
                <img src={ab} alt='ab' className='w-[100%] h-[100%] relative z-[5] rounded-full' />
              </div>
            </div>
            <div className='-mt-10'>
            <h3 className={`${styles.positionHeading3} mt-10 text-center`}>Andrew Bursill</h3>
              <p className={`${styles.positionHeading4} text-center`}>Director</p>
            <p className={`${styles.paragraph12} hidden md:block mt-5 text-center`}>
            As a chartered accountant, Andrew’s track record of success and financial leadership is a result of over 20 years of providing outsourced CFO services, principally with ASX-listed businesses. During this time, Andrew worked across many different industry sectors, including fintech, SaaS, mineral exploration, financial services, biotechnology, retail and FMCG.
            </p>
            </div>
          </div>
                    {/* Cc*/}
                    <div className='w-full md:w-[400px] h-[420px] bg-transparent'>
            <div>
              <div>
                <img src={cc} alt='cc' className='w-[100%] h-[100%] relative z-[5] rounded-full' />
              </div>
            </div>
            <div className='-mt-10'>
            <h3 className={`${styles.positionHeading3} mt-10 text-center`}>Chris Corpuz</h3>
              <p className={`${styles.positionHeading4} text-center`}>Director of Operations</p>
            <p className={`${styles.paragraph12} hidden md:block text-center mt-5 `}>
            Chris is an expert in delivering shared services for global companies. Based in Manila, Chris leads the A-Team by combining his passion for people and delivering high-quality services. With his relentless focus on operational excellence at every step, Chris empowers the A-Team to provide exceptional service.
            </p>
            </div>
          </div>
          
          
        </section>
      </motion.div>
    </section>
    </>
  );
};

export default SectionWrapper(Leaders);
