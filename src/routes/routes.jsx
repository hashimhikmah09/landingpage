
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "../pages/landingpage";
import Footer from '../components/footer/footer';
import Blog from '../components/CompanySection/blog';
import OurTeam from '../components/CompanySection/team';
import History from '../components/CompanySection/history';


const Navigations = () => {
 
    return (
    <Router>

        {/* Navbar links*/}
        <Navbar />
 
         {/* pages */}
         <Routes> 
             {/* Desktop specific */}
             <Route path='/' element={<LandingPage />} />
             <Route path="/blog" element={<Blog />} />
             <Route path="/our-team" element={<OurTeam />} />
             <Route path="/history" element={<History />} /> 
             
         </Routes>
           
  
          {/* footer */}
         <Footer /> 
      </Router>
    );
  };
  
export default Navigations; 