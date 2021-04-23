import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>

          <Route path="/about">
            <About/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>
          
          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
