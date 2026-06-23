
"use client"

import * as React from "react"
import { TypingEffect } from "./TypingEffect"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, FileText, Trophy, Camera, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "./LanguageContext"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const { t } = useTranslation()
  const [imageError, setImageError] = React.useState(false)
  const profileImage = PlaceHolderImages.find(img => img.id === "profile-hero")

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] -z-10" />
      
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8 animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              {/* Hackathon Banner */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-2 animate-bounce-slow">
                <Trophy className="h-4 w-4" />
                <span className="text-xs font-bold tracking-tight uppercase font-code">
                  {t("hero.hackathon")}
                </span>
              </div>

              <p className="text-sm font-code uppercase tracking-widest text-accent font-bold pt-4">
                {t("hero.intro")}
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                Zubeda Yasmeen
              </h1>
              <h2 className="text-xl md:text-3xl font-medium text-muted-foreground min-h-[1.5em] flex items-center justify-center lg:justify-start gap-2">
                <span>{t("hero.iam")}</span>
                <TypingEffect 
                  phrases={t("hero.phrases")} 
                />
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl lg:mx-0 mx-auto">
              {t("hero.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 rounded-full font-bold group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" asChild>
                <Link href="#projects">
                  {t("hero.view_projects")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 rounded-full font-bold border-border hover:border-primary/50 hover:text-primary transition-all" asChild>
                <Link href="#" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  {t("hero.download_resume")}
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-border hover:border-primary/50 hover:text-primary transition-all shadow-sm" asChild>
                  <Link href="https://github.com/zubaida-yasmeen/" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-border hover:border-primary/50 hover:text-primary transition-all shadow-sm" asChild>
                  <Link href="https://www.linkedin.com/in/zubeda-yasmeen/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group animate-float">
              {/* Glow Effect Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              
              {/* Image Container */}
              <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border-[3px] border-dashed border-primary/50 bg-card/40 backdrop-blur-md shadow-[0_0_40px_rgba(139,92,246,.35)] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-primary group-hover:scale-[1.02]">
                
                {profileImage && !imageError ? (
                  <Image
                    src={profileImage.imageUrl}
                    alt="Zubeda Yasmeen"
                    fill
                    className="object-cover rounded-full p-2"
                    onError={() => setImageError(true)}
                    priority
                    data-ai-hint="professional portrait"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                      <Camera className="h-10 w-10 md:h-12 md:w-12" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm md:text-base font-bold text-foreground">Add Your Photo</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground font-code">1200x1200Recommended</p>
                    </div>
                  </div>
                )}

                {/* Overlay Profile Link Hint */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <User className="h-8 w-8 text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Decorative Rings */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-accent/30 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 border-2 border-secondary/20 rounded-full animate-bounce-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
