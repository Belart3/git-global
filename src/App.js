import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './index.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Route path="/family-immigration">
              <GuideToFamlyImmigration />
            </Route>
            {/* path to the Guide to how to apply for dv lottery page */}
            <Route path="/understanding-dv-lottery">
              <UnderstandingDvLottery />
            </Route>
            {/* path to the Guide to how to apply for student visa page */}
            <Route path="/student-visa">
              <StudentVisa />
            </Route>
            {/*  */}
            <Route path="/trump-and-immigration">
              <TrumpAndImmigration />
            </Route>
            {/*  */}
            <Route path="/k1-fiance-visa">
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