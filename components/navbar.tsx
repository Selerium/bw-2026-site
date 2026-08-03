"use client";

import Link from "next/link";
import { primaryFont, secondaryFont } from "@/fonts/fonts";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`w-full relative z-50 ${primaryFont.className}`}>
      <nav
        className={`flex fixed top-0 justify-between items-center w-full px-6 md:px-20 py-10`}
      >
        <span className="w-42 text-xl md:text-3xl text-primary">BW26</span>
        <div className="hidden md:flex w-fit gap-10">
          <Link
            className="text-sm hover:text-secondary transition-all"
            href="/#about"
          >
            about
          </Link>
          <Link
            className="text-sm hover:text-secondary transition-all"
            href="/#theme"
          >
            theme
          </Link>
          <Link
            className="text-sm hover:text-secondary transition-all"
            href="/#speakers"
          >
            speakers
          </Link>
          <Link
            className="text-sm hover:text-secondary transition-all"
            href="/#details"
          >
            details
          </Link>
          <Link
            className="text-sm hover:text-secondary transition-all"
            href="/#merch"
          >
            merch
          </Link>
        </div>
        <Link
          href="https://crosscurrent.ae"
          className={`w-42 ${secondaryFont.className} hidden md:block font-black button bg-primary text-white`}
        >
          BW PORTAL
        </Link>
        <button
          className="md:hidden block text-primary"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <Menu width={24} height={24} />
        </button>
      </nav>
      <div
      onClick={() => setShowMenu(false)}
        className={`${showMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} fixed top-0 transition-all w-full h-full flex flex-col gap-4 justify-center items-center bg-white`}
      >
        <Link
          className="text-sm hover:text-secondary transition-all"
          href="/#about"
        >
          about
        </Link>
        <Link
          className="text-sm hover:text-secondary transition-all"
          href="/#theme"
        >
          theme
        </Link>
        <Link
          className="text-sm hover:text-secondary transition-all"
          href="/#speakers"
        >
          speakers
        </Link>
        <Link
          className="text-sm hover:text-secondary transition-all"
          href="/#details"
        >
          details
        </Link>
        <Link
          className="text-sm hover:text-secondary transition-all"
          href="/#merch"
        >
          merch
        </Link>
        <Link
          href="https://crosscurrent.ae"
          className={`w-42 ${secondaryFont.className} font-black button bg-primary text-white`}
        >
          BW PORTAL
        </Link>
      </div>
    </div>
  );
}
