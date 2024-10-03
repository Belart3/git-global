import './App.css';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import NewsReport from './components/NewsReports';
import ReviewSection from './components/ReviewSection';
import WhyGitGlobal from './components/WhyGitGlobal';
import './index.css';

function App() {
  return (
    <div className='w-full bg-Background'>
      <Header />
      <div id='review-section'>
        <ReviewSection />
      </div>
      <div id='how-it-works'>
        <HowItWorks />
      </div>
      <div id='why-git-global'>
        <WhyGitGlobal />
      </div>
      <div id='news-report'>
        <NewsReport />
      </div>
      <div id='FAQ'>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
