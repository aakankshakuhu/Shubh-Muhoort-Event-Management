import { useState } from "react";
import { Search, Filter, Heart, Download, Eye, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Header from "@/components/Header";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  subcategory: string;
  src: string;
  alt: string;
  likes: number;
  photographer: string;
  venue: string;
  city: string;
  tags: string[];
}

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "ceremonies", label: "Ceremonies" },
    { value: "decorations", label: "Decorations" },
    { value: "couples", label: "Couples" },
    { value: "venues", label: "Venues" },
    { value: "food", label: "Food & Catering" },
    { value: "mehendi", label: "Mehendi" }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Traditional Mandap Ceremony",
      category: "ceremonies",
      subcategory: "mandap",
      src: "/img/Traditional Mandap Ceremony.jpg",
      alt: "Beautiful traditional mandap with flowers",
      likes: 245,
      photographer: "Royal Wedding Photos",
      venue: "Heritage Palace",
      city: "Jaipur",
      tags: ["mandap", "traditional", "flowers", "ceremony"]
    },
    {
      id: 2,
      title: "Mehendi Night Celebration",
      category: "mehendi",
      subcategory: "celebration",
      src: "/img/Mehendi Night Celebration.jpg",
      alt: "Bride getting mehendi applied",
      likes: 189,
      photographer: "Candid Moments",
      venue: "Garden Resort",
      city: "Udaipur",
      tags: ["mehendi", "henna", "celebration", "bride"]
    },
    {
      id: 3,
      title: "Royal Palace Venue",
      category: "venues",
      subcategory: "palace",
      src: "/img/Royal Palace Venue.jpg",
      alt: "Stunning palace venue setup",
      likes: 312,
      photographer: "Venue Masters",
      venue: "City Palace",
      city: "Udaipur",
      tags: ["palace", "venue", "royal", "architecture"]
    },
    {
      id: 4,
      title: "Couple Portrait Session",
      category: "couples",
      subcategory: "portrait",
      src: "/img/Couple Portrait Session.jpg",
      alt: "Beautiful couple in traditional attire",
      likes: 156,
      photographer: "Love Stories",
      venue: "Fort Gardens",
      city: "Delhi",
      tags: ["couple", "portrait", "traditional", "love"]
    },
    {
      id: 5,
      title: "Floral Mandap Decoration",
      category: "decorations",
      subcategory: "floral",
      src: "/img/Floral Mandap Decoration.jpg",
      alt: "Elaborate floral mandap setup",
      likes: 278,
      photographer: "Decor Dreams",
      venue: "Beach Resort",
      city: "Goa",
      tags: ["decoration", "flowers", "mandap", "colorful"]
    },
    {
      id: 6,
      title: "Wedding Feast Setup",
      category: "food",
      subcategory: "buffet",
      src: "/img/Wedding Feast Setup.jpg",
      alt: "Elaborate wedding food arrangement",
      likes: 134,
      photographer: "Food & Events",
      venue: "Grand Hotel",
      city: "Mumbai",
      tags: ["food", "catering", "feast", "buffet"]
    },
    {
      id: 7,
      title: "Haldi Ceremony Joy",
      category: "ceremonies",
      subcategory: "haldi",
      src: "/img/Haldi Ceremony Joy.jpg",
      alt: "Joyful haldi ceremony moments",
      likes: 203,
      photographer: "Golden Moments",
      venue: "Family Home",
      city: "Pune",
      tags: ["haldi", "ceremony", "turmeric", "family"]
    },
    {
      id: 8,
      title: "Reception Hall Decor",
      category: "decorations",
      subcategory: "reception",
      src: "/img/Reception Hall Decor.jpg",
      alt: "Elegant reception hall decoration",
      likes: 289,
      photographer: "Elite Decorators",
      venue: "Convention Center",
      city: "Bangalore",
      tags: ["reception", "decoration", "elegant", "lighting"]
    }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory =
      selectedCategory === "all" || image.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Wedding Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by beautiful wedding photos from real celebrations
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search photos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredImages.length} photo{filteredImages.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Card key={image.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div
                className="relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-black/70 text-white">
                    {categories.find(cat => cat.value === image.category)?.label}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold mb-1 line-clamp-1">{image.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  by {image.photographer}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {image.venue}, {image.city}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="w-4 h-4" />
                    {image.likes}
                  </div>
                  <div className="flex gap-1">
                    {image.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No photos found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                  onClick={closeLightbox}
                >
                  <X className="w-4 h-4" />
                </Button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                      <p className="text-muted-foreground">
                        by {selectedImage.photographer} • {selectedImage.venue}, {selectedImage.city}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Heart className="w-5 h-5" />
                      {selectedImage.likes}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedImage.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Heart className="w-4 h-4 mr-2" />
                      Save to Favorites
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Gallery;
