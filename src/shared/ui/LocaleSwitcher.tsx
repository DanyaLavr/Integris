"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import Chevron from "@/src/shared/ui/icons/chevron.svg";
import LocalesList from "./LocalesList";

const languages = {
  es: "spanish",
  en: "english",
  uk: "ukrainian",
  ru: "russian",
};
const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsActive((prev) => !prev)}
        className={`flex gap-3 rounded-xl border border-stone-600 content-center py-1 px-3 capitalize ${isActive ? "rounded-b-none border-b-0 " : ""}`}
      >
        <p> {languages[locale as keyof typeof languages]}</p>
        <span
          className={`inline-block transition ${isActive ? "" : "rotate-90"}`}
        >
          <Chevron />
        </span>
      </button>
      {isActive && (
        <LocalesList
          languages={languages}
          locale={locale}
          switchLocale={switchLocale}
          setIsActive={setIsActive}
        />
      )}
    </div>
  );
};

export default LocaleSwitcher;
