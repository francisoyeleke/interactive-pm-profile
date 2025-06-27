
import { useEffect, useRef, useState } from "react";
import { Target, Users, BarChart3, Lightbulb, Zap, Code, Database, Figma } from "lucide-react";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "Product Strategy", level: 95, icon: Target },
    { name: "User Research", level: 90, icon: Users },
    { name: "Data Analysis", level: 85, icon: BarChart3 },
    { name: "Stakeholder Management", level: 92, icon: Lightbulb },
    { name: "Agile/Scrum", level: 88, icon: Zap },
    { name: "UI/UX Collaboration", level: 85, icon: Figma },
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
            setAnimatedBars(new Array(skills.length).fill(true));
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [skills.length]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills with Progress Bars */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Competencies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <Icon className="text-blue-600 mr-3" size={24} />
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="ml-auto text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animatedBars[index] ? `${skill.level}%` : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Technologies</h3>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={tool}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg text-center hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="font-semibold text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Led cross-functional teams of 10+ engineers and designers
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Increased user engagement by 150% through strategic feature releases
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Reduced product development cycle time by 40%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
