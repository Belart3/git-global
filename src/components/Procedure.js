const Procedure = ({id,heading,paragraph}) => {
    return ( 
        <div className="flex flex-row justify-start items-start gap-5">
            <div className="bg-BL500 p-3">
                <p className=" text-white text-xl/4 ibm-plex-sans-regular">
                    {id}
                </p>
            </div>
            <div className="flex flex-col justify-center gap-4 items-start">
                <h5 className="ibm-plex-sans-regular font-normal text-B500 text-lg">
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