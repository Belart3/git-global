import BtnBlue from "./BtnBlue";
import BtnTransparent from "./BtnTransparent";
import Navbar from "./Navbar";

const Header = () => {
    return ( 
        <header className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl 2xl:px-0 2xl:mx-auto gap-y-10 xl:gap-x-20 pt-28 lg:h-screen lg:max-h-1000 lg:min-h-700">
                
                <div className=" space-y-8 w-full md:w-1/2 lg:w-48">
                    <h2 className="text-6xl font-normal text-B500 swear-text">
                        The <br/> <span className='italic font-semibold text-B500 swear-text-semibold'>Simplified</span> <br/> American Journey
                    </h2>
                    <p className="ibm-plex-sans-regular text-B400 text-lg/7">
                        At GIT Global, we simplify the complexities of U.S. immigration to navigate your journey to the United States. Our experienced team is dedicated to guiding you through every step of the process.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-y-4 gap-x-4  justify-start items-center">
                        <BtnBlue title="get started"/>
                        <BtnTransparent title="our services"/>
                    </div>
                </div>

                <div className="flex flex-row items-start w-full max-w-600 h-400 sm:h-500 md:h-400 md:w-48 xl:h-full justify-between">
                    <div className="h-320 md:h-320 sm:h-420 xl:h-90%  w-48 sm:min-w-250 md:min-w-120 max-w-290 bg-hero-1 bg-top bg-cover bg-no-repeat"></div>
                    <div className="h-320 md:h-320 sm:h-420 xl:h-90% w-48 sm:min-w-250 md:min-w-120 max-w-290 bg-hero-2 bg-bottom bg-cover bg-no-repeat self-end"></div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;