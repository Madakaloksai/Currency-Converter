
import { Card, CardContent } from "@/components/ui/card";
import { CloudRain, Sun, Snowflake, Wind } from "lucide-react";

const categories = [
  {
    icon: Sun,
    title: "Sunny Weather",
    description: "UV protection, sunglasses, summer gear",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    icon: CloudRain,
    title: "Rainy Days",
    description: "Waterproof jackets, umbrellas, rain boots",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: Snowflake,
    title: "Winter Essentials",
    description: "Warm coats, thermal wear, snow gear",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
  {
    icon: Wind,
    title: "Windy Conditions",
    description: "Windbreakers, scarves, protective gear",
    color: "from-gray-400 to-gray-600",
    bgColor: "bg-gray-50",
    iconColor: "text-gray-600"
  }
];

const WeatherCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Weather Condition
          </h2>
          <p className="text-lg text-gray-600">
            Find the perfect gear for any forecast
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className={`${category.bgColor} border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeatherCategories;
