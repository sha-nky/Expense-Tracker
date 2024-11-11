import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { Overview, AboutUs, LoginPage, Profile, SignUpPage, Budget, Expense, Transactions, CarbonFootprint } from "./Pages";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ['/', '/signup'];

  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/budgets" element={<Budget />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/carbon-footprint" element={<CarbonFootprint />} />

      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

const MainRouter = () => (
  <Router>
    <App />
  </Router>
);

export default MainRouter;
