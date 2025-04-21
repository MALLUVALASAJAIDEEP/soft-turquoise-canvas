
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
      description: "Engineered a online automation platform for university management, utilizing cloud-based solutions. This system digitizes a wide range of administrative and academic tasks, from course enrollment to event coordination. The solution improves operational workflows, increases accessibility, and provides enhanced user experience for both students and faculty members.",
      technologies: ["Cloud Computing", "Azure", "Web Development"]
    },
    {
      title: "Contact Management System (Python)",
      date: "April 2023",
      description: "Developed a contact management tool using Python, aimed at efficiently organizing and accessing contact information. The system allows for easy addition, modification, and removal of contacts, coupled with a responsive search feature. This project highlights my proficiency in Python and shows my ability to implement practical, real-world applications with data handling.",
      technologies: ["Python", "Database Management", "UI Design"]
    },
    {
      title: "Movie Ticket Booking System Developer",
      date: "March 2023",
      description: "Designed and implemented a fully responsive movie ticket reservation platform using HTML and CSS. This initiative demonstrates my core expertise in front-end web development, focusing on creating visually appealing interfaces with smooth functionality.",
      technologies: ["HTML", "CSS", "Responsive Design"]
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
