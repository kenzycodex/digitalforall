import React from 'react';

// Import images
import LinkedInIcon from '../assets/svg/linkedin.svg';
import TwitterIcon from '../assets/svg/twitter.svg';
import InstagramIcon from '../assets/svg/instagram.svg';
import FacebookIcon from '../assets/svg/facebook.svg';

const UnlockTheFuture = () => {
    return (
        <div className="flex justify-center lg:px-10 px-4">
            <div className="bg-[#052435] rounded-[40px] lg:rounded-[80px] p-6 lg:p-10">
                <div className="max-content py-6 lg:py-10">
                    <div className="container text-white mx-auto">
                        <div className="flex flex-col items-center">
                            <p className="font-raleway font-semibold text-xl lg:text-2xl leading-snug text-[#3CAE5C] text-center">
                                Unlock the Future of Tech with Us!
                            </p>
                            <p className="font-raleway font-normal text-base lg:text-lg leading-snug text-[#FFFFFF] text-center mt-2">
                                Follow, Learn, and Innovate - Join our vibrant community across all social platforms.
                            </p>
                            <div className="flex gap-4 mt-6">
                                {[
                                    { icon: LinkedInIcon, link: "https://www.linkedin.com/school/tech4dev/", alt: "LinkedIn" },
                                    { icon: TwitterIcon, link: "https://www.Twitter.com/Tech4Devhq", alt: "Twitter" },
                                    { icon: InstagramIcon, link: "https://www.Instagram.com/Tech4dev", alt: "Instagram" },
                                    { icon: FacebookIcon, link: "https://web.facebook.com/Tech4DevHQ", alt: "Facebook" },
                                ].map(({ icon, link, alt }) => (
                                    <div key={alt} className="w-10 h-10 p-2 rounded-full border border-[#FFFFFF] flex justify-center items-center">
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <img alt={alt} src={icon} className="h-full w-full object-contain" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnlockTheFuture;
