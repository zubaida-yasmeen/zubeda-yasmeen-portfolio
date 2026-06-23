
"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "./LanguageContext"

export function Footer() {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="py-20 border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
               {t("contact.title")}
             </h2>
             <p className="text-muted-foreground max-w-xl mx-auto">
               {t("contact.subtitle")}
             </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button size="lg" className="rounded-full h-14 px-8 font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/20" asChild>
              <Link href="mailto:zubeda@example.com">
                <Mail className="mr-2 h-5 w-5" />
                {t("contact.button")}
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <Link 
                href="https://github.com/zubaida-yasmeen/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/zubeda-yasmeen/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="pt-20 flex flex-col items-center gap-8">
             <Button variant="ghost" size="icon" onClick={scrollToTop} className="rounded-full h-12 w-12 border border-border hover:bg-muted transition-colors">
                <ChevronUp className="h-6 w-6" />
             </Button>
             <div className="text-center text-sm text-muted-foreground font-code">
               <p>© {new Date().getFullYear()} Zubeda Yasmeen. {t("contact.copyright")}</p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
