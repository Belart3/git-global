const News = ({src, date,  paragraph}) => {
    return (  
        <div className="flex flex-col gap-3  hover:underline cursor-pointer">
            <div className="">
                <img src={src} alt="" className="h-full -w-full"/>
            </div>
            <div className="flex flex-col gap-3">
                <h5 className="text-B300 text-xs/12 ibm-plex-sans-regular !no-underline">
                    {date}
                </h5>
                <p className="text-BL500 text-lg/22 md:text-xl/24 ibm-plex-sans-regular capitalize">
                    {paragraph}
                </p>
            </div>
        </div>
    );
}
 
export default News;