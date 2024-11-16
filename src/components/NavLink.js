import { Link } from "react-router-dom/cjs/react-router-dom";

const NavLink = ({title, src, href, onClick}) => {
    return ( 
        <Link to={href} onClick={onClick} >
            <li className="flex flex-row items-center space-x-3 lg:hover:bg-BL50 p-4">
                <img src={src} alt="" className="size-6"/>
                <p className="capitalize ibm-plex-sans-regular text-base leading-4 font-normal text-B500">
                    {title}
                </p>
            </li>
        </Link>
        
    );
}
 
export default NavLink;