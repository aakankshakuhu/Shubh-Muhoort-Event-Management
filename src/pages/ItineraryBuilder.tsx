import { useState } from "react";
import { Plus, Calendar, Clock, MapPin, Users, Edit2, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  guests: number;
  type: "haldi" | "mehendi" | "sangam" | "shaadi" | "reception" | "other";
}

const ItineraryBuilder = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      name: "Haldi Ceremony",
      date: "2024-12-20",
      time: "10:00 AM",
      venue: "Bride's Home",
      description: "Traditional turmeric ceremony for both bride and groom",
      guests: 50,
      type: "haldi"
    },
    {
      id: 2,
      name: "Mehendi Night",
      date: "2024-12-21",
      time: "6:00 PM",
      venue: "Garden Venue",
      description: "Henna ceremony with music and dancing",
      guests: 100,
      type: "mehendi"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    venue: "",
    description: "",
    guests: "",
    type: "other" as Event["type"]
  });

  const eventTypes = [
    { value: "haldi", label: "Haldi", color: "bg-yellow-500" },
    { value: "mehendi", label: "Mehendi", color: "bg-green-500" },
    { value: "sangam", label: "Sangam", color: "bg-orange-500" },
    { value: "shaadi", label: "Shaadi", color: "bg-red-500" },
    { value: "reception", label: "Reception", color: "bg-purple-500" },
    { value: "other", label: "Other", color: "bg-gray-500" }
  ];

  const getEventTypeColor = (type: Event["type"]) => {
    return eventTypes.find(t => t.value === type)?.color || "bg-gray-500";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const eventData: Event = {
      id: editingEvent ? editingEvent.id : Date.now(),
      name: formData.name,
      date: formData.date,
      time: formData.time,
      venue: formData.venue,
      description: formData.description,
      guests: parseInt(formData.guests),
      type: formData.type
    };

    if (editingEvent) {
      setEvents(events.map(event => event.id === editingEvent.id ? eventData : event));
    } else {
      setEvents([...events, eventData]);
    }

    resetForm();
    setIsDialogOpen(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      date: "",
      time: "",
      venue: "",
      description: "",
      guests: "",
      type: "other"
    });
    setEditingEvent(null);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      name: event.name,
      date: event.date,
      time: event.time,
      venue: event.venue,
      description: event.description,
      guests: event.guests.toString(),
      type: event.type
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wedding Itinerary
            </h1>
            <p className="text-muted-foreground">
              Plan and organize all your wedding events in one place
            </p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm} className="mt-4 sm:mt-0">
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>
                  {editingEvent ? "Edit Event" : "Add New Event"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Event Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Event Type</Label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value as Event["type"]})}
                      className="w-full px-3 py-2 border border-input rounded-md"
                    >
                      {eventTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="venue">Venue</Label>
                    <Input
                      id="venue"
                      value={formData.venue}
                      onChange={(e) => setFormData({...formData, venue: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests">Expected Guests</Label>
                    <Input
                      id="guests"
                      type="number"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingEvent ? "Update Event" : "Add Event"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Events Timeline */}
        <div className="space-y-6">
          {sortedEvents.map((event, index) => (
            <Card key={event.id} className="relative overflow-hidden">
              {/* Event Type Color Bar */}
              <div className={`absolute left-0 top-0 w-1 h-full ${getEventTypeColor(event.type)}`} />
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{event.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {eventTypes.find(t => t.value === event.type)?.label}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(event)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(event.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{new Date(event.date).toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{event.venue}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 text-sm">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{event.guests} guests expected</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No events planned yet</h3>
            <p className="text-muted-foreground">
              Start building your wedding itinerary by adding your first event
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ItineraryBuilder;