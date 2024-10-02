const Testimonials = ({title, testimony, author}) => {
    return (  
        <div className="
        border border-BL100 
        col-span-6 col-start-1 even:col-start-2 
        xl:row-span-5 xl:col-span-1 xl:even:row-start-2 xl:row-start-1
        py-10 px-6">

            <h4 className="mb-4 ibm-plex-sans-bold text-xl">
                {title}
            </h4>

            <div className="flex flex-row mb-8">

            </div>

            <p className="text-B300 text-base mb-10 ibm-plex-sans-regular">
                {testimony}
            </p>

            <p className=" ibm-plex-sans-regular">
                {author}
            </p>

        </div>
    );
}
 
export default Testimonials;