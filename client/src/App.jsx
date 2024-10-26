import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { Overview, AboutUs, LoginPage, Profile } from "./Pages";

// import { getAllTestimonials } from "./api/apiCalls";

function App() {

  // const [testimonials, setTestimonials] = useState([]);

  // useEffect(() => {
  //   const fetchTestimonials = async () => {
  //     // setLoading(true);
  //     const data = await getAllTestimonials();
  //     if (data.error) {
  //       // setError(true);
  //       console.log(data.error)
  //     } else {
  //       setTestimonials(data);
  //       console.log(data);
  //       // animationDurationRef.current = data.length * 3.5;
  //     }
  //     // setLoading(false);
  //   };

  //   fetchTestimonials();
  // }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
