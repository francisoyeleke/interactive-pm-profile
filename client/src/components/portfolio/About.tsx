
import { useEffect, useRef, useState } from "react";
import francisBg from "@/assets/images/white-francis-removebg-preview.png";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-black to-yellow-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={francisBg}
                  alt="Francis Background"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-4">
                Building Products for Humans
              </h3>

              <p className="text-lg text-gray-800 leading-relaxed">
                I sit at the intersection of product, growth, and execution — translating user insights into clear messaging, go-to-market strategies, and campaigns that drive real adoption.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed">
                I’ve led feature launches, run growth experiments, managed social media and email campaigns, and executed offline activations across Lagos, contributing to measurable improvements in user acquisition, retention, and revenue.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed">
                I’m especially strong in early-stage and scaling environments where clarity, speed, and experimentation matter.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600">5+</div>
                  <div className="text-gray-800">Products Launched</div>
                </div>
                <div className="text-center p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600">$100K+</div>
                  <div className="text-gray-800">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
