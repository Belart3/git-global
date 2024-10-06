import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import './index.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;