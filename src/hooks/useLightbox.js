import { useState } from "react";

export default function useLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState("");

  const open = (imageSrc) => {
    setSrc(imageSrc);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setIsOpen(false);
    setSrc("");
    document.body.style.overflow = "";
  };

  return { isOpen, src, open, close };
}
