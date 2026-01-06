"use client"

import * as React from "react"
import { 
  Users, 
  Star, 
  Calendar, 
  Clock, 
  Video, 
  CheckCircle2, 
  Search, 
  Filter, 
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  MessageSquare,
  Award,
  Globe,
  Languages,
  MoreVertical,
  Play
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

const experts = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Former VP of Product at Stripe",
    rating: 4.9,
    reviews: 124,
    price: "$250/hr",
    specialty: ["Scaling", "FinTech", "Product Strategy"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    bio: "I help founders navigate the transition from Seed to Series B, focusing on product-led growth and infrastructure scaling."
  },
  {
    id: "2",
    name: "Dr. Maya Gupta",
    role: "Technical Architect & AI Lead",
    rating: 5.0,
    reviews: 89,
    price: "$300/hr",
    specialty: ["Machine Learning", "Cloud Arch", "Big Data"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    bio: "Specializing in designing scalable AI solutions and data pipelines for enterprise-level applications."
  },
  {
    id: "3",
    name: "Thomas Mueller",
    role: "Venture Partner & Exit Strategist",
    rating: 4.8,
    reviews: 56,
    price: "$400/hr",
    specialty: ["M&A", "Fundraising", "Business Ops"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    bio: "Helping business owners prepare for high-value exits and strategic partnerships."
  }
]

export default function ExpertAdvisory() {
  const [view, setView] = React.useState<"discovery" | "profile" | "booking" | "confirmation" | "dashboard">("discovery")
  const [selectedExpert, setSelectedExpert] = React.useState<typeof experts[0] | null>(null)
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null)
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null)

  const handleExpertClick = (expert: typeof experts[0]) => {
    setSelectedExpert(expert)
    setView("profile")
  }

  const handleBookSession = () => {
    setView("booking")
  }

  const handleConfirmPayment = () => {
    toast.success("Payment successful! Session booked.")
    setView("confirmation")
  }

  return (
    <div className="container mx-auto max-w-5xl p-6 md:p-8">
      <AnimatePresence mode="wait">
        {view === "discovery" && (
          <motion.div
            key="discovery"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Expert Advisory</h1>
                <p className="text-muted-foreground">Book private sessions with world-class industry leaders.</p>
              </div>
              <Button onClick={() => setView("dashboard")} variant="outline">My Sessions</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4">
              {["All", "Product", "Tech", "Business", "Marketing", "Legal", "Finance"].map((cat) => (
                <Button key={cat} variant={cat === "All" ? "default" : "outline"} className="h-10 text-xs">
                  {cat}
                </Button>
              ))}
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search by name, role, or expertise..." className="pl-9 h-11" />
              </div>
              <Button variant="outline" className="h-11 gap-2">
                <Filter className="h-4 w-4" />
                Advanced Filters
              </Button>
            </div>

            <div className="grid gap-6">
              {experts.map((expert) => (
                <Card 
                  key={expert.id} 
                  className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg"
                  onClick={() => handleExpertClick(expert)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-6 md:flex-row">
                      <Avatar className="h-24 w-24 border-2 border-background ring-2 ring-zinc-100">
                        <AvatarImage src={expert.image} />
                        <AvatarFallback>{expert.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{expert.name}</h3>
                              <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-none px-2 h-5 text-[10px]">VERIFIED</Badge>
                            </div>
                            <p className="text-muted-foreground font-medium">{expert.role}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{expert.price}</div>
                            <div className="flex items-center gap-1 text-sm text-amber-500 font-semibold justify-end">
                              <Star className="h-4 w-4 fill-amber-500" />
                              {expert.rating} ({expert.reviews} reviews)
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                          {expert.bio}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {expert.specialty.map((s) => (
                            <Badge key={s} variant="outline" className="font-normal text-[11px] px-3">
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {view === "profile" && selectedExpert && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <Button variant="ghost" className="gap-2 -ml-2 text-muted-foreground hover:text-foreground" onClick={() => setView("discovery")}>
              <ArrowLeft className="h-4 w-4" />
              Back to Experts
            </Button>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <Avatar className="h-32 w-32 ring-4 ring-zinc-50">
                    <AvatarImage src={selectedExpert.image} />
                    <AvatarFallback>{selectedExpert.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold">{selectedExpert.name}</h1>
                    <p className="text-xl text-muted-foreground font-medium">{selectedExpert.role}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
                      <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-amber-500 text-amber-500" /> 4.9 (124 reviews)</div>
                      <div className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-500" /> Background Verified</div>
                      <div className="flex items-center gap-1"><Globe className="h-4 w-4" /> Global Advisory</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold border-b pb-4">About the Expert</h2>
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    {selectedExpert.bio}
                    {"\n\n"}
                    With over 15 years in the tech industry, I've seen it all. I specialize in helping startups move from early-stage product development to high-scale operational excellence. My sessions are direct, actionable, and tailored to your specific current challenges.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold border-b pb-4">Specialties</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { title: "Product Strategy", desc: "Developing clear roadmaps and value propositions." },
                      { title: "Team Building", desc: "Hiring and structuring high-performance engineering teams." },
                      { title: "GTM Execution", desc: "Scaling user acquisition through product-led mechanics." },
                      { title: "Operational Scaling", desc: "Setting up systems for the next stage of growth." }
                    ].map((s) => (
                      <Card key={s.title} className="bg-zinc-50 border-none p-4">
                        <div className="font-bold text-zinc-900 mb-1">{s.title}</div>
                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="sticky top-24 border-zinc-200 shadow-xl shadow-zinc-200/50">
                  <CardHeader>
                    <CardTitle>Session Details</CardTitle>
                    <CardDescription>Private 1:1 consultation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-3xl font-bold text-primary">{selectedExpert.price}<span className="text-sm font-normal text-muted-foreground">/hour</span></div>
                    
                    <ul className="space-y-3">
                      {[
                        "Live Video Consultation",
                        "Summary Report Included",
                        "Follow-up Message Support",
                        "Full Refund if not Satisfied"
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 font-medium">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full h-12 text-base" onClick={handleBookSession}>
                      Book Now
                    </Button>
                    <p className="text-center text-[11px] text-muted-foreground">
                      * 24-hour cancellation policy applies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        )}

        {view === "booking" && selectedExpert && (
          <motion.div
            key="booking"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Schedule Your Session</h1>
              <p className="text-muted-foreground">Booking with {selectedExpert.name}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-5">
              <div className="md:col-span-3 space-y-8">
                <Card>
                  <CardHeader className="border-b">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Select Date & Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-muted-foreground mb-4">
                      {["S", "M", "T", "W", "T", "F", "S"].map(d => <div key={d}>{d}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 31 }).map((_, i) => (
                        <Button 
                          key={i} 
                          variant={i + 1 === 12 ? "default" : "outline"} 
                          className="h-9 w-full p-0 text-xs font-medium"
                          disabled={i + 1 < 12}
                          onClick={() => setSelectedDate(`Oct ${i + 1}`)}
                        >
                          {i + 1}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      <h4 className="text-sm font-bold text-zinc-900">Available Times (GMT-4)</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"].map(time => (
                          <Button 
                            key={time} 
                            variant={selectedTime === time ? "default" : "outline"} 
                            className="h-10 text-xs"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-2 space-y-6">
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-base">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Expert Session (1hr)</span>
                      <span className="font-bold">{selectedExpert.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Service Fee</span>
                      <span className="font-bold">$12.50</span>
                    </div>
                    <div className="flex justify-between pt-4 border-t font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">$262.50</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 rounded-lg border-2 border-primary bg-primary/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-10 bg-zinc-900 rounded flex items-center justify-center text-[8px] text-white font-bold">VISA</div>
                        <span className="text-sm font-medium">•••• 4242</span>
                      </div>
                      <Badge variant="outline" className="text-[10px] h-5">Primary</Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full text-xs text-primary">+ Add New Card</Button>
                    <Button className="w-full h-12 mt-4" onClick={handleConfirmPayment}>Pay & Confirm</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        )}

        {view === "confirmation" && selectedExpert && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center space-y-8 py-12"
          >
            <div className="h-20 w-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Session Confirmed!</h1>
              <p className="text-xl text-muted-foreground max-w-md mx-auto">
                Your session with {selectedExpert.name} is scheduled for 
                <span className="text-foreground font-bold"> Oct 12 at 10:30 AM</span>.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-8">
              <Card className="p-6 text-left space-y-3">
                <Video className="h-6 w-6 text-primary" />
                <h4 className="font-bold">Meeting Link</h4>
                <p className="text-sm text-muted-foreground">Zoom link will be active 5 mins before the start.</p>
                <Button variant="outline" size="sm" className="w-full">Add to Google Calendar</Button>
              </Card>
              <Card className="p-6 text-left space-y-3">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h4 className="font-bold">Pre-session Chat</h4>
                <p className="text-sm text-muted-foreground">Share your goals or questions with {selectedExpert.name[0]}.</p>
                <Button size="sm" className="w-full">Open Chat</Button>
              </Card>
            </div>

            <div className="pt-10">
              <Button variant="ghost" onClick={() => setView("dashboard")}>Go to Session Dashboard</Button>
            </div>
          </motion.div>
        )}

        {view === "dashboard" && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">My Advisory Dashboard</h1>
                <p className="text-muted-foreground">Manage your upcoming and past consultations.</p>
              </div>
              <Button onClick={() => setView("discovery")}>Book New Session</Button>
            </div>

            <div className="grid gap-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                Upcoming Sessions
              </h2>
              
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                        <AvatarFallback>AR</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-lg">Alex Rivera</h4>
                        <p className="text-sm text-muted-foreground">Product Strategy Session</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col md:flex-row gap-8 md:justify-center">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Oct 12, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">10:30 AM (GMT-4)</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Chat
                      </Button>
                      <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                        <Play className="h-4 w-4" />
                        Join Meeting
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="pt-10 space-y-6">
                <h2 className="text-xl font-bold text-muted-foreground">Past Consultations</h2>
                <div className="space-y-4">
                  {[
                    { name: "Dr. Maya Gupta", date: "Sep 28, 2024", type: "Technical Architecture" },
                    { name: "Thomas Mueller", date: "Sep 15, 2024", type: "Equity Planning" }
                  ].map((s) => (
                    <Card key={s.name} className="opacity-75 grayscale-[0.5] hover:opacity-100 hover:grayscale-0 transition-all">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-zinc-200" />
                          <div>
                            <div className="font-bold text-sm">{s.name}</div>
                            <div className="text-xs text-muted-foreground">{s.type}</div>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-muted-foreground">{s.date}</div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="text-xs">View Summary</Button>
                          <Button variant="ghost" size="sm" className="text-xs">Rebook</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
