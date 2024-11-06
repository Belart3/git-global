import NewsHeader from "../components/NewsHeader";
import { PageData } from "../data/UnderstandingDvLottery";
import NewsIntroduction from "../components/NewsIntrodction";
import News from "../components/News";
import SectionHeading from '../components/SectionHeading'
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";

const UnderstandindDvLottery = ( ) => {
    const currentPage = 2;
    useEffect(() => {
        document.title = 'GIT Global - How to Apply for the DV Lottery';
    }, []);
    return(
        <div className="w-full bg-Background pt-[88px] lg:pt-36">
            <div className="flex flex-col gap-10 lg:gap-16">
                <div className="mx-4 md:mx-8 max-w-screen-lg lg:mx-auto">
                    <NewsHeader 
                    title="How to Study in the U.S.: Your Guide to Getting a Student Visa"
                    date="October 30, 2024"
                    subtitle="Step-by-Step Guide to Applying for a U.S. Student Visa"
                    />
                </div>
                <div className="">
                    <div className="flex flex-col gap-10 lg:gap-16  mx-4 md:mx-8 max-w-screen-lg 2xl:px-0 lg:mx-auto mb-32">

                        <div className="w-full bg-news-2 bg-center lg:bg-top bg-cover bg-no-repeat h-80 lg:h-500"></div>
                        
                        <div className="flex flex-col gap-14 lg:gap-20">
                            {
                                PageData.introduction.map((section) => (
                                    <div className="flex flex-col gap-8 lg:gap-10" key={section.id}>
                                        <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">
                                            {section.heading}
                                        </h3>
                                        {
                                            section.text.map((data)=> (
                                                <NewsIntroduction subtitle={data.subtitle} body={data.body} key={data.id}/>    
                                            ))
                                        }
                                    </div> 
                                ))
                            }
                            {
                                PageData.bridge.map((section) => (
                                    <div className="flex flex-col gap-8 lg:gap-10" key={section.id}>
                                        <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">
                                            {section.heading}
                                        </h3>
                                        <p className="ibm-plex-sans-regular text-lg lg:text-20/30 font-normal text-B400">
                                            {section.subheading}
                                        </p>
                                        <div className="flex flex-col gap-8 lg:gap-10">
                                            {
                                                section.text.map((section) => (
                                                    <div key={section.id}>
                                                        <li className="text-lg lg:text-20/30 ibm-plex-sans-bold text-B400 ms-4 list-disc">
                                                            {section.subtitle}
                                                        </li>
                                                        <p className="ibm-plex-sans-regular text-lg lg:text-20/30 font-normal text-B400">
                                                            {section.body}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                PageData.howToApply.map((section) => (
                                    <div key={section.id} className="flex flex-col gap-8 lg:gap-10">
                                        <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">{section.heading}</h3>
                                        <p className="ibm-plex-sans-regular text-20/30 font-normal text-B400">
                                            {section.subheading}
                                        </p>
                                        {section.procedures.map((procedure) => (
                                            <div key={procedure.id} className="flex flex-col">
                                                <h4 className="ibm-plex-sans-bold text-lg lg:text-20/30 text-B400">
                                                    {procedure.title}
                                                </h4>
                                                <ul className="flex flex-col list-disc space-y-2">
                                                    {procedure.steps.map((steps) => (
                                                        <li key={steps.id} className="text-lg lg:text-20/30 ibm-plex-sans-regular text-B400 ms-8 lg:ms-10">
                                                            {steps.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            }
                            {
                                PageData.afterApplication.map((section) => (
                                    <div key={section.id} className="flex flex-col gap-8 lg:gap-10">
                                        <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">{section.heading}</h3>
                                        {
                                            section.subheading &&
                                            <p className="ibm-plex-sans-regular text-20/30 font-normal text-B400">
                                                {section.subheading}
                                            </p>
                                        }
                                        {section.procedures.map((procedure) => (
                                            <div key={procedure.id} className="flex flex-col">
                                                {
                                                    procedure.title &&
                                                    <h4 className="ibm-plex-sans-bold text-lg lg:text-20/30 text-B400">
                                                        {procedure.title}
                                                    </h4>
                                                }
                                                <ul className="flex flex-col list-disc space-y-2">
                                                    {procedure.steps.map((steps) => (
                                                        <li key={steps.id} className="text-lg lg:text-20/30 ibm-plex-sans-regular text-B400 ms-8 lg:ms-10">
                                                            {steps.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            }
                            <div className="flex flex-col gap-16">
                                {
                                    PageData.howGitHelps.map((section) => (
                                        <div className="flex flex-col gap-8 lg:gap-10" key={section.id}>
                                            <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">
                                                {section.heading}
                                            </h3>
                                            {
                                                section.text.map((data)=> (
                                                    <NewsIntroduction subtitle={data.subtitle} body={data.body} key={data.id}/>    
                                                ))
                                            }
                                        </div> 
                                    ))
                                }
                                <div className="flex flex-col gap-8  p-5 lg:p-10 border border-B75 bg-white items-center justify-center">
                                    <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">
                                        Want to take your chance at winning a Green Card?
                                    </h3>
                                    <p className="ibm-plex-sans-regular text-20/30 font-normal text-B400">
                                        Click the  
                                        <Link to="/form">
                                            <span className="text-BL500 font-bold ibm-plex-sans-bold text-20/30 px-1">
                                                Get Started
                                            </span>
                                        </Link>
                                        button to begin your DV Lottery application with GIT Global!
                                    </p>
                                </div>
                                {
                                    PageData.conclusion.map((section) => (
                                        <div className="flex flex-col gap-8 lg:gap-10" key={section.id}>
                                            <h3 className="swear-text text-28/34 lg:text-32/38 text-B500 capitalize">
                                                {section.heading}
                                            </h3>
                                            {
                                                section.text.map((data)=> (
                                                    <NewsIntroduction subtitle={data.subtitle} body={data.body} key={data.id}/>    
                                                ))
                                            }
                                        </div> 
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <section className="flex flex-col mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl 2xl:px-0 2xl:mx-auto gap-y-10 xl-gap-16">
                        <SectionHeading title="other News & Reports" src="images/notification.svg"/>
                        <News 
                        currentPage={currentPage}                        />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default UnderstandindDvLottery;