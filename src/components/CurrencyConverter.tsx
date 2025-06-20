
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpDown, TrendingUp } from "lucide-react";
import { currencies } from "@/data/currencies";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("0.85");

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleConvert = () => {
    // Mock conversion - in a real app, you'd call an API
    const mockRate = 0.85;
    const result = (parseFloat(amount) * mockRate).toFixed(2);
    setConvertedAmount(result);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          Currency Converter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Amount Input */}
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="text-lg"
          />
        </div>

        {/* From Currency */}
        <div className="space-y-2">
          <Label>From</Label>
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger>
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              {currencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{currency.flag}</span>
                    <span>{currency.code}</span>
                    <span className="text-gray-500">- {currency.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={handleSwapCurrencies}
            className="rounded-full"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        {/* To Currency */}
        <div className="space-y-2">
          <Label>To</Label>
          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger>
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              {currencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{currency.flag}</span>
                    <span>{currency.code}</span>
                    <span className="text-gray-500">- {currency.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Convert Button */}
        <Button onClick={handleConvert} className="w-full" size="lg">
          Convert
        </Button>

        {/* Result */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Converted Amount</p>
            <p className="text-3xl font-bold text-blue-600">
              {convertedAmount} {toCurrency}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              1 {fromCurrency} = 0.85 {toCurrency}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
