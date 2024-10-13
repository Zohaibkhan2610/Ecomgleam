import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import About from './Components/section/About';
import Connection from './Components/Workspace/Connection';
import Footer from './Components/section/Footer';

function App() {
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
