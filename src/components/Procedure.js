const Procedure = ({id,heading,paragraph}) => {
    return ( 
        <div className="flex flex-row justify-start items-start gap-5 pb-10 relative before:absolute before:bg-dotted-line before:bg-cover before:block before:h-full before:w-0.5 before:last:bg-none before:left-4 before:z-0">
            <div className="bg-BL500 p-3 z-10 ">
                <p className=" text-white text-lg lg:text-20/30 ibm-plex-sans-regular ">
                    {id}
                </p>
            </div>
            <div className="flex flex-col justify-center gap-4 items-start">
                <h5 className="ibm-plex-sans-semibold text-B500 text-lg lg:text-20/38">
                    {heading}
                </h5>
                <p className="text-base text-B300 ibm-plex-sans-regular">
                    {paragraph}
                </p>
            </div>
        </div>
    );
}
 
export default Procedure;