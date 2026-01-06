"use client"

import { 
  Briefcase, 
  Lightbulb, 
  Users, 
  Zap, 
  ArrowRight,
  Rocket,
  TrendingUp,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const modules = [
  {
    id: "marketplace",
    title: "Talent Marketplace",
    description: "Connect with high-vetted freelancers for your business projects or find structured freelance work.",
    icon: Briefcase,
    cta: "Explore Marketplace",
    href: "/marketplace",
    color: "text-[#AD46FF]",
    bgColor: "bg-[#AD46FF]/10",
    glowColor: "group-hover:shadow-[#AD46FF]/15",
    borderColor: "group-hover:border-[#AD46FF]/30",
    accentBg: "bg-[#AD46FF]/5",
    features: ["Vetted Talent", "Secure Payments", "Project Management"]
  },
  {
    id: "funding",
    title: "Idea Funding Hub",
    description: "A professional bridge between ambitious founders and strategic investors to scale innovation.",
    icon: Lightbulb,
    cta: "Raise or Invest",
    href: "/funding",
    color: "text-[#AD46FF]",
    bgColor: "bg-[#AD46FF]/10",
    glowColor: "group-hover:shadow-[#AD46FF]/15",
    borderColor: "group-hover:border-[#AD46FF]/30",
    accentBg: "bg-[#AD46FF]/5",
    features: ["Pitch Decks", "Investor Matching", "Equity Management"]
  },
  {
    id: "experts",
    title: "Expert Advisory",
    description: "Book high-impact, paid consultations with verified industry leaders and experienced entrepreneurs.",
    icon: Users,
    cta: "Book a Session",
    href: "/experts",
    color: "text-[#AD46FF]",
    bgColor: "bg-[#AD46FF]/10",
    glowColor: "group-hover:shadow-[#AD46FF]/15",
    borderColor: "group-hover:border-[#AD46FF]/30",
    accentBg: "bg-[#AD46FF]/5",
    features: ["1:1 Mentorship", "Technical Reviews", "Strategic Planning"]
  },
  {
    id: "boost",
    title: "Audience Boost",
    description: "Scale your reach for webinars, workshops, and product launches with our targeted growth engine.",
    icon: TrendingUp,
    cta: "Boost Your Reach",
    href: "/boost",
    color: "text-[#AD46FF]",
    bgColor: "bg-[#AD46FF]/10",
    glowColor: "group-hover:shadow-[#AD46FF]/15",
    borderColor: "group-hover:border-[#AD46FF]/30",
    accentBg: "bg-[#AD46FF]/5",
    features: ["Event Promotion", "Analytics Dashboard", "Conversion Tracking"]
  }
]

export default function BuildGrowHub() {
  return (
    <div className="relative min-h-screen bg-[#FBFBFE] selection:bg-[#AD46FF]/10">
      {/* Enterprise Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#AD46FF]/5 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[grid-linear-gradient(to_right,#AD46FF05_1px,transparent_1px),grid-linear-gradient(to_bottom,#AD46FF05_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#AD46FF03_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-20 space-y-8 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-8 w-8 rounded-lg bg-[#AD46FF]/10 flex items-center justify-center border border-[#AD46FF]/20 shadow-[0_0_15px_rgba(173,70,255,0.1)]">
              <Zap className="h-4 w-4 fill-[#AD46FF] stroke-[#AD46FF]" />
            </div>
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#AD46FF]">BUILD & GROW</span>
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-extrabold tracking-tight text-zinc-950 md:text-7xl lg:text-8xl !leading-[1.05]"
            >
              Empower your <br />
              <span className="text-zinc-400">professional</span> journey.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-500 md:text-2xl leading-relaxed max-w-2xl font-medium"
            >
              Everything you need to launch, scale, and lead in your industry. Choose a module to begin your next phase of growth.
            </motion.p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex h-full"
            >
              <Card className={`group relative flex w-full flex-col overflow-hidden rounded-[20px] border-[#AD46FF]/10 bg-white/60 backdrop-blur-xl transition-all duration-500 hover:border-[#AD46FF]/30 hover:shadow-[0_20px_50px_rgba(173,70,255,0.12)] hover:-translate-y-2 ${module.glowColor}`}>
                {/* Visual Accent Layers */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.accentBg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                <CardHeader className="relative space-y-8 p-10 pb-6">
                  <div className={`inline-flex h-20 w-20 items-center justify-center rounded-[22px] ${module.bgColor} ${module.color} border border-[#AD46FF]/20 shadow-[0_10px_30px_-5px_rgba(173,70,255,0.2)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[#AD46FF]/30`}>
                    <module.icon className="h-10 w-10" />
                  </div>
                  <div className="space-y-4">
                    <CardTitle className="text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-[#AD46FF] transition-colors duration-300">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-500 text-lg leading-relaxed line-clamp-3 min-h-[5.5rem] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      {module.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="relative flex-1 px-10 py-6">
                  <div className="h-px w-full bg-gradient-to-r from-[#AD46FF]/20 via-[#AD46FF]/5 to-transparent mb-8" />
                  <ul className="space-y-5">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-4 text-[15px] font-semibold text-zinc-600 transition-colors group-hover:text-zinc-950">
                        <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-[#AD46FF]/10 shrink-0 border border-[#AD46FF]/20`}>
                          <CheckCircle2 className={`h-3.5 w-3.5 text-[#AD46FF]`} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="relative p-10 pt-6">
                  <Button asChild className="w-full h-14 group/btn font-bold text-[#AD46FF] bg-white border border-[#AD46FF]/20 hover:border-[#AD46FF] hover:bg-[#AD46FF] hover:text-white transition-all duration-500 rounded-xl shadow-sm hover:shadow-[0_10px_20px_rgba(173,70,255,0.3)]" variant="outline">
                    <Link href={module.href}>
                      {module.cta}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-32 rounded-[3rem] bg-[#09090b] p-10 text-white md:p-20 overflow-hidden relative border border-zinc-800 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="relative z-10 grid gap-20 md:grid-cols-2 items-center">
            <div className="space-y-10">
              <Badge className="bg-[#AD46FF]/20 text-[#AD46FF] border-[#AD46FF]/30 hover:bg-[#AD46FF]/30 px-5 py-2 text-[10px] font-black tracking-[0.2em] uppercase rounded-full">
                Coming Soon
              </Badge>
              <div className="space-y-6">
                <h2 className="text-5xl font-extrabold md:text-7xl tracking-tighter leading-none">
                  Collaborative <br />
                  <span className="text-zinc-600 italic">Labs</span>
                </h2>
                <p className="text-xl text-zinc-400 max-w-md leading-relaxed font-medium">
                  Form multi-disciplinary teams and build real products with shared equity and expert oversight.
                </p>
              </div>
              <Button size="lg" className="h-16 px-10 bg-[#AD46FF] text-white hover:bg-[#9635FF] transition-all duration-500 font-bold rounded-2xl group/wait shadow-[0_10px_30px_rgba(173,70,255,0.4)] border-none">
                Join the Waitlist
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover/wait:translate-x-2" />
              </Button>
            </div>
            
            <div className="relative flex justify-center md:justify-end">
              <div className="relative h-80 w-80 lg:h-[400px] lg:w-[400px]">
                <div className="absolute inset-0 rounded-full border border-[#AD46FF]/10 animate-[ping_4s_linear_infinite]" />
                <div className="absolute inset-12 rounded-full border border-[#AD46FF]/20 animate-[ping_4s_linear_infinite_1s]" />
                <div className="absolute inset-24 rounded-full border border-[#AD46FF]/30 animate-[ping_4s_linear_infinite_2s]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative p-12 bg-zinc-900/50 backdrop-blur-3xl rounded-[40px] border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group/icon overflow-hidden">
                    <div className="absolute inset-0 bg-[#AD46FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <Rocket className="h-24 w-24 text-[#AD46FF] drop-shadow-[0_0_25px_rgba(173,70,255,0.6)] relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#AD46FF]/10 to-transparent pointer-events-none" />
          <div className="absolute -top-24 -right-24 h-[600px] w-[600px] rounded-full bg-[#AD46FF]/15 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
        </motion.div>
      </div>
    </div>
  )
}
