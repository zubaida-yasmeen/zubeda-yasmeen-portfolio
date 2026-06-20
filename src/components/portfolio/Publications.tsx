"use client"

import { BookText, ExternalLink, ArrowRight, User } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const articles = [
  {
    title: "How we built an AI-powered cybersecurity app and won 3rd place nationally at the AWS GenAI Hackathon",
    link: "https://builder.aws.com/content/3EOwCLRidPzghOZqczxA7dbHE5n/how-we-built-an-ai-powered-cybersecurity-app-and-won-3rd-place-nationally-at-the-aws-genai-hackathon",
    category: "Technical Achievement",
    excerpt: "Deep dive into the architecture and development of CyberNode, an ML-adaptive honeypot that secured regional recognition."
  },
  {
    title: "They called it 'too good to be true'—so I built Mandya's first AWS Student Builder Group",
    link: "https://builder.aws.com/content/3DJZP6BEUgfdCB1AVj1QXM5Iyvl/they-called-it-too-good-to-be-true-so-i-built-mandyas-first-aws-student-builder-group",
    category: "Community Impact",
    excerpt: "The story behind establishing a thriving AWS student community in Mandya and fostering a culture of cloud innovation."
  },
  {
    title: "Why students need a 'build-first' mindset in the age of AI",
    link: "https://builder.aws.com/content/3EjAjXPeT8Fosnm4yVIaTH0bOH8/why-students-need-a-build-first-mindset-in-the-age-of-ai",
    category: "Leadership & Strategy",
    excerpt: "An exploration of why practical building is more critical than ever for students navigating the rapidly evolving AI landscape."
  }
]

export function Publications() {
  return (
    <section id="publications" className="py-24 bg-muted/20">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-code uppercase tracking-widest text-primary font-bold">
              Knowledge Sharing
            </h2>
            <h3 className="text-4xl font-bold tracking-tight">Articles & Publications</h3>
          </div>
          <Button variant="outline" className="rounded-full border-primary/50 text-primary hover:bg-primary/10 group" asChild>
            <Link href="https://builder.aws.com/profile/@zubaidayasmeen" target="_blank">
              <User className="mr-2 h-4 w-4" />
              View Builder Profile @zubaidayasmeen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="flex flex-col h-full border-border bg-card hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <BookText className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-code uppercase tracking-wider text-muted-foreground">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="link" className="p-0 h-auto text-primary font-bold group/btn" asChild>
                  <Link href={article.link} target="_blank">
                    Read Article
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}