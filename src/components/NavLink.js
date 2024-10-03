const NavLink = ({title, src, href}) => {
    return ( 
        <a href={href}>
            <li className="flex flex-row items-center space-x-3">
                <img src={src} alt="" className="size-6"/>
                <p className="capitalize ibm-plex-sans-regular text-base leading-4 font-normal text-B500">
                    {title}
                </p>
            </li>
        </a>
    );
}
 
export default NavLink;