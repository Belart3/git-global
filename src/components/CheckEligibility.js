import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CheckEligibility = () => {

    const [showCheckEligibility, setShowCheckEligibility] = useState(false);
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowCheckEligibility(true);
            } else {
                setShowCheckEligibility(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (showCheckEligibility) {
            setIsRendered(true);
        } else {
            const timer = setTimeout(() => {
                setIsRendered(false);
            }, 500); 

            return () => clearTimeout(timer); 
        }
    }, [showCheckEligibility]);

    return (  
        <div 
        className=
            {`transform transition-all duration-500 ease-in-out animate__animated scroll-element 
                bottom-0 fixed w-full bg-Background shadow-progress z-50 ${
                showCheckEligibility
                ? 'opacity-100 animate__slideInUp'
                : 'opacity-0 animate__slideOutDown'
            }`}
        >
            <ProgressBar />
            {showCheckEligibility ? (
                <div className=
                {`transform transition-all duration-500 ease-in-out bottom-0 w-full px-5 py-10px lg:py-4 lg:px-20 max-w-screen-2xl 2xl:mx-auto z-50  animate__animated scroll-element flex-col ${
                    showCheckEligibility
                    ? 'opacity-100 animate__slideInUp'
                    : 'opacity-0 animate__slideOutDown'
                }`}
                >
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="flex flex-col gap-4">
                            <h5 className="swear-text-semibold font-semibold text-B500 text-base lg:text-2xl/28">
                                Schedule your consultation today
                            </h5>
                            <p className="text-B400 hidden md:block lg:text-base ibm-plex-sans-regular">
                                Unlimited support. Dedicated prepare consultants. Accuracy guaranteed.
                            </p>
                        </div>
                        <Link to="/form">
                            <div className="max-w-52 min-w-40 sm:min-w-52">
                                <button className="border border-BL500 bg-BL500 p-4 flex  flex-row items-center justify-center space-x-3 cursor-pointer w-full lg:hover:scale-90 transition duration-500 ease-in-out group inline-flex">
                                    <p className="text-base/16 capitalize text-white ibm-plex-sans-regular">
                                        check eligibility
                                    </p>
                                    <div class="flex">
                                        <div class="lg:group-hover:animate-[horizontal_1s_infinite]">
                                            <svg  className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="arrow-right-02">
                                                <path id="Vector" d="M15.0001 17L20 12L15 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path id="Vector_2" d="M4 12H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
 
export default CheckEligibility;