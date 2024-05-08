import React from 'react'
import { CTA, Ateam, Hero2, Navbar, Footer, Impact,Leaders} from './components';
import { cover2 ,ateam} from './assets';
import { styles } from './styles';

const About = () => {
    return (
    
          <div className='relative z-0 bg-primary'>
          <div
              className='bg-hero-image'
              style={{
              backgroundImage: `url(${cover2})`,
              height: '1400px',
              width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: 'rgba(15, 25, 35, 0.7)', // rgba format with the desired opacity
            }}
               >
                <Hero2 />
              <div className='bg-white relative z-0 bg-white'>
                <Impact />
              </div>
              <div className='relative z-0 bg-primary'>
              <div
              className='bg-hero-image'
              style={{
              backgroundImage: `url(${ateam})`,
              height: '800px',
              width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: 'rgba(15, 25, 35, 0.7)', // rgba format with the desired opacity
            }}> <Ateam />
                </div>
              </div>
              <div className={`bg-white  relative z-0 bg-white -mt-40 ${styles.flexStart}`}>
              <div className="my-96"></div>
                    <Leaders/>
              </div>
              <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
              <div className="my-96"></div>
                    <CTA />
                    <Footer />
              </div>
              </div>
          </div>
          </div>
        
      )
    }

export default About