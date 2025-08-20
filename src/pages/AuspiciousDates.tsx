import { useState } from "react";
import { Calendar, MapPin, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";

const AuspiciousDates = () => {
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  const auspiciousDates = [
    {
      id: 1,
      date: "2024-11-15",
      day: "Friday",
      occasion: "Kartik Purnima",
      city: "Mumbai",
      description: "Highly auspicious for wedding ceremonies",
      muhurat: "10:30 AM - 12:00 PM"
    },
    {
      id: 2,
      date: "2024-12-08",
      day: "Sunday",
      occasion: "Margashirsha Shukla",
      city: "Delhi",
      description: "Perfect for engagement and ring ceremonies",
      muhurat: "11:00 AM - 1:30 PM"
    },
    {
      id: 3,
      date: "2024-12-22",
      day: "Sunday",
      occasion: "Winter Solstice",
      city: "Bangalore",
      description: "Auspicious for new beginnings",
      muhurat: "9:00 AM - 11:30 AM"
    },
    {
      id: 4,
      date: "2025-01-14",
      day: "Tuesday",
      occasion: "Makar Sankranti",
      city: "Jaipur",
      description: "Extremely favorable for wedding ceremonies",
      muhurat: "10:00 AM - 12:30 PM"
    },
    {
      id: 5,
      date: "2025-01-26",
      day: "Sunday",
      occasion: "Vasant Panchami",
      city: "Kolkata",
      description: "Blessed by Goddess Saraswati",
      muhurat: "11:30 AM - 2:00 PM"
    },
    {
      id: 6,
      date: "2025-02-12",
      day: "Wednesday",
      occasion: "Maha Shivratri",
      city: "Chennai",
      description: "Sacred day for divine blessings",
      muhurat: "6:00 PM - 8:30 PM"
    }
  ];

  const cities = ["all", "Mumbai", "Delhi", "Bangalore", "Jaipur", "Kolkata", "Chennai"];
  const months = ["all", "November", "December", "January", "February"];

  const filteredDates = auspiciousDates.filter(date => {
    const cityMatch = selectedCity === "all" || date.city === selectedCity;
    const monthMatch = selectedMonth === "all" || 
      new Date(date.date).toLocaleString('default', { month: 'long' }) === selectedMonth;
    return cityMatch && monthMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Auspicious Wedding Dates
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most favorable dates for your wedding ceremony based on ancient Hindu traditions and astrological calculations
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto">
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full">
              <MapPin className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              {cities.map(city => (
                <SelectItem key={city} value={city}>
                  {city === "all" ? "All Cities" : city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-full">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map(month => (
                <SelectItem key={month} value={month}>
                  {month === "all" ? "All Months" : month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDates.map((date) => (
            <Card key={date.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-primary">
                      {new Date(date.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </CardTitle>
                    <CardDescription className="text-base font-medium">
                      {date.day} • {date.occasion}
                    </CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {date.city}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {date.description}
                </p>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm font-medium text-primary">
                    Muhurat Time: {date.muhurat}
                  </p>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Book This Date
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDates.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No dates found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to see more auspicious dates
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AuspiciousDates;