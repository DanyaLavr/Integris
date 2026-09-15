"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BurgerMenu from "./BurgerMenu";

const MobileMenu = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const toggleMenu = () => {
    if (!isRendered) setIsRendered(true);
    else setIsOpen(false);
  };
  const handleTransitionEnd = () => {
    if (!isOpen) setIsRendered(false);
  };
  useEffect(() => {
    if (isRendered) {
      const raf = requestAnimationFrame(() => setIsOpen(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [isRendered, setIsOpen]);
  useEffect(() => {
    if (!isOpen) return;
    const handleCloseModal = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const logo = target.closest("#logo");
      const link = target.closest("[data-mobile-nav]");

      if (link || logo) setIsOpen(false);
    };
    document.addEventListener("click", handleCloseModal);
    return () => document.addEventListener("click", handleCloseModal);
  }, [isOpen]);
  return (
    <div>
      <BurgerMenu isOpen={isOpen} setIsOpen={toggleMenu} />

      {isRendered &&
        createPortal(
          <div
            id="mobile-menu"
            onTransitionEnd={handleTransitionEnd}
            onClick={(e) => {
              console.log(e.target);
              const link = (e.target as HTMLElement).closest("a");
              const logo = (e.target as HTMLElement).closest("#logo");
              if (link || logo) {
                toggleMenu();
              }
            }}
            className={`fixed w-full h-full bg-white translate-x-full transition pt-18 sm:pt-20.5 ${isOpen ? "translate-x-0!" : ""}`}
          >
            {children}
          </div>,
          document.body,
        )}
    </div>
  );
};

export default MobileMenu;
