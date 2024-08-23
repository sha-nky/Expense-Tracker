import React, {useState, useEffect} from "react"

import { getAllTestimonials } from "./api/apiCalls";

function App() {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      // setLoading(true);
      const data = await getAllTestimonials();
      if (data.error) {
        // setError(true);
        console.log(data.error)
      } else {
        setTestimonials(data);
        console.log(data);
        // animationDurationRef.current = data.length * 3.5;
      }
      // setLoading(false);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="w-full h-[100vh]">
      <p className='text-center text-5xl text-red-500'>HELLOOO !!!</p>
    </div>
  )
}

export default App
