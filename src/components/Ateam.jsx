import { motion } from 'framer-motion';
import { styles } from '../styles';
import { slash,cover2 } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Ateam = () => {
  return (
    <section className='relative w-full h-96 flex justify-center items-center'>
      <motion.div
        variants={textVariant()}
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center gap-5`}
      >
        <div className='flex flex-col items-center'>
          <h1 className={`${styles.heroHeadText2} text-white  text-center mt-20`}>
            THE A-TEAM
          </h1>
          <img src={slash} alt='Slash' style={{ width: '300px', height: '20px' }} />
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`${styles.heroSubText2} mt-10 text-white-100 `}>
            We've carefully curated a team with a shared philosophy, broad capabilities and a unified sense of purpose.
            With everyone pushing in the same direction and striving for the same goals - empowering our clients to
            embrace accounting best practices. Minimising wasted time and resources, and improving the quality of the
            information they use to run their business.
          </motion.p>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`${styles.heroSubText2} mt-10 text-white-100 `}>
            Spearheaded by a strong leadership team based both here in Manila and in Sydney, Australia. Aretex brings
            together the best in senior financial management with superior processes and execution.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Ateam);
