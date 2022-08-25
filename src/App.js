import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Product';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
   <>
   <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/services" element={<Services/>} exact />
      <Route path="/products" element={<Products/>} exact />
      <Route path="/sign-up" element={<SignUp/>} exact />
    </Routes>
    </Router>
   </>
  );
}

export default App;
