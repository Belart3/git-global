import React, { useState, useEffect } from 'react';
import BtnBlue from './BtnBlue';
import ProgressBar from './ProgressBar';

const CheckEligibility = () => {

    const [showCheckEligibility, setShowCheckEligibility] = useState(false);

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

    return (  
        <div className='bottom-0 fixed w-full bg-Background shadow-progress '>
            <ProgressBar />
            {showCheckEligibility ? (
                <div className=
                {`transform transition-all duration-500 ease-in-out bottom-0 w-full p-5 lg:pt-0 pb-2 lg:px-20 2xl:p-0 max-w-screen-2xl 2xl:mx-auto  animate__animated scroll-element hidden md:flex flex-col ${
                    showCheckEligibility
                    ? 'opacity-100 translate-y-0 animate__slideInUp'
                    : 'opacity-0 translate-y-4 animate__fadeOutDown'
                }`}
                >
                    <div className="flex flex-col md:flex-row w-full justify-between items-center ">
                        <div className="flex flex-col gap-2">
                            <h5 className="swear-text text-B500 text-32/38">
                                Schedule your consultation today
                            </h5>
                            <p className="text-B300 text-xl ibm-plex-sans-regular">
                                Unlimited support. Dedicated prepare consultants. Accuracy guaranteed.
                            </p>
                        </div>
                        <BtnBlue title="check eligibility"/>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
 
export default CheckEligibility;