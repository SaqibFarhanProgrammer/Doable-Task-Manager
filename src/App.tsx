import Home from "./sections/Home";

import "./App.css";
import Image from "./sections/Image";
import Features from "./sections/Features/Features";
import Pricing from "./sections/Pricing/Priceing";
import Footer from "./sections/Footer";
import { Route,  Routes } from "react-router-dom";
import LoginPage from "./Auth/Login";
import SignupPage from "./Auth/Signup";
import Not_Found from "./components/Not_Found";
const App = () => {
  return (
    <div className="bg-[#000] text-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Image />
              <Features />
              <Pricing />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Not_Found />} />
      </Routes>
    </div>
  );
};

export default App;
