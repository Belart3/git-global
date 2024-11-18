const Testimonials = ({title, testimony, author}) => {
    return (  
        <div className="
        border border-BL100 
        w-90 max-w-xl
        self-start even:self-end
        lg:w-full
        lg:row-span-5 lg:col-span-1 lg:even:row-start-2 lg:row-start-1
        py-10 px-6">

            <h4 className="mb-4 ibm-plex-sans-bold text-base lg:text-20/30">
                {title}
            </h4>

            <div className="flex flex-row mb-8">
                <img src="images/green-star.svg" alt="" className="size-7"/>
                <img src="images/green-star.svg" alt="" className="size-7"/>
                <img src="images/green-star.svg" alt="" className="size-7"/>
                <img src="images/green-star.svg" alt="" className="size-7"/>
                <img src="images/green-star.svg" alt="" className="size-7"/>
            </div>

            <p className="text-B400 text-sm/5 lg:text-sm/5 mb-10 ibm-plex-sans-regular">
                {testimony}
            </p>

            <p className=" ibm-plex-sans-regular text-sm/5 lg:text-sm/5 text-B500">
                {author}
            </p>

        </div>
    );
}
 
export default Testimonials;