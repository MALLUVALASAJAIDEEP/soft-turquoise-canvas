
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  date: string;
  description: string;
  technologies?: string[];
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "University Campus Automation with Cloud Technology",
      date: "June 2024",
      description: "Engineered an online automation platform for university management, utilizing cloud-based solutions. This system digitizes and streamlines a wide range of administrative and academic tasks, increasing accessibility and operational efficiency for students and faculty via cloud technologies.",
      technologies: ["Cloud Computing", "Azure"]
    },
    {
      title: "Contact Management System",
      date: "April 2023",
      description: "Developed a tool for efficiently organizing and accessing contact information, allowing easy addition, modification, and removal of contacts. Demonstrated strong problem-solving and data management abilities.",
      technologies: ["Python", "Database Management"]
    },
    {
      title: "Cloud-based Resource Monitoring",
      date: "March 2023",
      description: "Implemented a platform for monitoring and visualizing cloud infrastructure resources, demonstrating the use of automation and cloud principles.",
      technologies: ["Cloud Automation"]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          My <span className="text-turquoise-600">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="border-turquoise-100 hover:border-turquoise-300 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-turquoise-700">{project.title}</CardTitle>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-2">
                {project.technologies?.map((tech, i) => (
                  <span key={i} className="bg-turquoise-50 text-turquoise-700 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
