
"use client"

import { User, Rocket, Code, GraduationCap } from "lucide-react"
import { useTranslation } from "./LanguageContext"

export function About() {
  const { t } = useTranslation()

  const highlights = [
    {
      icon: GraduationCap,
      text: t("about.highlight_edu"),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Rocket,
      text: t("about.highlight_lead"),
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Code,
      text: t("about.highlight_tech"),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Section Header */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <h2 className="text-sm font-code uppercase tracking-widest text-primary font-bold">
                  {t("about.title")}
                </h2>
                <h3 className="text-4xl font-bold tracking-tight leading-tight">
                  {t("about.subtitle")}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.story")}
              </p>
              
              <div className="grid grid-cols-1 gap-4 pt-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-colors">
                    <div className={`p-3 rounded-lg ${item.bgColor} ${item.color}`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Detailed Content */}
            <div className="lg:col-span-7 space-y-8 bg-muted/30 p-8 rounded-3xl border border-border">
              <div className="space-y-4">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  {t("about.achievements_title")}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.achievements_text")}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  {t("about.interests_title")}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.interests_text")}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-2">
                {["Cloud Infrastructure", "AI Systems", "DevOps", "Scalable Software"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-code rounded-full bg-background border border-border text-muted-foreground">
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
