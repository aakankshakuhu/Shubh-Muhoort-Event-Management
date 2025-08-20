import { useState } from "react";
import { Plus, Minus, Utensils, IndianRupee, Trash2, Calculator } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

interface MenuItem {
  id: number;
  name: string;
  category: "veg" | "non-veg" | "jain";
  type: "starter" | "main" | "dessert" | "beverage";
  price: number;
  quantity: number;
}

const MenuPlanner = () => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [guestCount, setGuestCount] = useState(100);

  const menuCategories = [
    {
      id: "veg",
      name: "Vegetarian",
      color: "bg-green-100 text-green-800",
      icon: "🥬"
    },
    {
      id: "non-veg",
      name: "Non-Vegetarian", 
      color: "bg-red-100 text-red-800",
      icon: "🍖"
    },
    {
      id: "jain",
      name: "Jain",
      color: "bg-orange-100 text-orange-800",
      icon: "🙏"
    }
  ];

  const availableItems: MenuItem[] = [
    // Vegetarian Starters
    { id: 1, name: "Paneer Tikka", category: "veg", type: "starter", price: 250, quantity: 0 },
    { id: 2, name: "Aloo Tikki Chaat", category: "veg", type: "starter", price: 180, quantity: 0 },
    { id: 3, name: "Dahi Puri", category: "veg", type: "starter", price: 150, quantity: 0 },
    { id: 4, name: "Samosa Chaat", category: "veg", type: "starter", price: 120, quantity: 0 },
    
    // Vegetarian Main Course
    { id: 5, name: "Dal Makhani", category: "veg", type: "main", price: 200, quantity: 0 },
    { id: 6, name: "Paneer Butter Masala", category: "veg", type: "main", price: 280, quantity: 0 },
    { id: 7, name: "Veg Biryani", category: "veg", type: "main", price: 320, quantity: 0 },
    { id: 8, name: "Rajma Chawal", category: "veg", type: "main", price: 220, quantity: 0 },
    
    // Non-Vegetarian
    { id: 9, name: "Chicken Tikka", category: "non-veg", type: "starter", price: 350, quantity: 0 },
    { id: 10, name: "Mutton Seekh Kebab", category: "non-veg", type: "starter", price: 450, quantity: 0 },
    { id: 11, name: "Chicken Biryani", category: "non-veg", type: "main", price: 380, quantity: 0 },
    { id: 12, name: "Mutton Curry", category: "non-veg", type: "main", price: 480, quantity: 0 },
    
    // Jain Items
    { id: 13, name: "Jain Samosa", category: "jain", type: "starter", price: 120, quantity: 0 },
    { id: 14, name: "Jain Dal Tadka", category: "jain", type: "main", price: 180, quantity: 0 },
    { id: 15, name: "Jain Veg Pulao", category: "jain", type: "main", price: 250, quantity: 0 },
    
    // Desserts
    { id: 16, name: "Gulab Jamun", category: "veg", type: "dessert", price: 100, quantity: 0 },
    { id: 17, name: "Rasmalai", category: "veg", type: "dessert", price: 120, quantity: 0 },
    { id: 18, name: "Jalebi", category: "veg", type: "dessert", price: 80, quantity: 0 },
    
    // Beverages
    { id: 19, name: "Masala Chai", category: "veg", type: "beverage", price: 50, quantity: 0 },
    { id: 20, name: "Lassi", category: "veg", type: "beverage", price: 80, quantity: 0 },
    { id: 21, name: "Fresh Lime Water", category: "veg", type: "beverage", price: 40, quantity: 0 }
  ];

  const addItem = (item: MenuItem) => {
    const existingItem = selectedItems.find(selected => selected.id === item.id);
    if (existingItem) {
      setSelectedItems(selectedItems.map(selected => 
        selected.id === item.id 
          ? { ...selected, quantity: selected.quantity + 1 }
          : selected
      ));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setSelectedItems(selectedItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setSelectedItems(selectedItems.filter(item => item.id !== id));
  };

  const calculateTotalCost = () => {
    return selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateCostPerPlate = () => {
    const totalCost = calculateTotalCost();
    return guestCount > 0 ? Math.round(totalCost / guestCount) : 0;
  };

  const getFilteredItems = (category: string, type?: string) => {
    return availableItems.filter(item => {
      const categoryMatch = item.category === category;
      const typeMatch = !type || item.type === type;
      return categoryMatch && typeMatch;
    });
  };

  const getCategoryColor = (category: string) => {
    return menuCategories.find(cat => cat.id === category)?.color || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Wedding Menu Planner
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create the perfect menu for your wedding with cost calculations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Selection */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  Select Menu Items
                </CardTitle>
                <CardDescription>
                  Choose from our curated selection of dishes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="veg" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    {menuCategories.map(category => (
                      <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                        <span>{category.icon}</span>
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {menuCategories.map(category => (
                    <TabsContent key={category.id} value={category.id} className="space-y-6">
                      {["starter", "main", "dessert", "beverage"].map(type => {
                        const items = getFilteredItems(category.id, type);
                        if (items.length === 0) return null;
                        
                        return (
                          <div key={type}>
                            <h3 className="text-lg font-semibold mb-3 capitalize">{type}s</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {items.map(item => (
                                <div key={item.id} className="flex items-center justify-between p-3 border rounded-md">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="font-medium">{item.name}</span>
                                      <Badge className={getCategoryColor(item.category)} variant="secondary">
                                        {category.icon}
                                      </Badge>
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                      <IndianRupee className="w-3 h-3" />
                                      {item.price} per plate
                                    </div>
                                  </div>
                                  <Button
                                    onClick={() => addItem(item)}
                                    size="sm"
                                    variant="outline"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Selected Items & Calculation */}
          <div className="space-y-6">
            {/* Guest Count */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Guest Count
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
                    min="1"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Selected Items */}
            <Card>
              <CardHeader>
                <CardTitle>Selected Menu ({selectedItems.length} items)</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedItems.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">
                    No items selected yet
                  </p>
                ) : (
                  <div className="space-y-3">
                    {selectedItems.map(item => (
                      <div key={item.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">{item.name}</span>
                            <Badge className={getCategoryColor(item.category)} variant="secondary">
                              {menuCategories.find(cat => cat.id === item.category)?.icon}
                            </Badge>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <IndianRupee className="w-3 h-3" />
                            {item.price} × {item.quantity} = ₹{item.price * item.quantity}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Cost Summary */}
            {selectedItems.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IndianRupee className="w-5 h-5" />
                    Cost Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Total Menu Cost:</span>
                      <span className="font-medium">₹{calculateTotalCost().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Number of Guests:</span>
                      <span className="font-medium">{guestCount}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Cost per Plate:</span>
                        <span className="text-primary">₹{calculateCostPerPlate()}</span>
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Event Cost:</span>
                        <span className="text-accent">₹{(calculateTotalCost() * guestCount).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4">
                    Save Menu Plan
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuPlanner;