import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../LanguageContext";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  onNavigate: (page: string) => void;
}

export function LegalLayout({ children, title, onNavigate }: LegalLayoutProps) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              L
            </div>
            <span className="font-bold text-xl tracking-tight text-green-900">LunaLean</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => onNavigate("home")}
            className="gap-2 text-gray-600 hover:text-green-600"
          >
            <ArrowLeft className="w-4 h-4" /> {t.legalLayout.back}
          </Button>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-200">
          {title}
        </h1>
        <div className="prose prose-green max-w-none text-gray-600">
          {children}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm mt-12">
        <p>{t.footer.rights}</p>
      </footer>
    </div>
  );
}
