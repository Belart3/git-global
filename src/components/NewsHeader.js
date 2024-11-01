const NewsHeader = ({date , title , subtitle}) => {
    return (  
        <div className="flex flex-col gap-8 justify-center items-start md:items-center mx-4 md:mx-8 lg:mx-28 2xl:max-w-screen-2xl lg:mx-auto">
            {
                date && 
                <h5 className="text-base text-start md:text-center lg:text-lg ibm-plex-sans-regular text-B300">
                    {date}
                </h5>
            }

            {
                title && 
                <h2 className="text-B500 text-start md:text-center text-48/48 lg:text-64/64 swear-text ">
                    {title}
                </h2>
            }
            
            {
                subtitle && 
                <h4 className="text-lg text-start md:text-center lg:text-xl text-B400 ibm-plex-sans-regular">
                    {subtitle}
                </h4>
            }
        </div>
    );
}
 
export default NewsHeader;