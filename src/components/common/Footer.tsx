import Image from "next/image";
import React from "react";
import logo from "@/assests/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#0d0e11] text-white px-6 py-6 container mx-auto">
        <aside className="flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8  items-center justify-center rounded-md font-black text-black">
              <Image
                src={logo}
                width={100}
                height={100}
                className="h-[25px] w-[25px] transform rotate-[-45deg]"
                alt="logo"
              />
            </div>

            <span className="text-lg font-black tracking-wide">FITLOG</span>
          </div>

          <p className="text-center text-xs text-gray-500 sm:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
