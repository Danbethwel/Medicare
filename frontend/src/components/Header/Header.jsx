import { useEffect, useRef, useState } from 'react';
import userImg from '../../assets/images/avatar-icon.png';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

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
  const headerRef = useRef(null);
  const menuRef = useRef(null); // Add menuRef

  const handleStickyHeader = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
  };

  useEffect(() => {
    handleStickyHeader();
    
    window.addEventListener('scroll', handleStickyHeader); // Add scroll event listener

    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, [handleStickyHeader]); // Add handleStickyHeader as a dependency

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className='header'>
      <div className='container'>
        <div className='flex items-center justify-between' ref={headerRef}>
          {/* =========== logo ========= */}
          <div>
            <img src={logo} alt='Logo' />
          </div>

          {/* =========== menu ========= */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className='text-primaryColor text-[16px] leading-7 font-[600]'
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* =========== nav right ========= */}
          <div className='flex items-center gap-4'>
            <div className='hidden'>
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImg} className='w-full rounded-full' alt='' />
                </figure>
              </Link>
            </div>

            <Link to='/login'>
              <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center rounded-[58px]'>
                Login
              </button>
            </Link>
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
