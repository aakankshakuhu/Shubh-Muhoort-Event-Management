import { useState } from "react";
import { Search, Filter, MapPin, Star, Phone, Mail, IndianRupee } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

interface Vendor {
  id: number;
  name: string;
  category: string;
  city: string;
  rating: number;
  reviews: number;
  priceRange: "Budget" | "Mid-Range" | "Premium" | "Luxury";
  phone: string;
  email: string;
  description: string;
  specialties: string[];
  image: string;
}

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");

  const vendors: Vendor[] = [
    {
      id: 1,
      name: "Royal Mandap Decorators",
      category: "Decoration",
      city: "Mumbai",
      rating: 4.8,
      reviews: 156,
      priceRange: "Premium",
      phone: "+91 98765 43210",
      email: "info@royalmandap.com",
      description: "Specializing in traditional Indian wedding decorations with modern touches",
      specialties: ["Mandap Design", "Floral Arrangements", "Stage Decoration"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Sharma Catering Services",
      category: "Catering",
      city: "Delhi",
      rating: 4.6,
      reviews: 203,
      priceRange: "Mid-Range",
      phone: "+91 98765 43211",
      email: "contact@sharmacatering.com",
      description: "Authentic North Indian cuisine with vegetarian and Jain specialties",
      specialties: ["North Indian", "Gujarati Thali", "Live Counters"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Melody Wedding Musicians",
      category: "Music",
      city: "Jaipur",
      rating: 4.9,
      reviews: 89,
      priceRange: "Premium",
      phone: "+91 98765 43212",
      email: "bookings@melodywedding.com",
      description: "Traditional and contemporary music for all wedding ceremonies",
      specialties: ["Classical Music", "Bollywood", "Folk Dance"],
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Eternal Moments Photography",
      category: "Photography",
      city: "Bangalore",
      rating: 4.7,
      reviews: 178,
      priceRange: "Premium",
      phone: "+91 98765 43213",
      email: "hello@eternalmoments.com",
      description: "Candid wedding photography capturing your special moments",
      specialties: ["Candid Photography", "Pre-wedding Shoots", "Drone Coverage"],
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Golden Jewellers",
      category: "Jewelry",
      city: "Chennai",
      rating: 4.5,
      reviews: 267,
      priceRange: "Luxury",
      phone: "+91 98765 43214",
      email: "info@goldenjewellers.com",
      description: "Traditional gold jewelry and bridal sets for your special day",
      specialties: ["Bridal Sets", "Gold Jewelry", "Temple Jewelry"],
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Budget Wedding Planners",
      category: "Planning",
      city: "Pune",
      rating: 4.3,
      reviews: 134,
      priceRange: "Budget",
      phone: "+91 98765 43215",
      email: "plan@budgetwedding.com",
      description: "Complete wedding planning services at affordable prices",
      specialties: ["Full Planning", "Vendor Coordination", "Budget Management"],
      image: "/placeholder.svg"
    }
  ];

  const categories = ["all", "Decoration", "Catering", "Music", "Photography", "Jewelry", "Planning"];
  const cities = ["all", "Mumbai", "Delhi", "Jaipur", "Bangalore", "Chennai", "Pune"];
  const priceRanges = ["all", "Budget", "Mid-Range", "Premium", "Luxury"];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || vendor.category === selectedCategory;
    const matchesCity = selectedCity === "all" || vendor.city === selectedCity;
    const matchesPrice = selectedPrice === "all" || vendor.priceRange === selectedPrice;
    
    return matchesSearch && matchesCategory && matchesCity && matchesPrice;
  });

  const getPriceColor = (priceRange: string) => {
    switch (priceRange) {
      case "Budget": return "bg-green-100 text-green-800";
      case "Mid-Range": return "bg-blue-100 text-blue-800";
      case "Premium": return "bg-purple-100 text-purple-800";
      case "Luxury": return "bg-amber-100 text-amber-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Wedding Vendors Directory
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover trusted vendors for every aspect of your wedding celebration
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search vendors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                {cities.map(city => (
                  <SelectItem key={city} value={city}>
                    {city === "all" ? "All Cities" : city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(price => (
                  <SelectItem key={price} value={price}>
                    {price === "all" ? "All Price Ranges" : price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredVendors.length} vendor{filteredVendors.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <Card key={vendor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl">{vendor.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4" />
                      {vendor.city}
                    </CardDescription>
                  </div>
                  <Badge className={getPriceColor(vendor.priceRange)}>
                    {vendor.priceRange}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{vendor.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({vendor.reviews} reviews)
                  </span>
                  <Badge variant="secondary">{vendor.category}</Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {vendor.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {vendor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{vendor.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="truncate">{vendor.email}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    Contact Vendor
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVendors.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No vendors found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Vendors;