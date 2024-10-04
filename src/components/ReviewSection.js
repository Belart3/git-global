import BtnBlue from "./BtnBlue";
import BtnTransparent from "./BtnTransparent";
import NavLink from "./NavLink";
import { service } from "../data/Services";
import Services from "./Services";

const ReviewSection = () => {
    return ( 
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 mb-16 gap-4 lg:gap-0 sm:mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl 2xl:px-0 2xl:mx-auto bg-Background lg:mb-36 xl:h-1044">
          
            <div className="w-off-16  flex flex-col bg-PE500 place-self-start max-w-lg lg:max-w-none  lg:row-span-3 lg:order-2 lg:place-self-end lg:w-full">
                <div className="bg-Background py-6 px-5 w-44">
                    <NavLink title="our services" src="images/service.svg"/>
                </div>
                <div className="py-10 px-5 md:p-10 flex flex-col items-start justify-center gap-y-8 w-full">
                    <div className="flex flex-col gap-x-10 gap-y-10">
                        <h3 className="text-6xl leading-60 font-normal swear-text">
                            Bringing Families Together  
                        </h3>
                        <p className="ibm-plex-sans-regular text-B400 text-lg/7">
                            At GIT Global, we simplify the complexities of U.S. immigration to navigate your journey to the United States. Our experienced team is dedicated to guiding you through every step of the process.
                        </p>
                    </div>
                    <BtnBlue title="get started" src="images/arrow-right.svg"/>
                </div>
            </div>

            <div className="flex flex-col w-off-16 sm:w-full sm:row-span-5 place-self-end sm:self-start max-w-lg lg:max-w-none lg:order-1">
                <div className="h-96 lg:h-906 bg-review-section bg-top bg-no-repeat bg-cover"></div>
                <div className="p-5 xl:p-10 flex flex-col xl:flex-row items-center gap-y-8 gap-x-4 justify-center bg-G500">
                    <p className="text-28/8 font-normal swear-text">
                        Start your journey with us
                    </p>
                    <BtnTransparent title="start now" src="images/arrow-right.svg"/>
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