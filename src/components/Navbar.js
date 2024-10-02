import Logo from "./Logo";
import NavLink from "./NavLink";
import {linkcont} from "../data/NavLinks"
import BtnBlue from "./BtnBlue";

const Navbar = () => {
    return ( 
        <nav className="flex flex-row justify-between items-center p-4 md:px-8 py-4 lg:px-20 max-w-screen-2xl 2xl:px-0 mx-auto fixed w-full top-0 inset-x-0 z-50 bg-Background">

            <Logo />

            <ul className="hidden items-center justify-between md:flex space-x-10">
                    {linkcont.map((data) => (
                        <NavLink key={data.id} src={data.src} title={data.title} />
                    ))}
                </ul> 

            <div className="flex-row items-center justify-center hidden md:flex">
                <BtnBlue title="get started" src="images/arrow-right.svg" />
            </div>

            <div className="h-12 w-12 bg-BL500 p-2 cursor-pointer sm:block md:hidden">
                <img src="images/menu-open.png" alt="" className="h-full w-full"/>
            </div>
            
            {/* change sm:hidden to sm:block */}
            <div className="absolute top-20 left-0 w-full h-60 bg-Background px-10 md:hidden sm:hidden pt-10 hidden">
                <ul className="items-start justify-between flex flex-col gap-y-8">
                    {linkcont.map((data) => (
                        <NavLink key={data.id} src={data.src} title={data.title} />
                    ))}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;