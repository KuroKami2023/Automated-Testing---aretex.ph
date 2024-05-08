import { styles } from "../styles";
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px]`} style={{ height: '290px', width: '100%', background: 'linear-gradient(to bottom, white, #D3F4FB)' }}>
    <div className="flex-1 flex flex-col max-w-[490px] w-full sm:mb-5">
      <h2 className={`${styles.title3} mt-5`}>Learn more about Aretex and the Hybrid Accounting Model</h2>
    </div>
    <div className="text-center mt-0">
    <Link to="/contacts" id="forms" className="flex items-center gap-2" onClick={() => {
             
             window.scrollTo({ top: 450, behavior: 'smooth' });
          }}>
            <button type="button" className={`py-4 px-6 bg-orange-500 text-white font-poppins font-medium text-[18px] outline-none rounded-lg ${styles}`}>
              Contact Us
            </button>
    </Link>
    </div>
  </section>
);

export default CTA;
