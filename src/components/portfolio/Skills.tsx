
"use client"

import { Cloud, Code, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "./LanguageContext"

export function Skills() {
  const { t } = useTranslation()

  const skillCategories = [
    {
      title: t("skills.cloud"),
      icon: Cloud,
      color: "text-blue-500",
      skills: ["AWS EC2", "S3", "IAM", "VPC"]
    },
    {
      title: t("skills.programming"),
      icon: Code,
      color: "text-green-500",
      skills: ["Java", "Python", "C"]
    },
    {
      title: t("skills.tools"),
      icon: Settings,
      color: "text-orange-500",
      skills: ["GitHub", "Linux", "Firebase", "Next.js"]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-code uppercase tracking-widest text-primary font-bold mb-4">
            {t("skills.title")}
          </h2>
          <h3 className="text-4xl font-bold tracking-tight">{t("skills.subtitle")}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="flex flex-col items-center text-center">
                  <div className={`${category.color} mb-6 p-4 rounded-2xl bg-muted/50`}>
                    <category.icon className="h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-bold mb-6">{category.title}</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                        {skill}
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
