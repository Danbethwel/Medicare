import { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const navlinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Find a Doctor',
  },
  {
    path: '/service',
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  const isActive = true; // Assuming this variable determines the active state of the link

  return (
    <header className='header'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* =========== logo ========= */}
          <div>
            <img src={logo} alt='Logo' />
          </div>

          {/* =========== menu ========= */}
          <div className='navigation'>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500]'}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

