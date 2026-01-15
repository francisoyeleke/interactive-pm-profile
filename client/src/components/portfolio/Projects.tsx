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
      whatIDid: [
        "Led go-to-market strategy for ExploreVault, a group travel savings feature",
        "Ran user interviews with 100+ travelers to refine messaging and positioning",
        "Executed email campaigns, social content, and automated booking flows",
        "Activated the brand at travel expos and tourism events across Lagos"
      ],
      impact: [
        "30% increase in multi-user bookings",
        "41% growth in social media community",
        "25% increase in trip conversion rates",
        "40% improvement in user retention"
      ],
      skillsUsed: [
        "GTM Strategy",
        "Growth Experiments",
        "Email Marketing",
        "Social Media",
        "User Research",
        "Funnel Optimization"
      ],
      tech: ["Next.js", "Node.js", "MongoDB", "Paystack"],
      link: "https://www.crystalveey.com/",
      github: "#"
    },
    {
      id: 2,
      title: "MBAG MFBank",
      description: "MBAG Microfinance Bank offers a fast track to financial independence through a range of services including micro savings, micro loans, and school-targeted loans. With a user-friendly banking app, managing money, making payments, and settling bills becomes effortless.",
      image: mbag,
      whatIDid: [
        "Led marketing and education campaigns to drive MQ adoption",
        "Created customer-facing guides, FAQs, tutorials, and social media content",
        "Participated in merchant activation sessions and banking industry events",
        "Executed targeted email campaigns including feature tutorials and transaction updates",
        "Conducted user interviews and funnel analysis to identify messaging gaps",
        "Collaborated with customer support to reduce recurring issues"
      ],
      impact: [
        "Contributed to 40% improvement in perceived transaction speed",
        "28% increase in successful transaction completion",
        "20% reduction in failed transactions",
        "25% reduction in escalated support tickets"
      ],
      skillsUsed: [
        "Product Marketing",
        "Customer Education",
        "Funnel Analysis",
        "Email Campaigns",
        "Fintech Growth",
        "Stakeholder Collaboration"
      ],
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      link: "https://mbagmfbank.com/",
      github: "#"
    },
    {
      id: 4,
      title: "Dietboon",
      description: "Dietboon makes healthy living easy and affordable for busy individuals. From tailored meal plans and daily health tips to grocery deliveries and nutritious take-out options, we ensure you stay energized and on track with your goals. Enjoy delicious, balanced meals that fit your lifestyle – anytime, anywhere.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop",
      whatIDid: [
        "Worked on product positioning and messaging to clearly communicate Dietboon’s value around healthy, practical eating",
        "Supported go-to-market planning by aligning product benefits with real customer pain points",
        "Developed educational content ideas that balanced wellness, simplicity, and credibility",
        "Contributed to campaign concepts focused on awareness, trust-building, and repeat engagement",
        "Provided growth insights on how to use community conversations and storytelling to drive adoption"
      ],
      impact: [
        "Improved clarity of product messaging and value proposition",
        "Strengthened brand trust through simplified, education-led communication",
        "Supported early user engagement and awareness for a health-focused product",
        "Helped align product storytelling with user needs and lifestyle realities"
      ],
      skillsUsed: [
        "Product Positioning",
        "Health & Lifestyle Marketing",
        "Content Strategy",
        "Go-to-Market Support",
        "Customer Education",
        "Growth Thinking"
      ],
      tech: ["React", "Python", "TensorFlow", "Google Maps API"],
      link: "https://www.dietboon.com/",
      github: "#"
    },
    {
      id: 5,
      title: "Wholesquare",
      description: "Wholesquare is a social network designed to connect people through shared interests and also allows you to network and meet with your squaremates through community activities & events. Wholesquare is basically a platform that connects people with similar interests.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      whatIDid: [
        "Built early traction through grassroots marketing and targeted youth outreach",
        "Organized and led 5+ community events including meetups, creator sessions, and local experiences",
        "Activated the brand at 10+ festivals, tech events, and campus gatherings",
        "Designed onboarding flows and email nurture campaigns to drive early adoption",
        "Launched a digital experiences feature tailored to local events and activities",
        "Ran A/B tests on messaging, landing pages, and emails to improve conversion",
        "Partnered with creators and community leaders on growth and monetization ideas"
      ],
      impact: [
        "Grew community from 0 to 200+ users in 6 months",
        "35% increase in platform adoption despite web-only access",
        "70% community growth after launching digital experiences",
        "Improved retention through structured onboarding and education flows"
      ],
      skillsUsed: [
        "Community Growth",
        "Event Marketing",
        "User Onboarding",
        "Email Marketing",
        "Experimentation",
        "Partnerships",
        "Analytics"
      ],
      tech: ["Next.js", "Node.js", "Redis", "Socket.io"],
      link: "https://www.wholesquare.org/",
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
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
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
              </div>
            </div>
          ))}
        </div>

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
                        <h4 className="text-xl font-bold text-gray-900 mb-4">What I Did</h4>
                        <ul className="space-y-2">
                          {project.whatIDid.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Impact</h4>
                        <ul className="space-y-2">
                          {project.impact.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Skills Used</h4>
                        <ul className="space-y-2">
                          {project.skillsUsed.map((skill, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        View Live
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
