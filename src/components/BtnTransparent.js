const BtnTransparent = ({title}) => {
    return ( 
        <button className="border border-BL500 bg-transparent  transition ease-in-out  lg:hover:bg-BL500 text-B500 p-4 flex  flex-row items-center justify-center space-x-3 cursor-pointer w-full group">
            <p className="text-base/16 capitalize ibm-plex-sans-regular lg:group-hover:text-white">
                {title}
            </p>
            <svg className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20V4" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className=" lg:group-hover:stroke-white"/>
                <path d="M17 15L12 20L7 15" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className=" lg:group-hover:stroke-white"/>
            </svg>
        </button>
    );
}
 
export default BtnTransparent;