import { useState } from "react";
import { Palette, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

interface Theme {
  id: string;
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  mood: string;
  season: string;
  occasions: string[];
  decorElements: string[];
  flowerSuggestions: string[];
  fabricSuggestions: string[];
}

const ThemesDecor = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const themes: Theme[] = [
    {
      id: "maroon-gold",
      name: "Royal Maroon & Gold",
      description: "Classic and regal combination perfect for traditional Indian weddings",
      primaryColor: "#8B1538",
      secondaryColor: "#DAA520", 
      accentColor: "#FFD700",
      mood: "Regal & Traditional",
      season: "Winter",
      occasions: ["Shaadi", "Reception", "Engagement"],
      decorElements: ["Golden mandap", "Maroon drapes", "Crystal chandeliers", "Gold urlis"],
      flowerSuggestions: ["Red roses", "Marigolds", "Jasmine garlands"],
      fabricSuggestions: ["Silk", "Velvet", "Brocade"]
    },
    {
      id: "ivory-green",
      name: "Elegant Ivory & Green",
      description: "Fresh and sophisticated theme with natural elements",
      primaryColor: "#F5F5DC",
      secondaryColor: "#228B22",
      accentColor: "#32CD32",
      mood: "Fresh & Elegant",
      season: "Spring/Summer",
      occasions: ["Mehendi", "Haldi", "Sangam"],
      decorElements: ["White mandap", "Green foliage", "Ivory drapes", "Wooden accents"],
      flowerSuggestions: ["White lilies", "Green chrysanthemums", "Eucalyptus"],
      fabricSuggestions: ["Cotton", "Linen", "Chiffon"]
    },
    {
      id: "pink-orange",
      name: "Vibrant Pink & Orange",
      description: "Lively and colorful theme perfect for daytime celebrations",
      primaryColor: "#FF69B4",
      secondaryColor: "#FF4500",
      accentColor: "#FFB6C1",
      mood: "Vibrant & Joyful",
      season: "Spring",
      occasions: ["Mehendi", "Haldi", "Sangam"],
      decorElements: ["Colorful mandap", "Bright drapes", "Floral installations", "Vibrant cushions"],
      flowerSuggestions: ["Pink roses", "Orange marigolds", "Gerberas"],
      fabricSuggestions: ["Cotton", "Georgette", "Net"]
    },
    {
      id: "purple-silver",
      name: "Majestic Purple & Silver",
      description: "Luxurious and modern combination for evening celebrations",
      primaryColor: "#663399",
      secondaryColor: "#C0C0C0",
      accentColor: "#E6E6FA",
      mood: "Luxurious & Modern",
      season: "All seasons",
      occasions: ["Reception", "Engagement", "Cocktail"],
      decorElements: ["Silver mandap", "Purple lighting", "Crystal decorations", "Metallic accents"],
      flowerSuggestions: ["Purple orchids", "White roses", "Lavender"],
      fabricSuggestions: ["Satin", "Organza", "Taffeta"]
    },
    {
      id: "red-yellow",
      name: "Traditional Red & Yellow",
      description: "Most auspicious color combination for Hindu weddings",
      primaryColor: "#DC143C",
      secondaryColor: "#FFD700",
      accentColor: "#FF6347",
      mood: "Traditional & Auspicious",
      season: "All seasons",
      occasions: ["Shaadi", "Haldi", "Puja ceremonies"],
      decorElements: ["Traditional mandap", "Red & yellow drapes", "Kalash decorations", "Banana leaves"],
      flowerSuggestions: ["Red roses", "Yellow marigolds", "Jasmine"],
      fabricSuggestions: ["Silk", "Cotton", "Khadi"]
    },
    {
      id: "peach-mint",
      name: "Soft Peach & Mint",
      description: "Delicate and romantic theme for intimate celebrations",
      primaryColor: "#FFCBA4",
      secondaryColor: "#98FB98",
      accentColor: "#F5FFFA",
      mood: "Romantic & Delicate",
      season: "Spring/Summer",
      occasions: ["Engagement", "Mehendi", "Brunch"],
      decorElements: ["Pastel mandap", "Soft drapes", "Floral canopies", "Vintage props"],
      flowerSuggestions: ["Peach roses", "White peonies", "Baby's breath"],
      fabricSuggestions: ["Chiffon", "Tulle", "Lace"]
    }
  ];

  const applyTheme = (theme: Theme) => {
    // Update CSS variables for the selected theme
    document.documentElement.style.setProperty('--wedding-primary', theme.primaryColor);
    document.documentElement.style.setProperty('--wedding-secondary', theme.secondaryColor);
    document.documentElement.style.setProperty('--wedding-accent', theme.accentColor);
    
    setSelectedTheme(theme.id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Wedding Themes & Decor
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect color theme for your wedding celebration
          </p>
        </div>

        {selectedTheme && (
          <div className="mb-8 p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 text-primary">
              <Check className="w-5 h-5" />
              <span className="font-medium">
                Theme Applied: {themes.find(t => t.id === selectedTheme)?.name}
              </span>
            </div>
          </div>
        )}

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <Card key={theme.id} className={`hover:shadow-lg transition-all duration-300 ${
              selectedTheme === theme.id ? 'ring-2 ring-primary' : ''
            }`}>
              <CardHeader>
                {/* Color Palette */}
                <div className="flex gap-2 mb-4">
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: theme.primaryColor }}
                  />
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: theme.secondaryColor }}
                  />
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: theme.accentColor }}
                  />
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{theme.name}</CardTitle>
                    <CardDescription className="text-base">
                      {theme.description}
                    </CardDescription>
                  </div>
                  {selectedTheme === theme.id && (
                    <Check className="w-6 h-6 text-primary" />
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Theme Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Mood:</span>
                    <p className="text-muted-foreground">{theme.mood}</p>
                  </div>
                  <div>
                    <span className="font-medium">Season:</span>
                    <p className="text-muted-foreground">{theme.season}</p>
                  </div>
                </div>

                {/* Occasions */}
                <div>
                  <span className="font-medium text-sm">Perfect for:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {theme.occasions.map((occasion, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {occasion}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Decor Elements */}
                <div>
                  <span className="font-medium text-sm">Decor Elements:</span>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    {theme.decorElements.slice(0, 3).map((element, index) => (
                      <li key={index}>• {element}</li>
                    ))}
                  </ul>
                </div>

                {/* Flowers */}
                <div>
                  <span className="font-medium text-sm">Flower Suggestions:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {theme.flowerSuggestions.map((flower, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {flower}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Fabrics */}
                <div>
                  <span className="font-medium text-sm">Fabric Suggestions:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {theme.fabricSuggestions.map((fabric, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {fabric}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full mt-4" 
                  onClick={() => applyTheme(theme)}
                  variant={selectedTheme === theme.id ? "default" : "outline"}
                >
                  <Palette className="w-4 h-4 mr-2" />
                  {selectedTheme === theme.id ? "Theme Applied" : "Apply Theme"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customization Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Need Custom Themes?</CardTitle>
            <CardDescription>
              Contact our design team to create a personalized color theme for your wedding
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Our expert designers can create custom color combinations based on your preferences, 
                venue, and cultural traditions.
              </p>
              <Button size="lg">
                Contact Design Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ThemesDecor;