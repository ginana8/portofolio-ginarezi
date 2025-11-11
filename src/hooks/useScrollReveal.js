import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const reveal = () => {
      const els = document.querySelectorAll("[data-reveal]");
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight / 1.2) {
          el.classList.add("revealed");
        }
      });
    };

    document.querySelectorAll("[data-reveal-delay]").forEach((el) => {
      el.style.transitionDelay = el.dataset.revealDelay;
    });

    window.addEventListener("scroll", reveal);
    window.addEventListener("load", reveal);
    reveal();
    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("load", reveal);
    };
  }, []);
}
