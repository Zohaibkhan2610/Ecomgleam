import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import About from './Components/section/About';
import Footer from './Components/section/Footer';
import './section.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
   
    });
  }, []);
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/About' Component={About}/>
      </Routes>
      <Footer/>
      </Router>
    </>
      
  );
}

export default App;
