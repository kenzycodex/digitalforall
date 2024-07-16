import React, { useState, useEffect } from 'react';
import warningIcon from '../assets/svg/warningIcon.svg';
import subHeaderCloseIcon from '../assets/svg/subHeaderCloseIcon.svg';
import digitalLogo from '../assets/svg/digitalLogo.svg';
import digitalLogoBlue from '../assets/svg/dfaLogoCol.svg';
import menuOpen from '../assets/svg/menuOpen.svg';
import menuClose from '../assets/svg/menuClose.svg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWarningVisible, setIsWarningVisible] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    // Show the warning message when the page is reloaded or landed on
    setIsWarningVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeWarning = () => {
    setIsWarningVisible(false);
  };

  return (
    <nav className={`navbar fixed top-0 z-50 w-full transition-colors duration-500 ${hasShadow ? 'shadow-md' : ''} ${isMenuOpen ? 'bg-white' : 'bg-[#083A55]'}`}>
      {isWarningVisible && (
        <div className="warning w-full bg-[#DA1414] py-[12px] px-[18px] text-white">
          <div className="max-content">
            <div className="warning-content flex justify-between items-center">
              <div className="flex items-center gap-[20px]">
                <div className="warning-icon w-[24px] h-[24px]">
                  <img alt="warning" src={warningIcon} />
                </div>
                <p className="warning-text text-[13px] leading-[20px] animate-marquee">
                  All learning will end in July 2024 and competition will commence August 2024.
                </p>
              </div>
              <div className="close-icon w-[16px] h-[24px] cursor-pointer" onClick={closeWarning}>
                <img alt="close" src={subHeaderCloseIcon} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-content font-[Manrope] cursor-pointer">
        <div className={`container flex justify-between items-center py-[24px] ${isMenuOpen ? 'border-b-[1px] border-[#083A55]' : ''}`}>
          <div className="md:hidden flex items-center gap-[10px]">
            <div className="menu-icon w-[24px] h-[24px] cursor-pointer" onClick={toggleMenu}>
              <img alt="menu" src={isMenuOpen ? menuClose : menuOpen} className={`${isMenuOpen ? 'bg-white' : ''}`} />
            </div>
            <div className="logo w-[180px] h-[40px] ml-7">
              <img alt="logo" src={isMenuOpen ? digitalLogoBlue : digitalLogo} />
            </div>
          </div>
          <div className="container hidden md:flex items-center nav-container gap-[30px]">
            <div className="logo w-[130px] h-[35px]">
              <img alt="logo" src={digitalLogo} />
            </div>
            <div className="nav-links flex justify-evenly">
              <a href="#home" className="nav-link text-[14px] font-[Raleway] font-[500] leading-[24px] text-[#3CAE5C] border-b-[2px] border-[#3CAE5C]">Home</a>
              <a href="#participate" className="nav-link text-[14px] font-[Raleway] font-[500] leading-[24px] text-[#FFFFFF]">How to Participate</a>
              <a href="#about" className="nav-link text-[14px] font-[Raleway] font-[500] leading-[24px] text-[#FFFFFF]">About</a>
              <a href="#faqs" className="nav-link text-[14px] font-[Raleway] font-[500] leading-[24px] text-[#FFFFFF]">FAQs</a>
            </div>
            <div className="auth-buttons flex items-center gap-[10px]">
              <a href="https://dfa.digitalforall.tech4dev.com/login" className="btn-secondary font-[Ubuntu] font-[400] text-[16px] leading-[24px]">Login</a>
              <a href="https://dfa.digitalforall.tech4dev.com/register" className="btn-primary-min font-[Ubuntu] font-[400] text-[16px] leading-[24px]">Register</a>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu md:hidden h-full bg-white py-[16px] px-[5px] shadow-lg">
            <div className=".mobile-nav-links flex flex-col items-start gap-[20px] text-[17px] p-[20px]">
              <a href="#home" className="w-full py-[10px] px-[20px] text-[#3CAE5C] bg-[#F2FCF5] rounded-lg">Home</a>
              <a href="#participate" className="w-full py-[10px] px-[20px] text-[#083A55]">How to Participate</a>
              <a href="#about" className="w-full py-[10px] px-[20px] text-[#083A55]">About</a>
              <a href="#faqs" className="w-full py-[10px] px-[20px] text-[#083A55]">FAQs</a>
              <div className="mobile-auth-buttons flex items-center gap-[10px]">
                <a href="https://dfa.digitalforall.tech4dev.com/login" className="w-full py-[10px] px-[60px] text-center btn-secondary font-[Ubuntu] font-[400] text-[16px] leading-[24px]">Login</a>
                <a href="https://dfa.digitalforall.tech4dev.com/register" className="w-full py-[10px] px-[60px] text-center btn-primary-min font-[Ubuntu] font-[400] text-[16px] leading-[24px]">Register</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
