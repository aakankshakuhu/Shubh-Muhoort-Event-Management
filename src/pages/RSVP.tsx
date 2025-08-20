import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    guests: "1",
    dietaryRequirements: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    const existingRSVPs = JSON.parse(localStorage.getItem("rsvps") || "[]");
    const newRSVP = { ...formData, id: Date.now(), submittedAt: new Date().toISOString() };
    existingRSVPs.push(newRSVP);
    localStorage.setItem("rsvps", JSON.stringify(existingRSVPs));
    
    toast({
      title: "RSVP Submitted Successfully!",
      description: "Thank you for your response. We look forward to celebrating with you!"
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      attendance: "",
      guests: "1",
      dietaryRequirements: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wedding RSVP
            </h1>
            <p className="text-lg text-muted-foreground">
              Please confirm your attendance for our special day
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Response Required</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Select value={formData.guests} onValueChange={(value) => setFormData({...formData, guests: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5].map(num => (
                          <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="attendance">Will you be attending? *</Label>
                  <Select value={formData.attendance} onValueChange={(value) => setFormData({...formData, attendance: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, I'll be there!</SelectItem>
                      <SelectItem value="no">Sorry, can't make it</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dietary">Dietary Requirements</Label>
                  <Input
                    id="dietary"
                    value={formData.dietaryRequirements}
                    onChange={(e) => setFormData({...formData, dietaryRequirements: e.target.value})}
                    placeholder="Veg, Jain, allergies, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="message">Special Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Any special wishes or notes..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit RSVP
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default RSVP;