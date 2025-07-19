
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--deep-violet) 0%, var(--eerie-black) 50%, var(--violet) 100%)' }}>
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ backgroundColor: 'var(--bright-lavender)' }}></div>
        <div className="absolute top-32 right-32 w-80 h-80 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse" style={{ backgroundColor: 'var(--lavender-indigo)', animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ backgroundColor: 'var(--bright-lavender)', animationDelay: "4s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full filter blur-3xl opacity-10" style={{ background: 'linear-gradient(to right, var(--lavender-indigo), var(--bright-lavender))' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 -z-5">
        <Sparkles className="absolute top-32 left-1/4 w-6 h-6 animate-pulse opacity-30" style={{ color: 'var(--bright-lavender)', animationDelay: "1s" }} />
        <Target className="absolute top-1/3 right-1/4 w-8 h-8 animate-pulse opacity-25" style={{ color: 'var(--lavender-indigo)', animationDelay: "3s" }} />
        <Users className="absolute bottom-1/3 left-1/5 w-7 h-7 animate-pulse opacity-30" style={{ color: 'var(--bright-lavender)', animationDelay: "5s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-block px-6 py-3 rounded-full mb-8 backdrop-blur-sm" style={{ backgroundColor: 'rgba(189, 147, 239, 0.15)', border: '1px solid rgba(189, 147, 239, 0.3)' }}>
              <span className="text-sm font-medium modern-font" style={{ color: 'var(--bright-lavender)' }}>Product Manager</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight luxury-font">
              <span className="bg-gradient-to-r bg-clip-text text-transparent whitespace-nowrap" style={{ backgroundImage: 'linear-gradient(to right, var(--bright-lavender), var(--magnolia), var(--lavender-indigo))' }}>
                Oyeleke Francis
              </span>
            </h1>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl mb-12 max-w-5xl mx-auto leading-relaxed font-light modern-font" style={{ color: 'var(--magnolia)' }}>
            As a product manager, I serve as the bridge between building the right product and building it exceptionally well, aligning solutions with user needs and business objectives while fostering collaboration across teams to transform ideas into impactful outcomes.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="group px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl modern-font text-white"
              style={{ 
                background: 'linear-gradient(to right, var(--lavender-indigo), var(--bright-lavender))',
                boxShadow: '0 10px 40px rgba(163, 70, 230, 0.3)'
              }}
            >
              <span className="flex items-center gap-2">
                View My Work
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 modern-font backdrop-blur-sm"
              style={{ 
                borderColor: 'var(--bright-lavender)', 
                color: 'var(--bright-lavender)',
                backgroundColor: 'rgba(189, 147, 239, 0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(189, 147, 239, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(189, 147, 239, 0.1)'}
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
