
"use client"

import { ExternalLink, Github, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "./LanguageContext"

const experiences = [
  {
    title: "Founder & Lead — AWS Student Builder Group MRIT",
    organization: "AWS Community",
    period: "April 30, 2025 - Present",
    description: "Spearheading a community of 300+ student developers. Orchestrating workshops on Cloud Architecture, Serverless, and DevOps practices.",
    color: "bg-[#22c55e]",
    links: [
      { name: "Meetup", href: "https://www.meetup.com/aws-sbg-at-mysuru-royal-inst-of-tech/", icon: Globe },
      { name: "Website", href: "https://aws-cloud-club-mrit.vercel.app/", icon: ExternalLink }
    ]
  },
  {
    title: "Cloud Captain — Mysuru Royal Institute of Technology",
    organization: "AWS Cloud Club MRIT",
    period: "March 2025 - April 30, 2025",
    description: "Established the official digital presence for the AWS Cloud Club at MRIT, building the foundational community portal and engagement strategy.",
    color: "bg-primary",
    links: [
      { name: "GitHub", href: "https://github.com/zubaida-yasmeen/aws-cloud-club-mrit", icon: Github },
      { name: "Website", href: "https://aws-cloud-club-mrit.vercel.app/", icon: ExternalLink },
      { name: "Meetup", href: "https://www.meetup.com/aws-sbg-at-mysuru-royal-inst-of-tech/", icon: Globe }
    ]
  },
  {
    title: "Google Gemini Campus Ambassador",
    organization: "Google AI",
    period: "July 2025 - Dec 2025",
    description: "Representing Google Gemini on campus to drive AI awareness. Organizing developer sessions and workshops focused on generative AI technologies.",
    color: "bg-[#8b5cf6]"
  },
  {
    title: "Unstop Campus Ambassador",
    organization: "Unstop",
    period: "June 2025 - Present",
    description: "Fostering a competitive spirit by connecting students with hackathons and career opportunities through the Unstop platform.",
    color: "bg-[#ec4899]"
  },
  {
    title: "Software Engineer Intern",
    organization: "Motion Cut",
    period: "Dec 2023 - Jan 2024",
    description: "Focused on web development and software engineering workflows during an intensive one-month internship program.",
    color: "bg-accent"
  }
]

export function Timeline() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-code uppercase tracking-widest text-primary font-bold mb-4">
            {t("experience.title")}
          </h2>
          <h3 className="text-4xl font-bold tracking-tight">{t("experience.subtitle")}</h3>
        </div>

        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0 group">
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-border group-last:h-0" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className={`hidden md:block w-1/2 pr-12 text-right ${index % 2 !== 0 ? 'order-last pl-12 pr-0 text-left' : ''}`}>
                  <span className="text-xs font-code font-bold text-primary mb-2 block">{exp.period}</span>
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <p className="text-sm text-accent font-medium mb-2">{exp.organization}</p>
                </div>

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 transition-transform group-hover:scale-125" 
                  style={{ backgroundColor: `hsl(var(--primary))` }} 
                />

                <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-card p-6 rounded-xl border border-border shadow-sm group-hover:border-primary/30 transition-all duration-300">
                     <span className="md:hidden text-xs font-code font-bold text-primary mb-2 block">{exp.period}</span>
                     <h4 className="md:hidden text-lg font-bold mb-1">{exp.title}</h4>
                     <p className="md:hidden text-xs text-accent font-medium mb-3">{exp.organization}</p>
                     <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                     </p>
                     
                     {exp.links && (
                       <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                         {exp.links.map((link) => (
                           <Button key={link.name} variant="outline" size="sm" className="h-8 text-[10px] font-code uppercase tracking-tighter" asChild>
                             <Link href={link.href} target="_blank" rel="noopener noreferrer">
                               <link.icon className="mr-1 h-3 w-3" />
                               {link.name}
                             </Link>
                           </Button>
                         ))}
                       </div>
                     )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
