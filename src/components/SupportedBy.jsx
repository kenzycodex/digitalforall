import React from 'react';

// Import images
import FCDOImage from '../assets/png/FCDO.png';
import NITDAImage from '../assets/png/NITDA.jpg';
import DividerSVG from '../assets/svg/divider.svg';
import VentureSVG from '../assets/svg/venture.svg';
import PrunedgeSVG from '../assets/svg/prunedge.svg';

const SupportedBy = () => {
    return (
        <div className="max-content pt-[160px] pb-[100px] xlsm:py-[50px]">
            <div className="container mx-auto">
                <p className="font-raleway font-semibold text-[24px] xlsm:text-xl leading-[43px] text-[#3CAE5C] text-center mb-10">
                    Supported By
                </p>
                {/* Flex layout for larger screens */}
                <div className="hidden lg:flex items-center justify-center gap-[30px] flex-wrap">
                    <div className="flex items-center gap-[20px]">
                        <div className="h-[45px] w-[172px] xlsm:w-[150px] xlsm:h-auto">
                            <img alt="FCDO" src={FCDOImage} className="h-full w-full object-contain" />
                        </div>
                        <img alt="divider" src={DividerSVG} className="hidden lg:block h-[33px] w-[10px]" />
                        <div className="h-[60px] w-[172px] xlsm:w-[150px] xlsm:h-auto">
                            <img alt="NITDA" src={NITDAImage} className="h-full w-full object-contain" />
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <img alt="divider" src={DividerSVG} className="hidden lg:block h-[33px] w-[10px]" />
                        <div className="h-[45px] w-[172px] xlsm:w-[150px] xlsm:h-auto">
                            <img alt="venture" src={VentureSVG} className="h-full w-full object-contain" />
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <img alt="divider" src={DividerSVG} className="hidden lg:block h-[33px] w-[10px]" />
                        <div className="h-[45px] w-[172px] xlsm:w-[150px] xlsm:h-auto">
                            <img alt="prunedge" src={PrunedgeSVG} className="h-full w-full object-contain" />
                        </div>
                    </div>
                </div>

                {/* Grid layout for smaller screens */}
                <div className="grid grid-cols-2 gap-[20px] justify-items-center lg:hidden">
                    <div className="h-[45px] w-[160px] xlsm:w-[150px] xlsm:h-auto">
                        <img alt="FCDO" src={FCDOImage} className="h-full w-full object-contain" />
                    </div>
                    <div className="h-[60px] w-[160px] xlsm:w-[150px] xlsm:h-auto">
                        <img alt="NITDA" src={NITDAImage} className="h-full w-full object-contain" />
                    </div>
                    <div className="h-[45px] w-[140px] xlsm:w-[150px] xlsm:h-auto">
                        <img alt="venture" src={VentureSVG} className="h-full w-full object-contain" />
                    </div>
                    <div className="h-[45px] w-[140px] xlsm:w-[150px] xlsm:h-auto">
                        <img alt="prunedge" src={PrunedgeSVG} className="h-full w-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportedBy;
