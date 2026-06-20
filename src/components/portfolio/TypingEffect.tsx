
"use client"

import * as React from "react"

interface TypingEffectProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export function TypingEffect({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetween = 2000,
}: TypingEffectProps) {
  const [currentText, setCurrentText] = React.useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const handleTyping = () => {
      const fullText = phrases[currentPhraseIndex]

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delayBetween)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    }

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetween])

  return (
    <span className="typing-cursor text-primary font-bold font-code">
      {currentText || "\u00A0"}
    </span>
  )
}
