import { layout, styles } from '../styles';
import { book } from '../assets';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const Tab2 = () => {
  return (
    <>
      <section className={layout.section}>
        <motion.div variants={fadeIn("", "", 0.2, 2)} className={layout.sectionImg2}>
          <motion.img src={book} alt="book" className="w-[420px] h-[340px] relative z-[5] rounded-lg" />
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.2, 2)} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <h2 className={`${styles.heroHeadText3}`}> Operational Accounting + Bookkeeping</h2>
          <motion.p variants={fadeIn("", "", 0.2, 2)} className={`${styles.paragraph2} max-w-[450px] mt-5`}>
            Providing a robust accounting function that delivers
            accurate and real-time financial information to our
            clients' key stakeholders. We offer everything from invoice
            and expense management, payroll, BAS lodgement and inventory management to cashflow forecasting,
            detailed financial reporting, and profitability analysis.
          </motion.p>
          <div className="text-center mt-10">

          </div>
        </motion.div>
      </section>
    </>
  );
};

export default SectionWrapper(Tab2);
