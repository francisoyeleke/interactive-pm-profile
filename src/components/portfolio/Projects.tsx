
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import zoid2 from "@/assets/images/projects/zoid-2.png";
import mbag from "@/assets/images/projects/mbag.jpeg";
import crystalveey from "@/assets/images/projects/crystalveey.png";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "Crystalveey Merch",
      description: "Crystalveey Merch is a portfolio brand that offers varieties of services, we are all about balancing worklife and enjoyment. Our utmost priority is to help busy people have fun and unwind.",
      image: crystalveey,
      challenges: ["Low mobile conversion rates", "Complex checkout process", "Poor user retention"],
      solutions: ["Streamlined checkout flow", "Personalized recommendations", "Progressive web app implementation"],
      outcomes: ["40% increase in conversions", "60% faster checkout", "4.8/5 app store rating"],
      tech: ["React Native", "Node.js", "MongoDB", "Stripe API"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "MBAG MFBank",
      description: "MBAG Microfinance Bank offers a fast track to financial independence through a range of services including micro savings, micro loans, and school-targeted loans. With a user-friendly banking app, managing money, making payments, and settling bills becomes effortless.",
      image: mbag,
      challenges: ["Complex data visualization", "Real-time updates", "Multi-tenant architecture"],
      solutions: ["Custom chart library", "WebSocket integration", "Microservices architecture"],
      outcomes: ["500+ active businesses", "$2M ARR in first year", "99.9% uptime"],
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Zoid",
      description: "Zoid is a secure lifestyle management platform that empowers you to seamlessly control your home and community. With features like access management, bill payments, and instant updates, Zoid simplifies everyday living through smart, convenient technology – bringing peace of mind and effortless control to your fingertips.",
      image: zoid2,
      challenges: ["HIPAA compliance", "Complex scheduling logic", "Multiple user types"],
      solutions: ["End-to-end encryption", "Smart scheduling algorithm", "Role-based access control"],
      outcomes: ["10,000+ appointments booked", "95% patient satisfaction", "50% reduction in no-shows"],
      tech: ["Vue.js", "Express.js", "MySQL", "WebRTC"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Dietboon",
      description: "Dietboon makes healthy living easy and affordable for busy individuals. From tailored meal plans and daily health tips to grocery deliveries and nutritious take-out options, we ensure you stay energized and on track with your goals. Enjoy delicious, balanced meals that fit your lifestyle – anytime, anywhere.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop",
      challenges: ["Meal personalization complexity", "Delivery logistics", "Nutritional accuracy"],
      solutions: ["AI-powered meal recommendations", "Smart delivery routing", "Certified nutritionist partnerships"],
      outcomes: ["85% user retention rate", "30% improvement in health metrics", "4.7/5 user satisfaction"],
      tech: ["React", "Python", "TensorFlow", "Google Maps API"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Wholesquare",
      description: "Wholesquare is a social network designed to connect people through shared interests and also allows you to network and meet with your squaremates through community activities & events. Wholesquare is basically a platform that connects people with similar interests.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      challenges: ["User engagement", "Event coordination", "Interest matching algorithms"],
      solutions: ["Smart interest-based matching", "Integrated event planning tools", "Gamified community features"],
      outcomes: ["50,000+ active users", "75% event attendance rate", "90% positive community feedback"],
      tech: ["Next.js", "Node.js", "Redis", "Socket.io"],
      link: "#",
      github: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink size={16} className="text-white" />
                  </a>
                  <a href={project.github} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Github size={16} className="text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                {projects.filter(p => p.id === selectedProject).map(project => (
                  <div key={project.id}>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-gray-600 text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                    
                    <p className="text-lg text-gray-700 mb-8">{project.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Challenges</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Solutions</h4>
                        <ul className="space-y-2">
                          {project.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Outcomes</h4>
                        <ul className="space-y-2">
                          {project.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        View Live
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <Github size={20} className="mr-2" />
                        View Code
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
