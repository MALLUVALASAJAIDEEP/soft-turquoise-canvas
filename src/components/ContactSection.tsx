
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-turquoise-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Get In <span className="text-turquoise-600">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" className="border-turquoise-200 focus:border-turquoise-500" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="border-turquoise-200 focus:border-turquoise-500" />
              </div>
              <div>
                <Input type="text" placeholder="Subject" className="border-turquoise-200 focus:border-turquoise-500" />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="border-turquoise-200 focus:border-turquoise-500 min-h-[150px]" 
                />
              </div>
              <Button className="w-full bg-turquoise-600 hover:bg-turquoise-700">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-turquoise-100 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-turquoise-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <a href="mailto:malluvalasajaideep@gmail.com" className="text-turquoise-600 hover:underline">
                    malluvalasajaideep@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-turquoise-100 p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-turquoise-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                  <a href="tel:9346158730" className="text-turquoise-600 hover:underline">
                    9346158730
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-turquoise-100 p-3 rounded-lg mr-4">
                  <Linkedin className="h-5 w-5 text-turquoise-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/malluvalasa-jaideep/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-turquoise-600 hover:underline"
                  >
                    malluvalasa-jaideep
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-turquoise-100 p-3 rounded-lg mr-4">
                  <Github className="h-5 w-5 text-turquoise-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">GitHub</h4>
                  <a 
                    href="https://github.com/MALLUVALASAJAIDEEP"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-turquoise-600 hover:underline"
                  >
                    MALLUVALASAJAIDEEP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
