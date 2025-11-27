import React from "react";
import { LegalLayout } from "./LegalLayout";
import { useLanguage } from "../LanguageContext";

export function Terms({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { t } = useLanguage();
  return (
    <LegalLayout title={t.legal.terms.title} onNavigate={onNavigate}>
      <section className="space-y-6" dangerouslySetInnerHTML={{ __html: t.legal.terms.content }} />
    </LegalLayout>
  );
}
