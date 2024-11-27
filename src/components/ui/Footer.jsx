import React from "react";
import Logo from '../../../public/assets/logo_375x375.png';
import { dosis } from "./fonts";

const Footer = () => {
  return (
    <footer className={`${dosis.className} antialiased bg-transparent text-base-content p-4`}>
      <div className="flex flex-row items-center justify-between w-full min-w-full">
        <div className="flex flex-row items-center justify-center gap-2">
          <img
            src={Logo.src}
            alt="Taskify Logo"
            className="w-6 h-6 sm:w-7 sm:h-7"
          />
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by Taskify</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
