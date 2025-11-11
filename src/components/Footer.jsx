import React from "react";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-10 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-sm">
        <p>© 2023 Portfolio @Gina Rezi</p>
        <div className="flex gap-12">
          <div className="flex items-center gap-2">
            <Instagram size={16} />
            <a href="https://instagram.com/sk.rlsk" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition">
              Fotografi
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram size={16} />
            <a href="https://instagram.com/sk.grphc" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition">
              Design Grafis
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
