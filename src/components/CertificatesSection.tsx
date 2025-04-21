
interface Certificate {
  title: string;
  provider: string;
  date: string;
}

export function CertificatesSection() {
  const certificates: Certificate[] = [
    {
      title: "Cloud-Powered Applications with AWS",
      provider: "Udemy",
      date: "June 2024"
    },
    {
      title: "Generative AI for Everyone",
      provider: "Coursera",
      date: "April 2024"
    },
    {
      title: "Dynamic Programming, Greedy Algorithms",
      provider: "Coursera",
      date: "April 2024"
    },
    {
      title: "SQL (Intermediate) Achievement",
      provider: "HackerRank and Great Learning",
      date: "March 2023"
    }
  ];

  const certifications = [
    {
      title: "Microsoft Certified Azure Fundamentals",
      date: "August 22, 2024"
    },
    {
      title: "Microsoft Certified Azure Administrative Associate",
      date: "April 4th, 2025 - April 4th, 2026"
    }
  ];

  return (
    <section id="certificates" className="py-16 bg-turquoise-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Certificates & <span className="text-turquoise-600">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-turquoise-200 pb-2">
              Certificates
            </h3>
            <ul className="space-y-6">
              {certificates.map((cert, index) => (
                <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-turquoise-700 mb-1">{cert.title}</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">by {cert.provider}</span>
                    <span className="text-gray-500">{cert.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-turquoise-200 pb-2">
              Certifications
            </h3>
            <ul className="space-y-6">
              {certifications.map((cert, index) => (
                <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-turquoise-700 mb-1">{cert.title}</h4>
                  <div className="text-sm text-gray-500">{cert.date}</div>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-turquoise-200 pb-2">
                Achievements
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-turquoise-700 mb-1">Tech Ocean Workshop</h4>
                <div className="text-sm text-gray-500">October 2022</div>
                <p className="mt-2 text-gray-700">
                  1st Prize for presenting an innovative Cloud-powered Car Renting System Application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
