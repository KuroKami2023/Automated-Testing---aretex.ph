import { layout,styles } from '../styles';
import {impacting} from '../assets';
import { motion } from 'framer-motion';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const impact = () => {
  return (
    <>
    <section className={layout.section}>

    <motion.div variants={fadeIn("","",0.2,2)} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
      <h2 className={`${styles.heroHeadText3} max-w-[400px] `}> At Aretex, we aim for <span className={`${styles.heroHeadText4} `}> IMPACT</span></h2>
      <h2 className={`${styles.heroSubText2} max-w-[400px] text-blue-900 italic `}> THE RIGHT MIX FOR ANY BUSINESS</h2>
      <motion.p variants={fadeIn("","",0.2,2)} className={`${styles.paragraph2} max-w-[450px] mt-5`}>
      We specialise in tailor-made accounting and data management solutions. Integrating highly experienced senior finance expertise with technology, process, and talent.
      </motion.p>
      <motion.p variants={fadeIn("","",0.2,2)} className={`${styles.paragraph2} max-w-[450px] mt-5`}>
      Partnering with our clients to identify productivity gains and document best practices, we empower them to improve the financial management of their business.
      </motion.p>
    </motion.div>
    <motion.div variants={fadeIn("","",0.2,2)} className={layout.sectionImg2}>
        <motion.img src={impacting} alt="impacting" className="w-[480px] h-[480px] relative z-[5] rounded-lg "/>
    </motion.div>
  </section>
  </>
  )
}

export default SectionWrapper(impact)