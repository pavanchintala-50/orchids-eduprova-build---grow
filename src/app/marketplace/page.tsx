"use client"

import * as React from "react"
import { 
  Search, 
  Filter, 
  Briefcase, 
  Clock, 
  DollarSign, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  ArrowLeft,
  FileText,
  MessageSquare,
  MoreVertical,
  Download,
  Send
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"

const projects = [
  {
    id: "1",
    title: "Next.js SaaS Platform Development",
    client: "TechFlow Systems",
    budget: "$2,500 - $4,000",
    duration: "1 month",
    posted: "2 hours ago",
    description: "We are looking for a Senior Full-stack Developer to help us build a subscription-based platform using Next.js 14 and Supabase.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    proposals: 12,
    rating: 4.8
  },
  {
    id: "2",
    title: "Brand Identity & UI Design System",
    client: "Lumino Creative",
    budget: "$1,500 - $2,000",
    duration: "2 weeks",
    posted: "5 hours ago",
    description: "Need a talented designer to create a cohesive brand identity and a scalable Figma design system for our new fintech app.",
    tags: ["Figma", "Branding", "UI/UX Design"],
    proposals: 8,
    rating: 5.0
  },
  {
    id: "3",
    title: "AI Chatbot Integration for E-commerce",
    client: "Global Retail Inc.",
    budget: "$3,000 - $5,000",
    duration: "3 weeks",
    posted: "1 day ago",
    description: "Implement an intelligent customer support chatbot using OpenAI's API integrated into our Shopify store.",
    tags: ["OpenAI", "Shopify", "Node.js", "API Integration"],
    proposals: 5,
    rating: 4.6
  }
]

export default function TalentMarketplace() {
  const [view, setView] = React.useState<"listing" | "detail" | "proposal" | "workroom">("listing")
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setView("detail")
  }

  const handleApply = () => {
    setView("proposal")
  }

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Proposal submitted successfully!")
      setView("workroom")
    }, 1500)
  }

  return (
    <div className="container mx-auto max-w-5xl p-6 md:p-8">
      <AnimatePresence mode="wait">
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
                <h1 className="text-3xl font-bold tracking-tight">Talent Marketplace</h1>
                <p className="text-muted-foreground">Find real-world projects and grow your professional portfolio.</p>
              </div>
              <Button onClick={() => toast.info("Post project feature coming soon!")}>
                Post a Project
              </Button>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search projects (e.g. Next.js, UI Design...)" className="pl-9" />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            <div className="grid gap-4">
              {projects.map((project) => (
                <Card 
                  key={project.id} 
                  className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-md"
                  onClick={() => handleProjectClick(project)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{project.client}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            {project.rating}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{project.posted}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/5 px-6 py-4">
                    <div className="flex w-full items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-zinc-600">
                          <DollarSign className="h-4 w-4" />
                          {project.budget}
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-600">
                          <Clock className="h-4 w-4" />
                          {project.duration}
                        </div>
                      </div>
                      <div className="text-muted-foreground">
                        {project.proposals} proposals
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {view === "detail" && selectedProject && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-6"
          >
            <Button 
              variant="ghost" 
              className="mb-2 -ml-2 h-8 gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => setView("listing")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Marketplace
            </Button>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h1 className="text-3xl font-bold">{selectedProject.title}</h1>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" />
                      {selectedProject.client}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      Posted {selectedProject.posted}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      4.8 rating (15 reviews)
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Project Description</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {selectedProject.description}
                    {"\n\n"}
                    We are an established company looking to scale our digital presence. This project requires a developer who is proficient in modern web standards and has experience building high-performance applications.
                    {"\n\n"}
                    Key Responsibilities:
                    • Architect and implement the core platform features.
                    • Ensure responsive design and cross-browser compatibility.
                    • Integrate with existing third-party services.
                    • Collaborate with our design team for UI implementation.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Required Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} className="px-3 py-1 text-sm font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Project Budget</CardTitle>
                    <CardDescription>Fixed price project</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-primary">{selectedProject.budget}</div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estimated time</span>
                        <span className="font-medium">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience level</span>
                        <span className="font-medium">Expert</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Remote</span>
                        <span className="font-medium">Yes</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <Button className="w-full h-11 text-base" onClick={handleApply}>
                      Submit a Proposal
                    </Button>
                    <Button variant="outline" className="w-full h-11 text-base">
                      Save Project
                    </Button>
                    <p className="text-center text-[11px] text-muted-foreground">
                      This project is protected by Eduprova Escrow Services.
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </motion.div>
        )}

        {view === "proposal" && selectedProject && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="mx-auto max-w-2xl space-y-8"
          >
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Submit Your Proposal</h1>
              <p className="text-muted-foreground">Applying for: {selectedProject.title}</p>
            </div>

            <form onSubmit={handleSubmitProposal} className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Proposal Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cover Letter</label>
                    <Textarea 
                      placeholder="Introduce yourself and explain why you're a good fit for this project..." 
                      className="min-h-[200px] resize-none"
                      required
                    />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Bid Amount</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input type="number" placeholder="2500" className="pl-9" required />
                      </div>
                      <p className="text-[11px] text-muted-foreground">Client's budget: {selectedProject.budget}</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Estimated Completion</label>
                      <Input placeholder="e.g. 3 weeks" required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1 h-12"
                  onClick={() => setView("detail")}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 h-12" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {view === "workroom" && selectedProject && (
          <motion.div
            key="workroom"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">Project Active</h1>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none">
                      Milestone 1/3
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">Working with {selectedProject.client}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Manage Contract</Button>
                <Button size="sm">Submit Milestone</Button>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              <div className="lg:col-span-3 space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="p-4 pb-0 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Total Earnings
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="text-2xl font-bold">$4,000.00</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-0 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Escrow Secure
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="text-2xl font-bold">$2,800.00</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-0 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Deadline
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="text-2xl font-bold">12 Days Left</div>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="chat" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="chat">Workroom Chat</TabsTrigger>
                    <TabsTrigger value="milestones">Milestones</TabsTrigger>
                    <TabsTrigger value="files">Files & Deliverables</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="chat" className="space-y-4">
                    <Card className="h-[400px] flex flex-col">
                      <CardHeader className="border-b px-6 py-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">James (TechFlow)</span>
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          </div>
                          <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 overflow-auto p-6 space-y-4">
                        <div className="flex gap-3">
                          <Avatar className="h-8 w-8"><AvatarFallback>JD</AvatarFallback></Avatar>
                          <div className="rounded-2xl rounded-tl-none bg-muted px-4 py-2 text-sm max-w-[80%]">
                            Hi! I've shared the initial requirements doc in the Files tab. Let me know if you have any questions.
                          </div>
                        </div>
                        <div className="flex flex-row-reverse gap-3">
                          <Avatar className="h-8 w-8"><AvatarFallback>ME</AvatarFallback></Avatar>
                          <div className="rounded-2xl rounded-tr-none bg-primary px-4 py-2 text-sm text-primary-foreground max-w-[80%]">
                            Got it, James. Reviewing it now. I'll have the first draft of the architecture by tomorrow morning.
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-4">
                        <div className="relative w-full">
                          <Input placeholder="Type a message..." className="pr-12" />
                          <Button size="icon" className="absolute right-1 top-1 h-8 w-8" variant="ghost">
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="milestones">
                    <div className="space-y-4">
                      {[
                        { id: 1, title: "Initial Architecture & Setup", amount: "$1,200", status: "Completed", date: "Oct 12" },
                        { id: 2, title: "Core Features Development", amount: "$1,800", status: "In Progress", date: "Oct 28" },
                        { id: 3, title: "Testing & Handover", amount: "$1,000", status: "Pending", date: "Nov 05" }
                      ].map((m) => (
                        <Card key={m.id} className={m.status === "In Progress" ? "border-primary bg-primary/5" : ""}>
                          <CardContent className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-4">
                              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
                                m.status === "Completed" ? "bg-emerald-100 text-emerald-700" : 
                                m.status === "In Progress" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                              }`}>
                                {m.id}
                              </div>
                              <div>
                                <h4 className="font-medium">{m.title}</h4>
                                <p className="text-xs text-muted-foreground">Due: {m.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-6 text-sm">
                              <span className="font-bold">{m.amount}</span>
                              <Badge variant={m.status === "Completed" ? "secondary" : "outline"}>{m.status}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-2 h-10">
                      <FileText className="h-4 w-4 text-zinc-500" />
                      <span className="truncate">Requirements.pdf</span>
                      <Download className="ml-auto h-3.5 w-3.5" />
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2 h-10">
                      <FileText className="h-4 w-4 text-zinc-500" />
                      <span className="truncate">Brand_Guidelines.zip</span>
                      <Download className="ml-auto h-3.5 w-3.5" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="secondary" className="w-full text-xs">Request Feedback</Button>
                    <Button variant="secondary" className="w-full text-xs">Pause Contract</Button>
                    <Button variant="ghost" className="w-full text-xs text-destructive hover:text-destructive">Dispute Case</Button>
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
