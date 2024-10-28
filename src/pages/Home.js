import FAQ from '../components/FAQ';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import NewsReport from '../components/NewsReports';
import ReviewSection from '../components/ReviewSection';
import WhyGitGlobal from '../components/WhyGitGlobal'
import CheckEligibility from '../components/CheckEligibility'
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = 'GIT Global';
    }, []);
    return (  
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
    );
}
 
export default Home;