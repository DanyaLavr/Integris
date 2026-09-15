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
  useEffect(() => {
    if (isRendered) {
      const raf = requestAnimationFrame(() => setIsOpen(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [isRendered, setIsOpen]);
  const handleTransitionEnd = () => {
    if (!isOpen) setIsRendered(false);
  };

  return (
    <div>
      <BurgerMenu isOpen={isOpen} setIsOpen={toggleMenu} />

      {isRendered &&
        createPortal(
          <div
            id="mobile-menu"
            onTransitionEnd={handleTransitionEnd}
            onClick={(e) => {
              const link = (e.target as HTMLElement).closest("a");
              if (link) {
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
