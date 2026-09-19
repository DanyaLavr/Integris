"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import BurgerMenu from "./BurgerMenu";

const MobileMenu = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const scrollYRef = useRef(0);
  const pendingHashRef = useRef<string | null>(null);
  const isLeavingPageRef = useRef(false);

  const openMenu = () => setIsRendered(true);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => (isRendered ? closeMenu() : openMenu());

  const handleTransitionEnd = () => {
    if (!isOpen) setIsRendered(false);
  };

  useEffect(() => {
    if (!isRendered) return;
    const raf = requestAnimationFrame(() => setIsOpen(true));
    return () => cancelAnimationFrame(raf);
  }, [isRendered]);

  const getScroller = () =>
    (document.scrollingElement as HTMLElement | null) ||
    document.documentElement;

  const jumpTo = (y: number) => {
    getScroller().scrollTop = y;
  };

  const animateScrollTo = (toY: number, duration = 600) => {
    const scroller = getScroller();
    const fromY = scroller.scrollTop;
    const diff = toY - fromY;
    if (Math.abs(diff) < 1) return;

    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      scroller.scrollTop = fromY + diff * eased;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (!isRendered) return;

    const body = document.body;
    const scroll = getScroller().scrollTop;
    scrollYRef.current = scroll;

    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    body.style.top = `-${scroll}px`;

    return () => {
      body.style.position = "";
      body.style.width = "";
      body.style.overflow = "";
      body.style.top = "";

      const hash = pendingHashRef.current;
      pendingHashRef.current = null;
      const leaving = isLeavingPageRef.current;
      isLeavingPageRef.current = false;

      if (leaving) {
        jumpTo(0);
        return;
      }

      jumpTo(scrollYRef.current);

      if (hash) {
        requestAnimationFrame(() => {
          const target = document.querySelector(hash) as HTMLElement | null;
          if (target) {
            const y =
              target.getBoundingClientRect().top + getScroller().scrollTop;
            animateScrollTo(y);
          }
        });
      }
    };
  }, [isRendered]);

  const handlePortalClick = useCallback((e: React.MouseEvent) => {
    const targetEl = e.target as HTMLElement;
    const link = targetEl.closest("a") as HTMLAnchorElement | null;
    const logo = targetEl.closest("#logo");

    if (!link && !logo) return;

    if (link) {
      const url = new URL(link.href, window.location.href);
      const samePage = url.pathname === window.location.pathname;

      if (url.hash && samePage) {
        pendingHashRef.current = url.hash;
      } else if (!url.hash) {
        isLeavingPageRef.current = true;
      }
    } else if (logo) {
      isLeavingPageRef.current = window.location.pathname !== "/";
    }

    closeMenu();
  }, []);

  return (
    <div>
      <BurgerMenu isOpen={isOpen} setIsOpen={toggleMenu} />

      {isRendered &&
        createPortal(
          <div
            id="mobile-menu"
            onTransitionEnd={handleTransitionEnd}
            onClick={handlePortalClick}
            className={`fixed top-0 w-full h-full bg-white translate-x-full transition pt-18 sm:pt-20.5 ${
              isOpen ? "translate-x-0!" : ""
            }`}
          >
            {children}
          </div>,
          document.body,
        )}
    </div>
  );
};

export default MobileMenu;
