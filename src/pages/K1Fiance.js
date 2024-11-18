import News from "../components/News";
import NewsHeader from "../components/NewsHeader";
import SectionHeading from '../components/SectionHeading'
import { PageData } from "../data/K1Fiance";
import NewsIntroduction from "../components/NewsIntrodction";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";

const K1Fiance = () => {
    const currentPage = 5;
    useEffect(() => {
        document.title = 'GIT Global - All you need to know about the  K-1 Fiancé Visa';
    }, []);
    return (  
        <div className="w-full bg-Background pt-[88px] lg:pt-36">
            <div className="flex flex-col gap-10 lg:gap-16">
                <div className="mx-4 md:mx-8 max-w-screen-lg lg:mx-auto px-0 lg:px-20 xl:px-0">
                    <NewsHeader 
                    title="Understanding the K-1 Fiancé Visa: Bringing Your Fiancé to the U.S."
                    date="October 30, 2024"
                    subtitle="All you need to know about the  K-1 Fiancé Visa"
                    />
                </div>
                <div>
                    <div className="flex flex-col gap-10 lg:gap-16  mx-4 md:mx-8 max-w-screen-lg 2xl:px-0 lg:mx-auto px-0 lg:px-20 xl:px-0 mb-32">
                        <div className="w-full bg-news-5 bg-center lg:bg-top bg-cover bg-no-repeat h-80 lg:h-500"></div>
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
                            PageData.whatIsK1Fiance.map((data) => (
                                <div className="flex flex-col gap-8 lg:gap-10" key={data.id}>
                                    <h3 className="swear-text text-2xl/28 lg:text-32/38 text-B500 capitalize">
                                    {data.heading}
                                    </h3>
                                    {
                                        data.text.map((data)=> (
                                            <p className="ibm-plex-sans-regular text-base lg:text-20/30 font-normal text-B400" key={data.id}>
                                                {data.opening}
                                            {
                                                data.bold && 
                                                <span className="ibm-plex-sans-bold text-base lg:text-20/30 text-B400 px-2">
                                                    {data.bold}
                                                </span> 
                                            }
                                                {data.normal}
                                            </p> 
                                        ))
                                    }
                                </div> 
                            ))
                            } 
                            {
                            PageData.eligibilityRequirements.map((section) => (
                                <div key={section.id} className="flex flex-col gap-8 lg:gap-10">
                                    <h3 className="swear-text text-2xl/28 lg:text-32/38 text-B500 capitalize">{section.heading}</h3>
                                    <p className="ibm-plex-sans-regular text-base lg:text-20/30 text-B400">
                                        {section.subheading}
                                    </p>
                                    <div className="flex flex-col">
                                        <ul className="list-disc">
                                            {section.requirements.map((requirement) => (
                                                <li className="ibm-plex-sans-bold text-base lg:text-20/30 text-B400 ms-8" key={requirement.id}>
                                                    <NewsIntroduction subtitle={requirement.bold} body={requirement.normal} key={requirement.id}/> 
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                            }
                            {
                            PageData.guideToK1Visa.map((guide) => (
                                <div key={guide.id} className="flex flex-col gap-8 lg:gap-10">
                                    <h3 className="swear-text text-2xl/28 lg:text-32/38 text-B500 capitalize">{guide.heading}</h3>
                                    <div className="flex flex-col">
                                        <ul className="flex flex-col gap-8">
                                            {guide.steps.map((procedure, index) => (
                                                <li className="ibm-plex-sans-bold text-base lg:text-20/30 text-B400 flex flex-col gap-8" key={procedure.id}>
                                                    <div>
                                                        <p className="ibm-plex-sans-bold text-base lg:text-20/30 text-B400">
                                                            {index + 1 }. {procedure.heading}
                                                        </p>
                                                        <p className="ibm-plex-sans-regular text-base lg:text-20/30 text-B400">
                                                            {procedure.body}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        {procedure.requiredDocuments.map((docs) => (
                                                            <ul className="list-disc" key={docs.id}>
                                                                <p className="ibm-plex-sans-bold text-base lg:text-20/30 text-B400">
                                                                {docs.heading}
                                                                </p>
                                                                {
                                                                docs.documents.map((doc) => (
                                                                <li className="ibm-plex-sans-regular text-base lg:text-20/30 text-B400 ms-8" key={doc.id}>
                                                                {doc.info}
                                                                </li>
                                                                ))
                                                                }
                                                            </ul>
                                                        ))}
                                                    </div>
                                                    {
                                                        procedure.tips.map((tip) => (
                                                            tip &&
                                                            <NewsIntroduction subtitle={tip.heading} body={tip.body} key={tip.id}/>
                                                        ))
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                            }
                            {
                            PageData.commonChallenges.map((challenges) => (
                                <div className="flex flex-col gap-8 lg:gap-10" key={challenges.id}>
                                    <h3 className="swear-text text-2xl/28 lg:text-32/38 text-B500 capitalize">
                                    {challenges.heading}
                                    </h3>
                                    {
                                        challenges.subheading &&
                                        <p className="ibm-plex-sans-regular text-base lg:text-20/30 font-normal text-B400">
                                            {challenges.subheading}
                                        </p>
                                    }
                                    {
                                        challenges.text.map((data)=> (
                                            <NewsIntroduction subtitle={data.subtitle} body={data.body} key={data.id}/>  
                                        ))
                                    }
                                </div> 
                            ))
                            }
                        </div>
                        <div className="flex flex-col gap-8 p-5 lg:p-10 border border-B75 bg-white items-center justify-center">
                            <h3 className="swear-text text-2xl/28 lg:text-32/38 text-B400 text-start">
                                Ready to bring your fiancé to the U.S. and start your life together?
                            </h3>
                            <p className="ibm-plex-sans-regular text-base lg:text-20/30 font-normal text-B400 text-start">
                                Click the  
                                <Link to="/form">
                                    <span className="text-BL500 font-bold ibm-plex-sans-bold text-base lg:text-20/30 px-1">
                                        Get Started
                                    </span>
                                </Link>
                                    button to begin your K-1 Visa application with GIT Global today!
                            </p>
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
 
export default K1Fiance;