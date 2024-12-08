import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/auth/Signup.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Careers from "./pages/Careers.jsx";
import AppStore from "./pages/AppStore.jsx";
import Community from "./pages/Community.jsx";

function App() {
  return (
    <div className="no-scrollbar">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/app-store" element={<AppStore />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
