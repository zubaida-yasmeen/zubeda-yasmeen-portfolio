
"use client"

import { Award, ShieldCheck, Cpu, Cloud, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "./LanguageContext"

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: Cloud,
    color: "text-blue-500",
    link: "#",
    tags: ["Cloud Foundations", "Security", "Infrastructure"]
  },
  {
    title: "AWS Knowledge: Generative AI",
    issuer: "AWS Skill Builder",
    date: "2024",
    icon: Cpu,
    color: "text-orange-500",
    link: "#",
    tags: ["LLMs", "Bedrock", "Machine Learning"]
  },
  {
    title: "AWS Builder Center Badges",
    issuer: "AWS",
    date: "Continuous",
    icon: ShieldCheck,
    color: "text-green-500",
    link: "#",
    tags: ["Hands-on", "Architecture", "Labs"]
  },
  {
    title: "AWS Skill Builder Certs",
    issuer: "AWS Education",
    date: "Various",
    icon: Award,
    color: "text-purple-500",
    link: "#",
    tags: ["Serverless", "Security", "DevOps"]
  }
]

export function Certifications() {
  const { t } = useTranslation()

  return (
    <section id="certifications" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-code uppercase tracking-widest text-primary font-bold mb-4">
            {t("certifications.title")}
          </h2>
          <h3 className="text-4xl font-bold tracking-tight">{t("certifications.subtitle")}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="pt-6">
                <div className={`${cert.color} mb-4 p-3 rounded-xl bg-muted/50 w-fit group-hover:scale-110 transition-transform`}>
                  <cert.icon className="h-8 w-8" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" asChild>
                      <Link href={cert.link} target="_blank">
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground font-medium">
                    {cert.issuer} • {cert.date}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[10px] font-normal py-0 px-2 opacity-70">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
