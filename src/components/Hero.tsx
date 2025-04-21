import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-turquoise-50 to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Hello, I'm{" "}
            <span className="text-turquoise-600">Malluvalasa Jaideep</span>
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-md">
            Cloud Computing Professional with extensive experience in <span className="font-semibold">Azure</span>, <span className="font-semibold">AWS</span>, <span className="font-semibold">Ubuntu</span>, and enterprise cloud solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-turquoise-600 hover:bg-turquoise-700">
              Download Resume
            </Button>
            <Button variant="outline" className="border-turquoise-500 text-turquoise-600">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
        </div>
      </div>
    </section>
  );
}
