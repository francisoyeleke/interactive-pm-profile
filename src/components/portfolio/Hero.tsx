
import { useEffect, useState } from "react";
import { ChevronDown, Sparkles, Target, Users } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-32 right-32 w-80 h-80 bg-amber-300/15 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-yellow-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-pulse" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-400/5 to-amber-400/5 rounded-full filter blur-3xl opacity-50"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 -z-5">
        <Sparkles className="absolute top-32 left-1/4 text-yellow-400/20 w-6 h-6 animate-pulse" style={{ animationDelay: "1s" }} />
        <Target className="absolute top-1/3 right-1/4 text-yellow-500/20 w-8 h-8 animate-pulse" style={{ animationDelay: "3s" }} />
        <Users className="absolute bottom-1/3 left-1/5 text-amber-400/20 w-7 h-7 animate-pulse" style={{ animationDelay: "5s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-medium">Product Manager</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-4">Oyeleke</span>
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Francis
              </span>
            </h1>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            As a product manager, I serve as the bridge between building the right product and building it exceptionally well, aligning solutions with user needs and business objectives while fostering collaboration across teams to transform ideas into impactful outcomes.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-yellow-400/25"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400/30 rounded-full mb-2 flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown 
            size={24} 
            className="text-yellow-400/60 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};
