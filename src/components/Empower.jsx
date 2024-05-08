import { layout,styles } from '../styles';
import {innovation} from '../assets';
import { motion } from 'framer-motion';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Empower = () => {
  return (
    <>
    <section className={layout.section}>

    <motion.div variants={fadeIn("","",0.2,2)} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  `}>
      <h3 className={`${styles.heroHeadText9}`}>Empowering <span className={`${styles.heroHeadText8}`}> our team to <em>innovate and disrupt fragmented</em> accounting and business management systems.</span></h3>
      
      <motion.p variants={fadeIn("","",0.2,2)} className={`${styles.paragraph2} max-w-[550px] mt-5`}>
      We foster a work environment for employees to thrive and grow, both professionally and personally.
       While our flexible culture facilitates a healthy work-life balance and supports collaboration.
      </motion.p>
      <motion.p variants={fadeIn("","",0.2,2)} className={`${styles.paragraph2} max-w-[550px] mt-5`}>
      You'll engage in diverse projects aand make a significant impact within a supportive
      atmosphere, where your ideas are valued and your potential is realised. Surround yourself with brilliant 
      and driven individuals who have a shared dedication to delivering world-class accounting and
      data management Solutions.
      </motion.p>
      <motion.p variants={fadeIn("","",0.2,2)} className={`${styles.paragraph2} max-w-[550px] mt-5`}>
      If you thrive in a dynamic and challenging environment and are 
      excited about developing yourself further, we invite you to apply to
      become an integral player in our A-Team.
      </motion.p>
    </motion.div>
    <motion.div variants={fadeIn("","",0.2,2)} className={layout.sectionImg2}>
        <motion.img src={innovation} alt="innovation" className="w-[380px] h-[570px] relative z-[5] rounded-lg"/>
    </motion.div>
  </section>
  </>
  )
}

export default SectionWrapper(Empower)