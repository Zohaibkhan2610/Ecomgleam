import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import Footer from './Components/section/Footer';
import './section.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import AboutMain from './Components/section/About/AboutMain';
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
        <Route path='/About' Component={AboutMain}/>
      </Routes>
      <Footer/>
      </Router>
    </>
      
  );
}

export default App;
