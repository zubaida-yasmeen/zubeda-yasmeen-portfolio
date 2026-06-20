
"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, GraduationCap, Users, Github } from "lucide-react"

const stats = [
  {
    label: "AWS GenAI Hackathon",
    value: "3rd Place",
    icon: Trophy,
    color: "text-[#ec4899]",
    description: "Regional recognition for innovative AI scaling.",
    link: "https://www.ps-events.in/genai-hackathon/"
  },
  {
    label: "Academic Excellence",
    value: "3.85 CGPA",
    icon: GraduationCap,
    color: "text-[#8b5cf6]",
    description: "Consistent high performance in CS core curriculum."
  },
  {
    label: "Community Growth",
    value: "500+ Members",
    icon: Users,
    color: "text-[#22c55e]",
    description: "Growing the AWS Student Builder Group locally."
  },
  {
    label: "Open Source",
    value: "20+ Projects",
    icon: Github,
    color: "text-primary",
    description: "Active contributions to cloud-native ecosystems."
  }
]

export function Stats() {
  return (
    <section id="stats" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const cardContent = (
              <Card className="border-none shadow-none bg-card hover:-translate-y-2 transition-transform duration-300 h-full">
                <CardContent className="pt-6">
                  <div className={`${stat.color} mb-4`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            )

            return (
              <div key={index}>
                {stat.link ? (
                  <Link href={stat.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
