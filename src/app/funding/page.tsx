"use client"

import * as React from "react"
import { 
  Lightbulb, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Plus, 
  Search, 
  Filter,
  ChevronRight,
  Target,
  FileText,
  Calendar,
  MessageSquare,
  ArrowLeft,
  CheckCircle2,
  Lock,
  PieChart,
  BarChart3
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"

const ideas = [
  {
    id: "1",
    title: "EcoSphere: AI-Powered Waste Sorting",
    founder: "Sarah Chen",
    stage: "Seed",
    fundingGoal: "$500,000",
    raised: "$125,000",
    description: "EcoSphere uses computer vision to automate industrial waste sorting, increasing recycling efficiency by 40%.",
    category: "Sustainability",
    impact: "High",
    backers: 12
  },
  {
    id: "2",
    title: "HealthLink: Interoperable Patient Data",
    founder: "Dr. Marcus Thorne",
    stage: "Series A",
    fundingGoal: "$2,000,000",
    raised: "$850,000",
    description: "A secure blockchain-based platform for seamless patient data transfer between hospitals and private clinics.",
    category: "HealthTech",
    impact: "Moderate",
    backers: 8
  },
  {
    id: "3",
    title: "EduLevel: Personalizing K-12 Learning",
    founder: "Elena Rodriguez",
    stage: "Pre-seed",
    fundingGoal: "$150,000",
    raised: "$45,000",
    description: "An adaptive learning engine that tailors curriculum based on a student's cognitive processing speed.",
    category: "EdTech",
    impact: "High",
    backers: 5
  }
]

export default function IdeaFundingHub() {
  const [view, setView] = React.useState<"home" | "submit" | "listing" | "detail" | "discuss">("home")
  const [step, setStep] = React.useState(1)
  const [selectedIdea, setSelectedIdea] = React.useState<typeof ideas[0] | null>(null)

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1)
    else {
      toast.success("Idea submitted for review!")
      setView("home")
      setStep(1)
    }
  }

  const handleIdeaClick = (idea: typeof ideas[0]) => {
    setSelectedIdea(idea)
    setView("detail")
  }

  return (
    <div className="container mx-auto max-w-6xl p-6 md:p-8">
      <AnimatePresence mode="wait">
        {view === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5">
                IDEA FUNDING HUB
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Where vision meets capital.</h1>
              <p className="text-lg text-muted-foreground">
                Whether you're building the next big thing or looking to back it, 
                Eduprova provides the professional ecosystem for innovation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="group relative overflow-hidden border-zinc-200 transition-all hover:shadow-2xl hover:shadow-amber-500/10">
                <CardHeader className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-3xl">Raise Capital</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Submit your pitch, connect with strategic investors, and scale your vision with expert guidance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-3 mb-8">
                    {["Vetted Investor Network", "Pitch Deck Support", "Equity Management"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-zinc-600">
                        <CheckCircle2 className="h-5 w-5 text-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full h-12 text-base bg-amber-600 hover:bg-amber-700" onClick={() => setView("submit")}>
                    Submit My Idea
                  </Button>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-zinc-200 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                <CardHeader className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-3xl">Invest in Innovation</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Discover high-potential startups and ideas vetted by our expert committee and community.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-3 mb-8">
                    {["Curated Deal Flow", "Transparent Due Diligence", "Direct Founder Access"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-zinc-600">
                        <CheckCircle2 className="h-5 w-5 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700" onClick={() => setView("listing")}>
                    Browse Opportunities
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}

        {view === "submit" && (
          <motion.div
            key="submit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setView("home")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex-1">
                <div className="flex justify-between items-end mb-2">
                  <h2 className="text-2xl font-bold">Submit Your Idea</h2>
                  <span className="text-sm font-medium text-muted-foreground">Step {step} of 3</span>
                </div>
                <Progress value={(step / 3) * 100} className="h-2" />
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Idea / Startup Title</label>
                      <Input placeholder="Enter the name of your venture" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Elevator Pitch (One sentence)</label>
                      <Input placeholder="e.g. Uber for space travel" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <Select>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fintech">FinTech</SelectItem>
                          <SelectItem value="edtech">EdTech</SelectItem>
                          <SelectItem value="health">HealthTech</SelectItem>
                          <SelectItem value="sustainability">Sustainability</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Problem Statement</label>
                      <Textarea placeholder="What major problem are you solving?" className="min-h-[120px] resize-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Solution</label>
                      <Textarea placeholder="How does your idea solve this problem?" className="min-h-[120px] resize-none" />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Funding Goal ($)</label>
                        <Input type="number" placeholder="500000" className="h-11" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Current Stage</label>
                        <Select>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select stage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ideation">Ideation</SelectItem>
                            <SelectItem value="mvp">MVP</SelectItem>
                            <SelectItem value="seed">Seed</SelectItem>
                            <SelectItem value="series-a">Series A</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2 border-2 border-dashed border-zinc-200 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <FileText className="h-8 w-8 mx-auto text-zinc-400 mb-2" />
                      <p className="font-medium">Upload Pitch Deck</p>
                      <p className="text-xs text-muted-foreground">PDF, PPTX max 10MB</p>
                    </div>
                  </motion.div>
                )}
              </CardContent>
              <CardFooter className="px-8 pb-8 pt-0 flex justify-between gap-4">
                <Button variant="outline" className="flex-1 h-12" onClick={() => setStep(step - 1)} disabled={step === 1}>
                  Previous
                </Button>
                <Button className="flex-1 h-12" onClick={handleNextStep}>
                  {step === 3 ? "Submit for Review" : "Continue"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {view === "listing" && (
          <motion.div
            key="listing"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Investment Opportunities</h1>
                <p className="text-muted-foreground">Discover and back the most promising ventures on Eduprova.</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Button onClick={() => setView("home")}>Dashboard</Button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ideas.map((idea) => (
                <Card 
                  key={idea.id} 
                  className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg flex flex-col"
                  onClick={() => handleIdeaClick(idea)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-primary/10 text-primary border-none hover:bg-primary/20">
                        {idea.category}
                      </Badge>
                      <Badge variant="outline" className="font-medium">{idea.stage}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {idea.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">
                      {idea.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Raised: <span className="text-foreground font-semibold">{idea.raised}</span></span>
                        <span className="text-muted-foreground">Target: {idea.fundingGoal}</span>
                      </div>
                      <Progress value={(parseInt(idea.raised.replace(/[^0-9]/g, "")) / parseInt(idea.fundingGoal.replace(/[^0-9]/g, ""))) * 100} className="h-1.5" />
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {idea.backers} backers
                    </div>
                    <div className="font-medium text-primary">View Pitch</div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {view === "detail" && selectedIdea && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <Button variant="ghost" className="gap-2 -ml-2 text-muted-foreground hover:text-foreground" onClick={() => setView("listing")}>
              <ArrowLeft className="h-4 w-4" />
              Back to Opportunities
            </Button>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none">Verified Pitch</Badge>
                    <span className="text-sm text-muted-foreground">Updated 2 days ago</span>
                  </div>
                  <h1 className="text-4xl font-bold">{selectedIdea.title}</h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {selectedIdea.description}
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Card className="bg-zinc-50 border-none">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">The Problem</CardTitle>
                    </CardHeader>
                    <CardContent className="text-zinc-700 leading-relaxed">
                      Current industrial processes lose billions in non-recycled materials due to manual sorting errors and high labor costs.
                    </CardContent>
                  </Card>
                  <Card className="bg-zinc-50 border-none">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">The Solution</CardTitle>
                    </CardHeader>
                    <CardContent className="text-zinc-700 leading-relaxed">
                      Our proprietary AI model identifies 50+ material types in real-time with 99.2% accuracy, reducing costs by 60%.
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Key Metrics</h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="p-4 rounded-xl border bg-white space-y-1">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Users className="h-4 w-4" />
                        Target Market
                      </div>
                      <div className="text-xl font-bold">$12.4B</div>
                    </div>
                    <div className="p-4 rounded-xl border bg-white space-y-1">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <BarChart3 className="h-4 w-4" />
                        Monthly Rev
                      </div>
                      <div className="text-xl font-bold">$15,200</div>
                    </div>
                    <div className="p-4 rounded-xl border bg-white space-y-1">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <PieChart className="h-4 w-4" />
                        Equity Offered
                      </div>
                      <div className="text-xl font-bold">8.5%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="sticky top-24 border-zinc-200">
                  <CardHeader>
                    <CardTitle>Funding Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-3xl font-bold text-primary">{selectedIdea.raised}</span>
                        <span className="text-sm text-muted-foreground">of {selectedIdea.fundingGoal}</span>
                      </div>
                      <Progress value={25} className="h-3" />
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Investors</span>
                        <span className="font-semibold">{selectedIdea.backers}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Days left</span>
                        <span className="font-semibold">18 Days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Minimum Ticket</span>
                        <span className="font-semibold">$5,000</span>
                      </div>
                    </div>

                    <Button className="w-full h-12 text-base" onClick={() => setView("discuss")}>
                      Express Interest
                    </Button>
                    <Button variant="outline" className="w-full h-12 text-base gap-2">
                      <FileText className="h-4 w-4" />
                      Download Pitch Deck
                    </Button>
                    <p className="text-[11px] text-center text-muted-foreground">
                      * Investments carry risk. Vetting is not a guarantee of success.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        )}

        {view === "discuss" && selectedIdea && (
          <motion.div
            key="discuss"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => setView("detail")}>
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Discussion with {selectedIdea.founder}</h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" />
                    Secure, encrypted channel
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-100 px-3 py-1">
                Interest Logged
              </Badge>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card className="h-[500px] flex flex-col">
                  <CardHeader className="border-b px-6 py-4 bg-zinc-50/50">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        SC
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Sarah Chen</div>
                        <div className="text-[11px] text-muted-foreground">Active now • Founder of EcoSphere</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-auto p-6 space-y-4">
                    <div className="text-center py-4">
                      <Badge variant="outline" className="text-[10px] text-muted-foreground uppercase tracking-widest border-none">Today</Badge>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-zinc-200" />
                      <div className="rounded-2xl rounded-tl-none bg-muted px-4 py-2 text-sm max-w-[80%]">
                        Thank you for expressing interest in EcoSphere! I'd love to walk you through our technical architecture and answer any questions about our Q4 roadmap.
                      </div>
                    </div>
                    <div className="flex flex-row-reverse gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary" />
                      <div className="rounded-2xl rounded-tr-none bg-primary px-4 py-2 text-sm text-primary-foreground max-w-[80%]">
                        Hi Sarah, I'm particularly interested in your material identification model's performance in high-humidity environments. Let's schedule a deep dive.
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <div className="relative w-full">
                      <Input placeholder="Type your message..." className="pr-20 h-11" />
                      <div className="absolute right-1 top-1 flex gap-1">
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground"><Plus className="h-5 w-5" /></Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-primary"><MessageSquare className="h-5 w-5" /></Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Schedule a Call</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Founder has shared their availability for a 30min introduction call.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Tomorrow, 10:00", "Tomorrow, 14:30", "Wed, 09:00", "Wed, 16:00"].map(time => (
                        <Button key={time} variant="outline" className="text-[11px] h-9 px-2">{time}</Button>
                      ))}
                    </div>
                    <Button className="w-full h-10 gap-2">
                      <Calendar className="h-4 w-4" />
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Due Diligence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start text-xs h-9 px-2 hover:bg-white">View Cap Table</Button>
                    <Button variant="ghost" className="w-full justify-start text-xs h-9 px-2 hover:bg-white">Technical Audit Report</Button>
                    <Button variant="ghost" className="w-full justify-start text-xs h-9 px-2 hover:bg-white">Company Registration</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
