import './App.css';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import NewsReport from './components/NewsReports';
import ReviewSection from './components/ReviewSection';
import WhyGitGlobal from './components/WhyGitGlobal';
import CheckEligibility from './components/CheckEligibility';
import './index.css';

function App() {
  return (
    <div className='w-full bg-Background'>
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
      <Footer />
    </div>
  );
}

export default App;