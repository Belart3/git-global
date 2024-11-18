const BtnNext = ({title, disabled, type }) => {
    return ( 
        <button 
            type={type}
            disabled={disabled} 
            className={`border p-4 flex flex-row items-center justify-center space-x-3 w-full group inline-flex ${
                disabled 
                    ? 'bg-BL100 cursor-not-allowed' 
                    : 'border-BL500 bg-BL500 cursor-pointer lg:hover:scale-90 transition duration-500 ease-in-out'
            }`}
        >
            <p className="text-base/16 capitalize text-white ibm-plex-sans-regular">
                {title}
            </p>
            <svg className={`size-6 ${
                disabled 
                    ? '' 
                    : 'lg:group-hover:animate-[horizontal_1s_infinite] '
            }`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="arrow-right-02">
                <path id="Vector" d="M15.0001 17L20 12L15 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M4 12H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
        </button>
    );
}
 
export default BtnNext;