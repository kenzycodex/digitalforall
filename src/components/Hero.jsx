import React from 'react';
import heroMap from '../assets/png/heroMap.png';
import arrowRight from '../assets/svg/next.svg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container bg-[#083A55]">
      <div className="max-content">
        <div className="container mt-[35px] py-[60px] xxlA:mt-0 lgSm:pt-[120px]" id='container'>
          <div className="hero-content xxlA:flex xxlA:justify-center xxlA:items-center w-full h-[700px] xxlA:h-screen lgSm:h-full">
            <div className="hero-inner flex justify-center items-center gap-[50px] lgSm:gap-[0px] lgSm:flex-col">
              <div className="hero-text mt-[120px] lgSm:mt-0 lgSm:mb-[30px]">
                <p className="font-[Ubuntu] font-[500] text-[#3CAE5C] text-[18px] leading-[27px]">Welcome to the</p>
                <p className="font-[Raleway] font-[600] text-[#FFFFFF] text-[32px] leading-[43px]">
                  Digital For All Challenge
                </p>
                <p className="font-[Ubuntu] max-w-[420px] font-[400] text-[#FFFFFF] text-[19px] leading-[27px] tracking-normal leading-tight">
                  We believe and are driven by the fact that every Nigerian deserves the right to digital literacy and skills for the future of work!
                </p>
                <div className="mt-[25px]">
                <button className="bg-[#3CAE5C] text-white border-none rounded-[8px] py-[10px] px-[35px] flex items-center gap-[15px] text-[18px] cursor-pointer sm:py-[16px] sm:px-[35px] sm:text-[16px] font-[Ubuntu] font-[400]">
                  <span>How to Participate</span>
                  <span className="w-[16px] h-[10px]">
                    <img alt="hero" src={arrowRight} />
                  </span>
                </button>
                </div>
              </div>
              <div className="hero-image-container xlsm:w-full lgSm:w-full lgSm:mt-[30px]">
                <div className="hero-image w-[600px] lg:w-[498px] h-[470px] xxlA:h-[550px] xlsm:h-[350px] sm:h-[259px] xlsm:w-full lgSm:w-full">
                  <img alt="hero" src={heroMap} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
