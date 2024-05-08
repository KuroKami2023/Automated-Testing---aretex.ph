import { styles } from "../styles";
import { alogo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="flex flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index) => (
        <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
          <img
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
          />
        </a>
      ))}
    </div>
    <div className="flex flex-row md:mt-0 mt-6">
      <div className="flex-1 flex flex-col justify-start mt-10">
        <img
          src={alogo}
          alt="alogo"
          className="w-[186px] h-[52px] object-contain flex-grow"
        />
        <p className="font-poppins font-normal text-blue-900 mt-5 max-w-[500px] text-[14px] text-center">
          Metro Manila, Philippines
        </p>
        <p className="font-poppins font-normal text-blue-900 mt-5 max-w-[500px] text-[14px] text-center">
          careers@aretex.com.au
        </p>
        <p className="font-poppins font-normal text-blue-900 mt-5 max-w-[500px] text-[14px] text-center">
          +63 9063735789
        </p>
      </div>

      
    </div>

    <div className="w-full flex flex-col items-center justify-center pt-6 border-t-[1px] border-t-[#32449c] mt-10">
        <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-blue-900">
            © Copyright {new Date().getFullYear()} All Rights Reserved
        </p>
    </div>

    
  </section>
);

export default Footer;
