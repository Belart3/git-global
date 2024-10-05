const NewsHeader = ({date , title , subtitle}) => {
    return (  
        <div className="flex flex-col gap-8 justify-center items-start md:items-center mx-4 lg:mx-28 2xl:max-w-screen-2xl mx-4 lg:mx-auto pt-28 mb-10 lg:mb-16">
            <h5 className="text-base text-start md:text-center lg:text-lg ibm-plex-sans-regular text-B300">{date}</h5>
            <h2 className="text-B500 text-start md:text-center text-60/60 lg:text-64/64 swear-text ">{title}</h2>
            <h4 className="text-lg text-start md:text-center lg:text-xl text-B300 ibm-plex-sans-regular">{subtitle}</h4>
        </div>
    );
}
 
export default NewsHeader;