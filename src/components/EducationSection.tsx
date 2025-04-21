
interface Education {
  institution: string;
  degree?: string;
  location: string;
  period: string;
  percentage?: string;
}

export function EducationSection() {
  const education: Education[] = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      location: "Punjab, India",
      period: "Since August 2022"
    },
    {
      institution: "Sri Viswa",
      degree: "Senior Secondary School Certificate",
      location: "Seethammapeta, Andra Pradesh",
      period: "2020 - 2022",
      percentage: "81%"
    },
    {
      institution: "Sri Prakash Vidyaniketan",
      degree: "10th",
      location: "Seethanadara, Andra Pradesh",
      period: "2017 - 2020",
      percentage: "80%"
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          My <span className="text-turquoise-600">Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-turquoise-300 ml-3 pl-8 space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-11 w-6 h-6 bg-turquoise-400 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="bg-gradient-to-r from-turquoise-50 to-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl text-turquoise-700">{edu.institution}</h3>
                  {edu.degree && <p className="text-gray-700 mt-1">{edu.degree}</p>}
                  <div className="flex flex-wrap justify-between mt-3 text-sm">
                    <span className="text-gray-600">{edu.location}</span>
                    <span className="text-gray-600">{edu.period}</span>
                  </div>
                  {edu.percentage && (
                    <p className="mt-2 text-gray-700">
                      <span className="font-medium">Percentage:</span> {edu.percentage}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
