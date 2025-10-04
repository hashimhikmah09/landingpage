import Blog from "../components/CompanySection/blog";
import OurTeam from "../components/CompanySection/team";
import History from "../components/CompanySection/history"; 
import Hero from "../components/HeroSection/Hero";



const LandingPage = () => {
    return ( 
        <div className="max-w-[1440px] mx-auto">
            <div className="">
                <Hero />
                <Blog />
                <History />
                <OurTeam />
            </div>
             
        </div >
    );  
}  
 
export default LandingPage;