import News from "../components/News";
import NewsHeader from "../components/NewsHeader";
import SectionHeading from '../components/SectionHeading'
import { NewsData } from "../data/News";
import { PageData } from "../data/NewsPage";


const NewsPage = () => {
    return (  
        <div className="w-full bg-Background">
            <NewsHeader 
                title="Pop-up lomo pack 3-moon taxidermy"
                date="August 1, 2024"
                subtitle="Pop-up lomo pack 3-moon taxidermy"
            />

            <div className="flex flex-col gap-10 lg:gap-16  mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl 2xl:px-0 2xl:mx-auto mb-32">
                <div className="w-full bg-news-1 bg-center bg-cover bg-no-repeat h-80 lg:h-500"></div>

                <div className="flex flex-col gap-6">
                    {
                        PageData.map((data) => (
                            <p className="ibm-plex-sans-regular text-B300 text-lg lg:text-xl" key={data.id}>
                                {data.paragraph}
                            </p>
                        ))
                    }
                </div>
            </div>

            <section className="flex flex-col mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl 2xl:px-0 2xl:mx-auto mb-32 gap-y-10 xl-gap-16">
                <SectionHeading title="other News & Reports" src="images/notification.svg"/>
                <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-8">
                    {
                        NewsData.map((data) => (
                            <News key={data.id} date={data.date} src={data.src} paragraph={data.paragraph} href={data.href}/>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}
 
export default NewsPage;