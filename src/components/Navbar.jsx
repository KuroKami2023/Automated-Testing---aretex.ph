import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav
  className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
  style={{ backgroundColor: scrolled ? "#32449c" : "transparent" }}
>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"  
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className='w-40 h-30 object-contain' />
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`
                ${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } hover:text-orange-500 text-[18px]
                font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                window.scrollTo(0, 0);
              }}
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 black-gradient absolute top-12 right-0 mx-4 my-2 min-w-[100px] z-10 rounded-xl`}>
            <ul className='list-none flex flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li 
                  key={link.id}
                  className={`
                    ${
                      active === link.title
                        ? "text-white"
                        : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[10px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Link to={link.id}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
