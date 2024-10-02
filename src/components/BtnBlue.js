const BtnBlue = ({title, src}) => {
    return ( 
        <button className="border border-BL500 bg-BL500 hover:bg-BL500/75 py-4 px-6 flex  flex-row items-center justify-center space-x-3 cursor-pointer w-full max-w-400 sm:max-w-44">
            <p className="text-base leading-4 capitalize text-white ibm-plex-sans-regular w-fit">
                {title}
            </p>
            <img src={src} alt="" className="size-6"/>
        </button>
    );
}
 
export default BtnBlue;