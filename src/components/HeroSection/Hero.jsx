import DatabizIcon from "../../assets/images/client-databiz.svg";
import AudiophileIcon from "../../assets/images/client-audiophile.svg";
import MeetIcon from "../../assets/images/client-meet.svg";
import MakerIcon from "../../assets/images/client-maker.svg"; 
import HeroDesktop from "../../assets/images/image-hero-desktop.png";
import HeroMobile from "../../assets/images/image-hero-mobile.png";

const Hero = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-12 md:gap-16">
        
        {/* Right Visual (Mobile First) */}
        <div className="order-1 md:order-2 flex-1 flex justify-center">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">  
            {/* Mobile Image */}
            <img
              src={HeroMobile}
              alt="Hero Mobile"
              className="object-contain w-full h-auto max-h-[350px] md:hidden"
            />

            {/* Desktop Image */}
            <img
              src={HeroDesktop}
              alt="Hero Desktop"
              className="object-contain w-full h-auto max-h-[500px] hidden md:block"
            />
          </div>
        </div>

        {/* Left Content */} 
        <div className="order-2 md:order-1 flex-1 space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Make remote work
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
            Get your team in sync, no matter your location. Streamline processes, create team rituals, 
            and watch productivity soar.
          </p>

          <div>
            <button className="border border-gray-600 px-6 py-3 rounded-xl bg-foreground text-background hover:bg-black hover:text-white text-base transition-colors">
              Learn more
            </button>
          </div> 
 
           {/* Partner Logos */}
           <div className="flex items-center justify-center md:justify-start gap-4 pt-6 flex-nowrap overflow-x-auto">
              <img src={DatabizIcon} alt="Databiz" className="h-6 w-auto flex-shrink-0" />
              <img src={AudiophileIcon} alt="Audiophile" className="h-6 w-auto flex-shrink-0" />
              <img src={MeetIcon} alt="Meet" className="h-6 w-auto flex-shrink-0" />
              <img src={MakerIcon} alt="Maker" className="h-6 w-auto flex-shrink-0" />
           </div>
        </div>
      </div>
    </main>  
  )
}

export default Hero;
