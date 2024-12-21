import News from "../components/News";
import NewsHeader from "../components/NewsHeader";
import SectionHeading from '../components/SectionHeading'
import { PageData } from "../data/TrumpAndImmigration";
import NewsIntroduction from "../components/NewsIntrodction";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";

const TrumpAndImmigration = () => {
    const currentPage = 4;
    useEffect(() => {
        document.title = 'GIT Global -  Arising questions about the future of U.S. immigration policy';
    }, []);
    return (  
        <div className="w-full bg-Background pt-[88px] lg:pt-36">
            <div className="flex flex-col gap-10 lg:gap-16">
                <div className="mx-4 md:mx-8 max-w-screen-lg lg:mx-auto px-0 lg:px-20 xl:px-0">
                    <NewsHeader 
                    title="Trump’s Victory and the Future of U.S. Immigration: What You Need to Know"
                    date="November 11, 2024"
                    subtitle=" Arising questions about the future of U.S. immigration policy"
                    />
                </div>
                <div>
                    <div className="flex flex-col gap-10 lg:gap-16  mx-4 md:mx-8 max-w-screen-lg 2xl:px-0 lg:mx-auto px-0 lg:px-20 xl:px-0 mb-32">
                        <div className="w-full bg-news-4 bg-center lg:bg-top bg-cover bg-no-repeat h-80 lg:h-500"></div>
                        <div className="flex flex-col gap-14 lg:gap-20">
                            {
                                PageData.introduction.map((data) => (
                                    <div className="flex flex-col gap-8 lg:gap-10" key={data.id}>
                                        <h3 className="swear-text text-2xl/28 lg:text-32/38 text-B500 capitalize">
                                        {data.heading}
                                        </h3>
                                        {
                                            data.text.map((data)=> (
                                                <NewsIntroduction subtitle={data.subtitle} body={data.body} key={data.id}/>  
                                            ))
                                        }
                                    </div> 
                                ))
                            } 
                            {
                                PageData.potentialChanges.map((section) => (
                                    <div key={section.id} className="flex flex-col gap-8 lg:gap-10">
                                        <h3 className="swear-text text-2xl/28 lg:text-32/38 text-B500 capitalize">{section.heading}</h3>
                                        <div className="flex flex-col">
                                            <ol className="list-decimal space-y-8">
                                                {section.procedures.map((procedure) => (
                                                    <li className="ibm-plex-sans-bold text-base lg:text-20/30 text-B400 space-y-8 ms-8" key={procedure.id}>
                                                        <p className="ibm-plex-sans-bold text-base lg:text-20/30 text-B400">
                                                            {procedure.title}
                                                        </p>
                                                        <ul className="flex flex-col list-disc space-y-8">
                                                            {procedure.steps.map((step) => (
                                                            <li key={step.id} className="text-base lg:text-20/30 ibm-plex-sans-regular text-B400">                                  {step.text}
                                                                <NewsIntroduction subtitle={step.subtitle} body={step.body} key={step.id}/>  
                                                            </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="flex flex-col gap-16">
                                <div className="flex flex-col gap-14 lg:gap-20">
                                    {
                                        PageData.afterApplication.map((data) => (
                                            <div className="flex flex-col gap-8 lg:gap-10" key={data.id}>
                                                <h3 className="swear-text text-2xl/28 lg:text-32/38 text-B500 capitalize">
                                                {data.heading}
                                                </h3>
                                                <p className="ibm-plex-sans-regular text-base lg:text-20/30 font-normal text-B400">
                                                {data.subheading}
                                                </p>
                                                {
                                                    data.text.map((data)=> (
                                                        <NewsIntroduction subtitle={data.subtitle} body={data.body} key={data.id}/>  
                                                    ))
                                                }
                                            </div> 
                                        ))
                                    }
                                </div>
                                <div className="flex flex-col gap-8  p-5 lg:p-10 border border-B75 bg-white items-center justify-center">
                                    <h3 className="swear-text text-2xl/28 lg:text-32/38 text-B400 text-start lg:text-center">
                                        Need assistance with your immigration case?
                                    </h3>
                                    <p className="ibm-plex-sans-regular text-base lg:text-20/30 font-normal text-B400 text-start lg:text-center">
                                        Click the  
                                        <Link to="/form">
                                            <span className="text-BL500 font-bold ibm-plex-sans-bold text-base lg:text-20/30 px-1">
                                                Get Started
                                            </span>
                                        </Link>
                                            button to begin working with GIT Global and prepare for the path ahead!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="flex flex-col mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl 2xl:px-20 2xl:mx-auto gap-y-10 xl-gap-16">
                        <SectionHeading title="other News & Reports" src="images/notification.svg"/>
                        <News 
                        currentPage={currentPage}
                        />
                    </section>
                </div>
            </div>

        </div>
    );
}
 
export default TrumpAndImmigration;