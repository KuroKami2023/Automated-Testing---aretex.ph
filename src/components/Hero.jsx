import { motion } from 'framer-motion';
import { styles } from '../styles';
import { slash } from '../assets';
import { SectionWrapper } from '../hoc';
import {fadeIn, textVariant} from '../utils/motion';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <motion.div variants={textVariant()} className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center'>
          <h1 className={`${styles.heroHeadText2} text-white font-medium `}>HELPING BUSINESSES</h1>
          <h1 className={`${styles.heroHeadText} text-white `}>SCALE EFFECTIVELY</h1>
          <img src={slash} alt="Slash" style={{ width: '300px', height: '20px' }} />
          <motion.p variants={fadeIn("","",0.1,1)} className={`${styles.heroSubText2} mt-2 text-white-100 `}>
            With Accounting best practice and real-time access to accurate financial data.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Hero)
