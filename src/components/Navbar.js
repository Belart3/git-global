import Logo from "./Logo";
import NavLink from "./NavLink";
import {linkcont} from "../data/NavLinks"
import BtnBlue from "./BtnBlue";
import React, { useState , useRef } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {

    const DropDown = useRef(null);
    const [showDropDown, setShowDropDown] = useState(false);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };
    return ( 
        <nav className="flex flex-row justify-between items-center p-4 md:px-8 py-4 lg:px-20 max-w-screen-2xl 2xl:px-0 mx-auto fixed top-0 inset-x-0 z-50 bg-Background">

            <Link to="/">
                <Logo />
            </Link>

            <ul className="hidden items-center justify-between md:flex space-x-10">
                    {linkcont.map((data) => (
                        <NavLink key={data.id} src={data.src} title={data.title}  href={data.href}/>
                    ))}
                </ul> 

            <div className="flex-row items-center justify-center hidden md:flex">
                <BtnBlue title="get started" src="images/arrow-right.svg" />
            </div>

            <button className="h-12 w-12 bg-BL500 p-2 cursor-pointer sm:block md:hidden" onClick={toggleDropDown}>
                <img src="images/menu-open.png" alt="" className="h-full w-full"/>
            </button>

            {/* change sm:hidden to sm:block */}
            {showDropDown ? (
                <div className=
                    {`transform transition-all animate__faster ease-in-out animate__animated 
                    absolute top-20 left-0 w-full h-80 bg-Background px-10 md:hidden py-10 
                        ${
                        showDropDown
                        ? 'opacity-100 sm:block animate__fadeIn'
                        : 'opacity-0 hidden animate__fadeOut'
                    }`} ref={DropDown}
                >
                    <ul className="items-start justify-between flex flex-col gap-y-8">
                        {linkcont.map((data) => (
                            <NavLink key={data.id} src={data.src} title={data.title} href={data.href} />
                        ))}
                    </ul>
                </div>
            ) : null}
        </nav>
    );
}
 
export default Navbar;