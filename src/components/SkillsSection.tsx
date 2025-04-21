
export function SkillsSection() {
  const skills = {
    languages: ["C++", "Java"],
    frameworks: [],
    tools: ["MySQL", "Ubuntu", "Azure", "AWS"],
    softSkills: ["Problem-Solving Skills", "Team Player", "Project Management", "Adaptability", "Resource Management"]
  };

  return (
    <section id="skills" className="py-16 bg-turquoise-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          My <span className="text-turquoise-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <SkillCard 
            title="Languages" 
            skills={skills.languages}
            bgColor="bg-gradient-to-br from-turquoise-100 to-white"
            iconColor="text-turquoise-600"
          />
          {skills.frameworks.length > 0 && (
            <SkillCard 
              title="Frameworks" 
              skills={skills.frameworks} 
              bgColor="bg-gradient-to-br from-turquoise-200 to-turquoise-50"
              iconColor="text-turquoise-700"
            />
          )}
          <SkillCard 
            title="Tools & Platforms" 
            skills={skills.tools}
            bgColor="bg-gradient-to-br from-turquoise-100 to-white" 
            iconColor="text-turquoise-600"
          />
          <SkillCard 
            title="Soft Skills" 
            skills={skills.softSkills}
            bgColor="bg-gradient-to-br from-turquoise-200 to-turquoise-50" 
            iconColor="text-turquoise-700"
          />
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  skills: string[];
  bgColor: string;
  iconColor: string;
}

function SkillCard({ title, skills, bgColor, iconColor }: SkillCardProps) {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-sm`}>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className={`mr-2 ${iconColor}`}>•</span>
            <span className="text-gray-700">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
