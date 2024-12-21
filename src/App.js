import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToSection from './components/ScrollToSection';
import FormPage from './pages/FormPage';
import GuideToFamlyImmigration from './pages/GuideToFamilyImmigration';
import UnderstandingDvLottery from './pages/UnderstandingDvLottery';
import StudentVisa from './pages/StudentVisa';
import TrumpAndImmigration from './pages/TrumpAndImmigration';
import K1Fiance from './pages/K1Fiance';


function App() {

  return (
    <Router>
      <div className='w-full bg-Background'>
        <Navbar />
        <ScrollToTop />
        <ScrollToSection />
        <div>
          <Switch>
            {/* path to the home page */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* path to the Guide to family immigration page */}
            <Route path="/how-to-bring-your-family-to-the-u-s-a-guide-to-family-based-immigration">
              <GuideToFamlyImmigration />
            </Route>
            {/* path to the Guide to how to apply for dv lottery page */}
            <Route path="/how-to-win-a-u-s-green-card-understanding-the-dv-lottery">
              <UnderstandingDvLottery />
            </Route>
            {/* path to the Guide to how to apply for student visa page */}
            <Route path="/how-to-study-in-the-u-s-your-guide-to-getting-a-student-visa">
              <StudentVisa />
            </Route>
            {/*  */}
            <Route path="/trumps-victory-and-the-future-of-u-s-immigration-what-you-need-to-know">
              <TrumpAndImmigration />
            </Route>
            {/*  */}
            <Route path="/understanding-the-k-1-fiancé-visa-bringing-your-fiancé-to-the-u-s">
              <K1Fiance />
            </Route>
            {/* path to the form page */}
            <Route path="/form">
              <FormPage />
            </Route>

          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;