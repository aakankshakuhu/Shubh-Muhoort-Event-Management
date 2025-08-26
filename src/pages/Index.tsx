import { Link } from "react-router-dom";
import {
  Heart,
  Calendar,
  Users,
  MapPin,
  Utensils,
  Palette,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Auspicious Dates",
      description: "Find the perfect wedding dates based on Hindu traditions",
      href: "/dates",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Itinerary Builder",
      description: "Plan all your wedding events from Haldi to Reception",
      href: "/itinerary",
      color: "text-accent",
    },
    {
      icon: MapPin,
      title: "Vendors Directory",
      description: "Discover trusted vendors for every wedding need",
      href: "/vendors",
      color: "text-secondary",
    },
    {
      icon: Utensils,
      title: "Menu Planner",
      description: "Create perfect wedding menus with cost calculations",
      href: "/menu",
      color: "text-primary",
    },
    {
      icon: Palette,
      title: "Themes & Decor",
      description: "Choose from beautiful traditional color themes",
      href: "/themes",
      color: "text-accent",
    },
    {
      icon: Camera,
      title: "Wedding Gallery",
      description: "Browse inspiring wedding photos and ideas",
      href: "/gallery",
      color: "text-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Background Image */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: "url('public/img/muhurat-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-pink-400 fill-current animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Shubh Muhoort
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium">
              Your Auspicious Wedding Planning Companion
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Plan your perfect Indian wedding with traditional values and
              modern convenience. From auspicious dates to vendor management, we
              make your special day truly memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/dates">Find Auspicious Dates</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 text-black border-white hover:bg-white hover:text-primary"
              >
                <Link to="/itinerary">Start Planning</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Your
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Perfect Wedding
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From traditional ceremonies to modern celebrations, plan every
              detail with ease
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-muted w-fit">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link to={feature.href}>Explore {feature.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of couples who have planned their perfect wedding
            with Muhoort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <Link to="/rsvp">Send Invitations</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/contact">Get Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
