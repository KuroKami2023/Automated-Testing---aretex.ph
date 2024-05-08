import React from 'react'
import { Join, Jobs, Hero3, Culture,Footer, Empower} from './components';
import { makati ,ateam} from './assets';
import { styles } from './styles';

const Careers = () => {
  return (
  
        <div className='relative z-0 bg-primary'>
        <div
            className='bg-hero-image'
            style={{
            backgroundImage: `url(${makati})`,
            height: '1400px',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(15, 25, 35, 0.7)', // rgba format with the desired opacity
          }}
             >
              <Hero3 />
            <div className='bg-white relative z-0 bg-white'>
              
              <Empower />
              <Culture />
            </div>
            <div className='relative z-0 'style={{ backgroundColor: '#32449c' }}>
             <Jobs />
            </div>
            <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>     
            <div>
              <h3 className={`${styles.heroHeadText5} max-w-[450px] justify-center mt-20`}>
                Let's Join the <span className={styles.heroHeadText6}>A-team</span>.
              </h3>
                </div>
                  <Join />
                  <Footer />
            </div>
            </div>
        </div>
        </div>
      
    )
  }


export default Careers