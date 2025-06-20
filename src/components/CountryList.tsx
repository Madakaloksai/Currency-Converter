
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Globe } from "lucide-react";
import { useState } from "react";
import { countries } from "@/data/countries";

const CountryList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.currency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-blue-600" />
          Countries & Currencies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            placeholder="Search countries or currencies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="max-h-96 overflow-y-auto space-y-2">
            {filteredCountries.map((country) => (
              <div
                key={country.code}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <p className="font-medium text-sm">{country.name}</p>
                    <p className="text-xs text-gray-500">{country.code}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">{country.currency}</p>
                  <p className="text-xs text-gray-500">{country.currencySymbol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountryList;
