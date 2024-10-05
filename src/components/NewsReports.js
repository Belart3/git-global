import { NewsData } from "../data/News";
import News from "./News";
import SectionHeading from "./SectionHeading";

const NewsReport = ({}) => {
    return (  
        <section className="flex flex-col mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl 2xl:px-0 2xl:mx-auto mb-32 gap-y-10 xl-gap-16">
            <SectionHeading title="News & Reports" src="images/notification.svg"/>

            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-8">
                {
                    NewsData.map((data) => (
                        <News key={data.id} date={data.date} src={data.src} paragraph={data.paragraph} href={data.href}/>
                    ))
                }
            </div>
        </section>
    );
}
 
export default NewsReport;