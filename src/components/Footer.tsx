
import { DollarSign, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">CurrencyConverter</span>
            </div>
            <p className="text-gray-600 mb-4">
              Your trusted companion for currency conversion with real-time exchange rates 
              and comprehensive country information.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Github className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Currency Converter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Exchange Rates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Country List</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">API Documentation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 CurrencyConverter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
