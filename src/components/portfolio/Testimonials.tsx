import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Adewale Azeez",
      role: "Software Engineer", 
      company: "",
      content: "Francis's strategic vision and execution capabilities are exceptional. He transformed our product roadmap and delivered results that exceeded all expectations. His ability to balance user needs with business objectives is remarkable.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b6d6b375?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Kolawole Bolaji",
      role: "CEO",
      company: "Intrasoft",
      content: "Working with Francis was a game-changer for our logistics platform. His PRD for operations and platform building expertise helped us create a delivery system that exceeded our expectations. His understanding of complex operational workflows is outstanding.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Moses Adebayo",
      role: "Software Developer",
      company: "",
      content: "Francis's collaborative approach and respect for design thinking made our partnership incredibly productive. He understands the importance of user experience and fights for quality at every step.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            What People Say
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover shadow-lg"
                        />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                          "{testimonial.content}"
                        </p>
                        
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-blue-600 font-medium">{testimonial.role}</p>
                          {testimonial.company && (
                            <p className="text-gray-600">{testimonial.company}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
