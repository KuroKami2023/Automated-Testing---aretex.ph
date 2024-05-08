import { motion } from 'framer-motion';
import { styles } from '../styles';
import { slash } from '../assets';
import { SectionWrapper } from '../hoc';
import {fadeIn, textVariant} from '../utils/motion';

const empty = () => {
    return (
        <section className='relative w-full h-96 mx-auto'>
          <motion.div variants={textVariant()} className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
            <div className='flex flex-col justify-center'>
              <h1 className={`${styles.heroHeadText} text-white mt-50`}>CONTACT US</h1>
              <img src={slash} alt="Slash" style={{ width: '300px', height: '20px' }} />
            </div>
          </motion.div>
        </section>
      )
}

export default SectionWrapper(empty)