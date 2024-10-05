import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
      </Router>
    </>
      
  );
}

export default App;
