import { layout,styles } from '../styles';
import {who} from '../assets';
import { motion } from 'framer-motion';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Tab1 = () => {
  return (
    <>
    <section className={layout.section}>

    <motion.div variants={fadeIn("","",0.2,2)} className={`flex-1 -mt-20 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
      <h2 className={`${styles.heroHeadText3} lg:text-[38px] max-w-[500px]`}> Aretex exists to <em className={`${styles.heroHeadText4} lg:text-[38px]`}> help businesses grow and scale</em></h2>
      <motion.p variants={fadeIn("","",0.2,2)} className={`${styles.paragraph2} max-w-[800px] mt-5`}>
      We re-engineer and optimise the entire accounting and bookkeeping process, creating the freedom to focus on what
      they do best and giving back time that was once lost.
      </motion.p>
      <div className="text-center mt-10" >
      <Link to="/contacts" id="forms" className="flex items-center gap-2" onClick={() => {
             
               window.scrollTo({ top: 450, behavior: 'smooth' });
            }}>
              <button type="button" className={`py-4 px-6 bg-orange-500 text-white font-poppins font-medium text-[18px] outline-none rounded-lg ${styles}`}>
                Contact Us
              </button>
      </Link>
      </div>
    </motion.div>
    <motion.div variants={fadeIn("","",0.2,2)} className={layout.sectionImg2}>
        <motion.img src={who} alt="who" className="w-[500px] h-[500px] relative z-[5] rounded-lg"/>
    </motion.div>
  </section>
  </>
  )
}

export default SectionWrapper(Tab1)