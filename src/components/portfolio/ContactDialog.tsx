
"use client"

import * as React from "react"
import { useTranslation } from "./LanguageContext"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"

interface ContactDialogProps {
  trigger: React.ReactNode
}

export function ContactDialog({ trigger }: ContactDialogProps) {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    const mailtoLink = `mailto:zubedayasmeen1610@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`
    
    window.location.href = mailtoLink
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t("contact_form.title")}</DialogTitle>
          <DialogDescription>
            {t("contact_form.subtitle")}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("contact_form.name")}</Label>
            <Input 
              id="name" 
              name="name" 
              placeholder={t("contact_form.placeholder_name")} 
              required 
              className="bg-muted/50 border-border focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t("contact_form.email")}</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder={t("contact_form.placeholder_email")} 
              required 
              className="bg-muted/50 border-border focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t("contact_form.message")}</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder={t("contact_form.placeholder_message")} 
              required 
              className="min-h-[120px] bg-muted/50 border-border focus:ring-primary"
            />
          </div>
          <Button type="submit" className="w-full font-bold h-12 rounded-lg bg-primary hover:bg-primary/90">
            <Mail className="mr-2 h-4 w-4" />
            {t("contact_form.submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
