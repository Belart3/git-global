const SectionHeading = ({title, src}) => {
    return (  
        <div className="flex flex-row items-center space-x-3 px-0 2xl:px-20">
            <img src={src} alt="" className="size-8"/>
            <p className="capitalize swear-text text-28/34 lg:text-32/38 font-normal text-B500">
                {title}
            </p>
        </div>
    );
}
 
export default SectionHeading;