
import { Button } from "@/components/ui/button";
import { CloudRain, Sun, Snowflake, Wind } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-blue-200 opacity-30">
          <Sun className="h-16 w-16" />
        </div>
        <div className="absolute top-20 right-20 text-gray-300 opacity-30">
          <CloudRain className="h-12 w-12" />
        </div>
        <div className="absolute bottom-20 left-20 text-blue-300 opacity-30">
          <Snowflake className="h-14 w-14" />
        </div>
        <div className="absolute bottom-10 right-10 text-gray-400 opacity-30">
          <Wind className="h-10 w-10" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Weather-Ready
          <span className="block text-blue-600">Gear & Essentials</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover the perfect products for every weather condition. From sunny days to stormy nights, 
          we've got you covered with premium gear and seasonal essentials.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Shop Now
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            Browse Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
