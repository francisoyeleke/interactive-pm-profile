
import { useEffect, useRef, useState } from "react";
import { Target, Users, BarChart3, Lightbulb, Zap, Figma, TrendingUp, Search } from "lucide-react";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Product Strategy",
      icon: Target,
      skills: ["Roadmapping", "A/B Testing", "Project Management", "Prioritization"]
    },
    {
      title: "Product Design",
      icon: Figma,
      skills: ["User Stories", "User Flows", "Wireframes", "Persona Development"]
    },
    {
      title: "Market & User Research",
      icon: Search,
      skills: ["Market Analysis", "Experiment Design", "Usability Testing", "Customer Insights"]
    },
    {
      title: "Analytics & Product Operations",
      icon: BarChart3,
      skills: ["Data Analysis", "Experiment Tracking", "Software Development & Management", "Metrics-Driven Decision Making"]
    },
    {
      title: "Collaboration & Teamwork",
      icon: Users,
      skills: ["Cross-functional Leadership", "Stakeholder Management", "Effective Communication", "Aligning Teams Around Product Goals"]
    }
  ];

  const tools = [
    "Jira", "Asana", "Figma", "Notion", "Miro", "SQL", "Google Analytics", "Mixpanel"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars with delay
          setTimeout(() => {
            setAnimatedBars(new Array(skillCategories.length).fill(true));
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [skillCategories.length]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-black to-yellow-600 bg-clip-text text-transparent">
            My Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-yellow-100 rounded-lg mr-4">
                    <Icon className="text-yellow-600" size={24} />
                  </div>
                  <h3 className="font-bold text-black text-lg">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h3 className="text-2xl font-bold text-black text-center mb-8">Tools & Technologies</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 p-4 rounded-lg text-center hover:from-yellow-100 hover:to-amber-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-semibold text-gray-800">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
