import { Services, Tab1,Tab2, CTA, Feedbacks, Hero, Navbar, Tech, Footer,Industries} from './components';
import { cover } from './assets';
import { styles } from './styles';
const Home = () => {
    return (
    
          <div className='relative z-0 bg-primary'>
          <div
              className='bg-hero-image'
              style={{
              backgroundImage: `url(${cover})`,
              height: '1400px',
              width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: 'rgba(15, 25, 35, 0.7)', // rgba format with the desired opacity
            }}
               >
                <Hero />
              <div className='bg-white relative z-0 bg-white '>
                    <Tab1 />
                    <Services />
                    <Tab2/>
              </div>
              <div className='relative z-0' style={{ backgroundColor: '#32449c' }}>
                <Industries />
              </div>
              <div className='bg-white relative z-0 bg-white '>
                    <Tech/>
                    <Feedbacks />
              </div>
              <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                  <div className="my-10"></div>
                    <CTA />
                    <Footer />
                    </div>
                  </div>
              </div>
          </div>
        
      )
    }
export default Home