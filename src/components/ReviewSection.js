import BtnBlue from "./BtnBlue";
import { service } from "../data/Services";
import Services from "./Services";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ReviewSection = () => {
    return ( 
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 gap-4 lg:gap-0 sm:mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl px-0 2xl:px-20 2xl:mx-auto bg-Background xl:h-1044">
          
            <div className="w-off-16  flex flex-col bg-PE500 place-self-start max-w-lg lg:max-w-none  lg:row-span-3 lg:order-2 lg:place-self-end lg:w-full">
                <div className="bg-Background w-fit p-4 lg:py-6 lg:px-10 ">
                    <div className="flex flex-row items-center space-x-3">
                        <img src="images/service.svg" alt="" className="size-8"/>
                        <p className="capitalize swear-text text-28/38 lg:text-32/38 font-normal text-B500">
                            our services
                        </p>
                    </div>
                </div>
                <div className="py-10 px-5 md:p-10 flex flex-col items-start justify-center gap-y-8 w-full">
                    <div className="flex flex-col gap-x-10 gap-y-10">
                        <h3 className="text-5xl lg:text-6xl leading-60 font-normal swear-text">
                            Bringing Families Together  
                        </h3>
                        <p className="ibm-plex-sans-regular text-B400 text-lg/7">
                            At GIT Global, we simplify the complexities of U.S. immigration to navigate your journey to the United States. Our experienced team is dedicated to guiding you through every step of the process.
                        </p>
                    </div>
                    <div className="w-full sm:w-44 flex justify-center items-center">
                        <div className="w-full">
                            <Link to="/form">
                                <BtnBlue title="get started"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-off-16 sm:w-full sm:row-span-5 place-self-end sm:self-start max-w-lg lg:max-w-none lg:order-1">
                <div className="h-96 lg:h-906 bg-review-section bg-top bg-no-repeat bg-cover"></div>
                <div className="p-5 xl:p-10 flex flex-col xl:flex-row xl:justify-between items-center gap-y-8 justify-center bg-G500">
                    <p className="text-28/8 font-normal swear-text">
                        Start your journey with us
                    </p>
                    <div className="w-full sm:w-44 flex justify-center items-center">
                        <div className="w-full">
                            <Link to="/form">
                                <button className="border border-BL500 bg-transparent lg:hover:scale-90 duration-500 transition ease-in-out text-B500 p-4 flex  flex-row items-center justify-center space-x-3 cursor-pointer w-full group">
                                    <p className="text-base/16 capitalize ibm-plex-sans-regular lg:group-hover:text-B500">
                                        start now
                                    </p>
                                    <div class="lg:group-hover:animate-[horizontal_1s_infinite]">
                                        <svg  className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="arrow-right-02">
                                            <path id="Vector" d="M15.0001 17L20 12L15 7" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path id="Vector_2" d="M4 12H20" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-off-32 lg:w-full lg:max-w-none place-self-center sm:place-self-end lg:place-self-start lg:row-span-2 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start gap-8 sm:max-w-lg sm:p-5 lg:p-10 lg:order-3">
                {
                    service.map((data) => (
                        <Services src={data.src} title={data.title} key={data.id} />
                    ))
                }
            </div>
        </section>
    );
}
 
export default ReviewSection;