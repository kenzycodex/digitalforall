import React from 'react';

// Import images
import FCDOImage from '../assets/png/FCDO.png';
import NITDAImage from '../assets/png/NITDA.jpg';
import VentureSVG from '../assets/svg/venture.svg';
import PrunedgeSVG from '../assets/svg/prunedge.svg';

const SupportedBy = () => {
    return (
        <div className="max-content pt-[160px] pb-[100px] xlsm:py-[50px]">
            <div className="container mx-auto">
                <p className="font-raleway font-semibold text-2xl xlsm:text-xl leading-[43px] text-[#3CAE5C] text-center mb-10">
                    Supported By
                </p>
                <div className="grid grid-cols-2 gap-[50px] xlsm:grid-cols-2 xlsm:gap-[20px] justify-items-center">
                    <div className="h-[52px] w-[172px] xlsm:w-[150px] xlsm:h-auto">
                        <img
                            alt="FCDO"
                            src={FCDOImage}
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className="h-[70px] w-[172px] xlsm:w-[150px] xlsm:h-auto">
                        <img
                            alt="NITDA"
                            src={NITDAImage}
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className="h-[52px] w-[172px] xlsm:w-[150px] xlsm:h-auto">
                        <img
                            alt="venture"
                            src={VentureSVG}
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className="h-[52px] w-[172px] xlsm:w-[150px] xlsm:h-auto">
                        <img
                            alt="prunedge"
                            src={PrunedgeSVG}
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportedBy;
