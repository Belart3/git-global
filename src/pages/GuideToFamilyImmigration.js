import News from "../components/News";
import NewsHeader from "../components/NewsHeader";
import SectionHeading from '../components/SectionHeading'
import { useEffect } from "react";
import { PageData } from "../data/FamilyImmigration";
import NewsIntroduction from "../components/NewsIntrodction";
import { Link } from "react-router-dom/cjs/react-router-dom";

const GuideToFamlyImmigration = () => {
    const currentPage = 1;
    useEffect(() => {
        document.title = 'GIT Global - Guide To Family Immigration';
    }, []);
    return (  
        <div className="w-full bg-Background pt-[88px] lg:pt-36">
            <div className="flex flex-col gap-10 lg:gap-16">
                <div className="mx-4 md:mx-8 max-w-screen-lg lg:mx-auto">
                    <NewsHeader 
                    title="How to Study in the U.S.: Your Guide to Getting a Student Visa"
                    date="October 30, 2024"
                    subtitle="Step-by-Step Guide to Applying for a U.S. Student Visa"
                    />
                </div>
                <div>
                    <div className="flex flex-col gap-10 lg:gap-16  mx-4 md:mx-8 max-w-screen-lg 2xl:px-0 lg:mx-auto mb-32">
                        <div className="w-full bg-news-1 bg-center lg:bg-top bg-cover bg-no-repeat h-80 lg:h-500"></div>

                        <div className="flex flex-col gap-14 lg:gap-20">
                            <div className="flex flex-col gap-8 lg:gap-10">
                                <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">
                                    {PageData.introduction.heading}
                                </h3>
                                {
                                    PageData.introduction.text.map((data)=> (
                                        <NewsIntroduction subtitle={data.subtitle} body={data.body} key={data.id}/>    
                                    ))
                                }
                            </div>  
                            <div className="flex flex-col gap-10"> 
                                {
                                    PageData.body.map((section) => (
                                        <div key={section.id} className="flex flex-col gap-8 lg:gap-10">
                                            <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">{section.heading}</h3>
                                            {section.questions.map((question) => (
                                                <div key={question.title} className="flex flex-col">
                                                    <h4 className="ibm-plex-sans-bold text-lg lg:text-20/30 text-B400">
                                                        {question.title}
                                                    </h4>
                                                    <ul className="flex flex-col list-disc space-y-2">
                                                        {question.answer.map((answer) => (
                                                            <li key={answer.id} className="text-lg lg:text-20/30 ibm-plex-sans-regular text-B400 ms-8 lg:ms-10">
                                                                {answer.text}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="flex flex-col gap-16">
                                <div className="flex flex-col gap-8 lg:gap-10">
                                    <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">
                                        {PageData.conclusion.heading}
                                    </h3>
                                    {
                                        PageData.conclusion.text.map((data)=> (
                                            <NewsIntroduction subtitle={data.subtitle} body={data.body} key={data.id}/>    
                                        ))
                                    }
                                </div> 
                                <div className="flex flex-col gap-8  p-5 lg:p-10 border border-B75 bg-white items-center justify-center">
                                    <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">
                                        Ready to start your family’s immigration process?
                                    </h3>
                                    <p className="ibm-plex-sans-regular text-20/30 font-normal text-B400">
                                        Click the  
                                        <Link to="/form">
                                            <span className="text-BL500 font-bold ibm-plex-sans-bold text-20/30 px-1">
                                                Get Started
                                            </span>
                                        </Link>
                                         button to begin your application with GIT Global today!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="flex flex-col mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl 2xl:px-0 2xl:mx-auto gap-y-10 xl-gap-16">
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
 
export default GuideToFamlyImmigration;