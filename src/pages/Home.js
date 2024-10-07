import FAQ from '../components/FAQ';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import NewsReport from '../components/NewsReports';
import ReviewSection from '../components/ReviewSection';
import WhyGitGlobal from '../components/WhyGitGlobal'
import CheckEligibility from '../components/CheckEligibility'

const Home = () => {
    return (  
        <div className="w-full bg-Background">
            <Header />
            <div id='review-section' className=' pt-20 lg:pt-24'>
                <ReviewSection />
            </div>
            <div id='how-it-works' className=' pt-20 lg:pt-24'>
                <HowItWorks />
            </div>
            <div id='why-git-global' className=' pt-20 lg:pt-24'>
                <WhyGitGlobal />
            </div>
            <div id='news-report' className=' pt-20 lg:pt-24'>
                <NewsReport />
            </div>
            <div id='FAQ' className=' pt-20 lg:pt-24'>
                <FAQ />
            </div>
            <CheckEligibility />
        </div>
    );
}
 
export default Home;