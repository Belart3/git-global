import './App.css';
import FAQ from './components/FAQ';
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
      <ReviewSection />
      <HowItWorks />
      <WhyGitGlobal />
      <NewsReport />
      <FAQ />
    </div>
  );
}

export default App;
