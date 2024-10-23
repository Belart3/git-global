import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './index.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import ScrollToTop from './components/ScrollToTop';
import ScrollToSection from './components/ScrollToSection';
import FormPage from './pages/FormPage';


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
            {/* path to the news page */}
            <Route path="/news">
              <NewsPage />
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