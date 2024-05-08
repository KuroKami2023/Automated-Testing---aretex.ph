import { Form, Empty, CTA, Hero, Footer} from './components';
import { cover } from './assets';
import { styles } from './styles';
const Contacts = () => {
    return (
    
          <div className='relative z-0 bg-primary'>
          <div
              className='bg-hero-image'
              style={{
              height: '1400px',
              width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#32449c', // rgba format with the desired opacity
            }}
               >
                <Empty />
              <div className='bg-white relative z-0 bg-white -mt-40' >
                    <Form />
              </div>
              <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
              <div className="my-10"></div>
                   
                    <Footer />
              </div>
              </div>
          </div>
          </div>
        
      )
    }
export default Contacts