import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='witunite/ ' element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
