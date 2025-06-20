
import Header from "@/components/Header";
import CurrencyConverter from "@/components/CurrencyConverter";
import CountryList from "@/components/CountryList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Currency <span className="text-blue-600">Converter</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Convert currencies instantly with real-time exchange rates from around the world
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CurrencyConverter />
          </div>
          <div>
            <CountryList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
