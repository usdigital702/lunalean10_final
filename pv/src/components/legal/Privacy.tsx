import React from "react";
import { LegalLayout } from "./LegalLayout";
import { useLanguage } from "../LanguageContext";

export function Privacy({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { t } = useLanguage();
  return (
    <LegalLayout title={t.legal.privacy.title} onNavigate={onNavigate}>
      <section className="space-y-6" dangerouslySetInnerHTML={{ __html: t.legal.privacy.content }} />
    </LegalLayout>
  );
}
