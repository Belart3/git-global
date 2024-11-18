import News from "./News";
import SectionHeading from "./SectionHeading";

const NewsReport = () => {
    const currentPage = 0;
    return (  
        <section className="flex flex-col mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl 2xl:mx-auto gap-y-10 xl-gap-16">
            <SectionHeading title="News & Reports" src="images/notification.svg"/>
            <News 
            currentPage={currentPage}
            />
        </section>
    );
}
 
export default NewsReport;