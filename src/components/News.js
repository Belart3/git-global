const News = ({src, date,  paragraph}) => {
    return (  
        <div className="flex flex-col gap-3 group cursor-pointer brightness-100 hover:brightness-75 transition ease-in-out">
            <div className="">
                <img src={src} alt="" className="h-full -w-full"/>
            </div>
            <div className="flex flex-col gap-3">
                <h5 className="text-B300 text-xs/12 ibm-plex-sans-regular">
                    {date}
                </h5>
                <p className="text-BL500 text-lg/22 md:text-xl/24 ibm-plex-sans-regular capitalize group-hover:underline">
                    {paragraph}
                </p>
            </div>
        </div>
    );
}
 
export default News;