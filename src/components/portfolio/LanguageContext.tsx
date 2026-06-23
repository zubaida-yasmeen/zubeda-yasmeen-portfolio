
"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import en from '@/locales/en.json'
import de from '@/locales/de.json'
import fr from '@/locales/fr.json'
import es from '@/locales/es.json'
import ja from '@/locales/ja.json'
import ko from '@/locales/ko.json'
import zh from '@/locales/zh.json'
import pt from '@/locales/pt.json'
import nl from '@/locales/nl.json'

type Language = 'en' | 'de' | 'fr' | 'es' | 'ja' | 'ko' | 'zh' | 'pt' | 'nl'

const translations: Record<Language, any> = { en, de, fr, es, ja, ko, zh, pt, nl }

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang)
    } else {
      const browserLang = navigator.language.split('-')[0] as Language
      if (translations[browserLang]) {
        setLanguageState(browserLang)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useTranslation must be used within LanguageProvider')
  return context
}
