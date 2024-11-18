const Services = ({src, title}) => {
    return ( 
        <div className="flex flex-row sm:flex-col w-full sm:w-45 lg:w-2/5 justify-start items-center sm:items-start gap-x-4 sm:gap-y-8">
            <img src={src} alt="" className="size-8 sm:size-10 xl:size-14" />
            <p className="swear-text-normal font-normal text-2xl/28 lg:text-28/34 capitalize">
                {title}
            </p>
        </div>
    );
}
 
export default Services;