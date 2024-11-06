const BtnBack = ({title}) => {
    return ( 
        <button className="border border-BL500 bg-transparent lg:hover:scale-90 transition duration-500 ease-in-out text-B500 p-4 flex  flex-row-reverse items-center justify-center cursor-pointer w-full group">
            <p className="text-base/16 capitalize ibm-plex-sans-regular">
                {title}
            </p>
            <svg className="size-6 me-3 lg:group-hover:animate-[back_1s_infinite] " fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.49996 17.015L4.5 12.0149L9.5 7.01495" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className=" "/>
                <path d="M4.5 12.0152H20.5" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className=" "/>
            </svg>
        </button>
    );
}
 
export default BtnBack;