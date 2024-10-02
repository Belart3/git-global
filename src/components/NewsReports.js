import { NewsData } from "../data/News";
import News from "./News";
import SectionHeading from "./SectionHeading";

const NewsReport = ({}) => {
    return (  
        <section className="flex flex-col px-4 md:px-8 lg:px-20 max-w-screen-2xl 2xl:px-0 mx-auto mb-32 gap-y-10 xl-gap-16">
            <SectionHeading title="News & Reports" src="images/notification.svg"/>

            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-8">
                {
                    NewsData.map((data) => (
                        <News key={data.id} date={data.date} src={data.src} paragraph={data.paragraph}/>
                    ))
                }
            </div>
        </section>
    );
}
 
export default NewsReport;