
"use client"

import { TypingEffect } from "./TypingEffect"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] -z-10" />
      
      <div className="container px-6 mx-auto text-center">
        <div className="space-y-6 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-sm font-code uppercase tracking-widest text-accent font-bold">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Zubeda Yasmeen
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground flex items-center justify-center gap-3">
            I am a <TypingEffect phrases={["Cloud Engineer", "AI Builder", "Community Leader", "Student Mentor"]} />
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Pioneering the intersection of cloud scalability and intelligent systems. 
            Building resilient infrastructures and community-driven tech initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 rounded-full font-bold group" asChild>
              <Link href="#projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" asChild>
                <Link href="https://github.com/zubaida-yasmeen" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" asChild>
                <Link href="https://www.linkedin.com/in/zubeda-yasmeen/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
