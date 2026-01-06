"use client"

import * as React from "react"
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  ArrowRight, 
  Plus, 
  Calendar, 
  Search, 
  ChevronRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowLeft,
  Share2,
  PieChart,
  Globe,
  MousePointer2,
  Activity
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"

export default function AudienceBoost() {
  const [view, setView] = React.useState<"home" | "submit" | "estimate" | "dashboard">("home")
  const [audienceSize, setAudienceSize] = React.useState(5000)
  const [isEstimating, setIsEstimating] = React.useState(false)

  const handleStartBoost = () => {
    setView("submit")
  }

  const handleSeeEstimate = () => {
    setIsEstimating(true)
    setTimeout(() => {
      setIsEstimating(false)
      setView("estimate")
    }, 1200)
  }

  const handleLaunchCampaign = () => {
    toast.success("Campaign launched successfully!")
    setView("dashboard")
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-10 border-b">
              <div className="space-y-4 max-w-2xl">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-4 py-1">
                  GROWTH ENGINE
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Boost your audience.</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Scale your reach for webinars, workshops, and product launches with our targeted growth engine.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="h-14 px-8 text-lg gap-2 bg-emerald-600 hover:bg-emerald-700" onClick={handleStartBoost}>
                    <Plus className="h-5 w-5" />
                    New Campaign
                  </Button>
                  <Button variant="outline" className="h-14 px-8 text-lg" onClick={() => setView("dashboard")}>
                    Manage active campaigns
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <Card className="w-80 border-none shadow-2xl relative">
                  <CardHeader className="p-6">
                    <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Real-time Impact</CardTitle>
                    <div className="text-4xl font-bold pt-2">+12.4k</div>
                    <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      24% increase vs last week
                    </p>
                  </CardHeader>
                  <CardContent className="p-0 border-t">
                    <div className="h-32 w-full bg-emerald-50/50 flex items-end gap-1 p-4">
                      {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                        <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm" style={{ height: `${h}%` }}>
                          <div className="w-full bg-emerald-500 rounded-t-sm transition-all duration-1000" style={{ height: `${h-20}%` }} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Targeted Outreach", desc: "Reach professionals matching your event's specific niche and expertise level.", icon: Target, color: "text-blue-600", bg: "bg-blue-50" },
                { title: "Smart Placement", desc: "Automated promotion across relevant Eduprova communities and dashboards.", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
                { title: "Conversion Focus", desc: "Optimized landing pages and reminders to ensure high registration-to-attendance.", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" }
              ].map((feature) => (
                <div key={feature.title} className="space-y-4">
                  <div className={`h-12 w-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {view === "submit" && (
          <motion.div
            key="submit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-3xl mx-auto space-y-10"
          >
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setView("home")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-3xl font-bold">Campaign Details</h1>
            </div>

            <Card className="border-zinc-200">
              <CardContent className="p-8 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <div className="h-6 w-1 bg-emerald-500 rounded-full" />
                    1. What are you promoting?
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {["Webinar", "Workshop", "Product Launch"].map(type => (
                      <div key={type} className="relative cursor-pointer group">
                        <input type="radio" name="type" className="peer sr-only" id={type} />
                        <label htmlFor={type} className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-zinc-100 peer-checked:border-emerald-500 peer-checked:bg-emerald-50/50 hover:border-zinc-200 transition-all text-center">
                          <Globe className="h-6 w-6 mb-2 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                          <span className="text-sm font-semibold">{type}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <div className="h-6 w-1 bg-emerald-500 rounded-full" />
                    2. Event Information
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Event Title</label>
                      <Input placeholder="e.g. Masterclass: Scaling SaaS in 2024" className="h-11" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Date & Time</label>
                        <Input type="datetime-local" className="h-11" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Target Audience Role</label>
                        <Select>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select target role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="founder">Founders / CEOs</SelectItem>
                            <SelectItem value="dev">Software Engineers</SelectItem>
                            <SelectItem value="design">Product Designers</SelectItem>
                            <SelectItem value="market">Marketers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <div className="h-6 w-1 bg-emerald-500 rounded-full" />
                    3. Promotion Budget
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Daily Budget: <span className="text-emerald-600 font-bold">${(audienceSize / 100).toFixed(0)}</span></label>
                        <span className="text-sm text-muted-foreground">Est. Reach: {audienceSize.toLocaleString()} professionals</span>
                      </div>
                      <input 
                        type="range" 
                        min="1000" 
                        max="50000" 
                        step="1000" 
                        value={audienceSize}
                        onChange={(e) => setAudienceSize(parseInt(e.target.value))}
                        className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button className="w-full h-12 text-base bg-emerald-600 hover:bg-emerald-700" onClick={handleSeeEstimate} disabled={isEstimating}>
                  {isEstimating ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    "Review Estimate"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {view === "estimate" && (
          <motion.div
            key="estimate"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Promotion Estimate</h1>
              <p className="text-muted-foreground">Here's what to expect from your campaign.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-8 space-y-6 border-emerald-500 shadow-xl shadow-emerald-500/5">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Estimated Performance</h3>
                  <p className="text-sm text-muted-foreground">Based on current platform traffic and audience engagement.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-50 space-y-1">
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Total Reach</div>
                    <div className="text-2xl font-bold">{audienceSize.toLocaleString()}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 space-y-1">
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Est. Clicks</div>
                    <div className="text-2xl font-bold">{(audienceSize * 0.045).toFixed(0)}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 space-y-1">
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Registration</div>
                    <div className="text-2xl font-bold">{(audienceSize * 0.012).toFixed(0)}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 space-y-1">
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Cost per Reg</div>
                    <div className="text-2xl font-bold text-emerald-600">${((audienceSize / 100) / (audienceSize * 0.012)).toFixed(2)}</div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-bold text-sm">Included Promotion Channels:</h4>
                  <ul className="space-y-3">
                    {[
                      "Sidebar featured placement",
                      "Community newsletter mention",
                      "Targeted dashboard notifications",
                      "Priority search results"
                    ].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-zinc-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <div className="space-y-6">
                <Card className="p-8 space-y-6">
                  <h3 className="text-lg font-bold">Launch Summary</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Campaign Duration</span>
                      <span className="font-medium">7 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Daily Budget</span>
                      <span className="font-medium">${(audienceSize / 100).toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between pt-4 border-t font-bold text-lg">
                      <span>Total Campaign Cost</span>
                      <span className="text-primary">${((audienceSize / 100) * 7).toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full h-12 text-base bg-emerald-600 hover:bg-emerald-700" onClick={handleLaunchCampaign}>
                    Launch Campaign Now
                  </Button>
                  <Button variant="ghost" className="w-full h-10" onClick={() => setView("submit")}>
                    Modify Details
                  </Button>
                </Card>
                
                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 flex gap-4">
                  <Zap className="h-6 w-6 text-amber-600 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-amber-900">Eduprova Pro Benefit</div>
                    <p className="text-xs text-amber-800 mt-1">You save 15% on all audience boost campaigns as a Pro member.</p>
                  </div>
                </div>
              </div>
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
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Campaign Dashboard</h1>
                <p className="text-muted-foreground">Real-time performance of your active audience boosts.</p>
              </div>
              <Button onClick={() => setView("submit")} className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                { label: "Total Reach", value: "24,502", change: "+12%", icon: Users },
                { label: "Total Clicks", value: "1,245", change: "+8%", icon: MousePointer2 },
                { label: "Registrations", value: "312", change: "+15%", icon: CheckCircle2 },
                { label: "Conv. Rate", value: "4.8%", change: "+2%", icon: Activity }
              ].map((stat) => (
                <Card key={stat.label} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-zinc-50 flex items-center justify-center text-zinc-400">
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase font-bold tracking-wider">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-xl font-bold">Active Campaign</h2>
              <Card className="overflow-hidden border-emerald-500/20">
                <CardHeader className="bg-zinc-50 border-b p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white border flex items-center justify-center">
                        <Globe className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Masterclass: Scaling SaaS in 2024</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-100">Active</Badge>
                          <span className="text-xs text-muted-foreground">Day 3 of 7</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="text-destructive">Pause</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex justify-between items-end">
                        <h5 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Reach Progress</h5>
                        <span className="text-sm font-medium">8,402 / 15,000 Target</span>
                      </div>
                      <Progress value={56} className="h-3 bg-zinc-100" />
                      
                      <div className="h-48 w-full mt-6 bg-zinc-50 rounded-xl p-4 flex items-end gap-2">
                        {Array.from({ length: 14 }).map((_, i) => (
                          <div key={i} className="flex-1 bg-emerald-500/20 rounded-sm" style={{ height: `${20 + Math.random() * 80}%` }} />
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6 border-l pl-6">
                      <h5 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Real-time Insights</h5>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Active Views</span>
                          <span className="text-sm font-bold">142</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Shares</span>
                          <span className="text-sm font-bold">28</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Link CTR</span>
                          <span className="text-sm font-bold text-emerald-600">5.2%</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full gap-2">
                        <Share2 className="h-4 w-4" />
                        Share Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
