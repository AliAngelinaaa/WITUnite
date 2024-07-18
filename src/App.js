import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Mtc from "./pages/mtc";
import Services from "./pages/services";
import ContactUs from "./pages/contactus";

function App() {
  return (
    <Router basename="/witunite">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mtc' element={<Mtc />} />
        {/* <Route path='/services' element={<Services />} /> */}
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
