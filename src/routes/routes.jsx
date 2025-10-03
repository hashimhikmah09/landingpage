
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "../pages/landingpage";


const Navigations = () => {
 
    return (
    <Router>

        {/* Navbar links*/}
        <Navbar />
 
         {/* pages */}
         <Routes>
             {/* Desktop specific */}
             <Route path='/' element={<LandingPage />} />
            
         </Routes>
         
 
         {/* footer */}
         {/* <Footer />  */}
      </Router>
    );
  };
  
export default Navigations; 