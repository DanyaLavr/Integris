"use client";
import { useEffect, useRef } from "react";

interface IProps {
  languages: Record<string, string>;
  locale: string;
  switchLocale: (key: string) => void;
  setIsActive: (isActive: boolean) => void;
}
const LocalesList = ({
  languages,
  locale,
  switchLocale,
  setIsActive,
}: IProps) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleCloseClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleCloseClick);
    return () => document.removeEventListener("click", handleCloseClick);
  }, []);
  return (
    <ul
      ref={ref}
      //${isActive ? "flex" : "hidden"}
      className={`flex flex-col bg-beige absolute w-full text-center rounded-b-xl border border-t-0 border-stone-600  `}
    >
      {Object.entries(languages).map(([key, lang]) => {
        if (key === locale) return;
        return (
          <li
            key={key}
            className={`text-center border-t border-stone-600 py-1`}
          >
            <button
              type="button"
              onClick={() => switchLocale(key)}
              className="block w-full capitalize"
            >
              {lang}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default LocalesList;
