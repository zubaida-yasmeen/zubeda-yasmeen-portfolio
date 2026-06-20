
"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const projects = [
  {
    title: "AWS Cloud Club Site",
    description: "Official community website for the AWS Cloud Club at MRIT. A hub for student developers to access cloud resources, event schedules, and join a thriving tech community.",
    image: PlaceHolderImages.find(img => img.id === "project-cloud")?.imageUrl,
    tags: ["AWS", "Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/zubaida-yasmeen/aws-cloud-club-mrit",
    demo: "https://aws-cloud-club-mrit.vercel.app/"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-code uppercase tracking-widest text-primary font-bold mb-4">
            Showcase
          </h2>
          <h3 className="text-4xl font-bold tracking-tight">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden bg-muted">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="cloud computing"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ExternalLink className="h-10 w-10 text-muted-foreground/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <Link href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-background rounded-full hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-background rounded-full hover:text-primary transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-muted hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
