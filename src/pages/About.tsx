import { Heart, Users, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Muhoort
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted companion for planning the perfect Indian wedding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To make Indian wedding planning accessible, beautiful, and stress-free by combining traditional values with modern technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the go-to platform for couples planning authentic Indian weddings that honor tradition while embracing contemporary convenience.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Why Choose Muhoort?</CardTitle>
              <CardDescription>
                We understand the importance of your special day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Traditional Wisdom</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on authentic Hindu traditions and astrological calculations
                  </p>
                </div>
                
                <div className="text-center">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Comprehensive Planning</h3>
                  <p className="text-sm text-muted-foreground">
                    Everything you need from dates to vendors in one place
                  </p>
                </div>
                
                <div className="text-center">
                  <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Trusted Partners</h3>
                  <p className="text-sm text-muted-foreground">
                    Curated network of verified vendors and service providers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start Planning?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of couples who have trusted Muhoort for their perfect wedding
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;