import { useState } from "react";
import { LunaLeanLanding } from "./components/LunaLeanLanding";
import { Terms } from "./components/legal/Terms";
import { Privacy } from "./components/legal/Privacy";
import { Refunds } from "./components/legal/Refunds";
import { LanguageProvider } from "./components/LanguageContext";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (p: string) => {
    window.scrollTo(0, 0);
    setPage(p);
  };

  return (
    <LanguageProvider>
        <div className="min-h-screen w-full">
            {page === "home" && <LunaLeanLanding onNavigate={navigate} />}
            {page === "terms" && <Terms onNavigate={navigate} />}
            {page === "privacy" && <Privacy onNavigate={navigate} />}
            {page === "refunds" && <Refunds onNavigate={navigate} />}
        </div>
    </LanguageProvider>
  );
}
