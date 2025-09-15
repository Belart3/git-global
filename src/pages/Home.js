import FAQ from '../components/FAQ';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import NewsReport from '../components/NewsReports';
import ReviewSection from '../components/ReviewSection';
import WhyGitGlobal from '../components/WhyGitGlobal'
import CheckEligibility from '../components/CheckEligibility'
import { Helmet } from "react-helmet";

const Home = () => {
    return (  
        <>
            <Helmet>
                <title>Best US Immigration Consultant in Iowa | GIT Global</title>
                <meta
                name="description"
                content="Best US immigration consultant in Iowa. GIT Global guides you through visas, green cards, and immigration with expert support for your journey."
                />
                <link rel="canonical" href="https://gitsiowa.com/" />
            </Helmet>
            <div className="w-full bg-Background">
                <Header />
                <div id='review-section' className=' pt-16 lg:pt-36'>
                    <ReviewSection />
                </div>
                <div id='how-it-works' className=' pt-[88px] lg:pt-36'>
                    <HowItWorks />
                </div>
                <div id='why-git-global' className=' pt-[88px] lg:pt-36'>
                    <WhyGitGlobal />
                </div>
                <div id='news-report' className=' pt-[88px] lg:pt-36'>
                    <NewsReport />
                </div>
                <div id='FAQ' className=' pt-[88px] lg:pt-36'>
                    <FAQ />
                </div>
                <CheckEligibility />
            </div>
        </>
    );
}
export default Home;