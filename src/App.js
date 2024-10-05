import './App.css';
import Footer from './components/Footer';
import CheckEligibility from './components/CheckEligibility';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import './index.css';
import { BrowserRouter as Router, Route, Switch,  useLocation } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import React, { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import ScrollToSection from './components/ScrollToSection';


function App() {

  return (
    <Router>
      <div className='w-full bg-Background'>
        <Navbar />
        <ScrollToTop />
        <ScrollToSection />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/news">
              <NewsPage />
            </Route>
          </Switch>
        </div>
        <CheckEligibility />
        <Footer />
      </div>
    </Router>
  );
}

export default App;