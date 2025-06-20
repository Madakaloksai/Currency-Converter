
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WeatherCategories from "@/components/WeatherCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WeatherCategories />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;
