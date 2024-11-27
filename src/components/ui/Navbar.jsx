import React from "react";
import Link from "next/link";
import ThemeController from "./ThemeController";

const Navbar = () => {
  return (
    <>
      <div className="navbar p-4">
        <div className="flex items-center">
          <Link href="#">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img
                  src="/assets/logo_375x375.png"
                  alt="Taskify logo"
                  className="rounded-box"
                />
              </div>
            </div>
            
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-outline btn-primary">Login</button>
          <ThemeController />
        </div>
      </div>
    </>
  );
};

export default Navbar;
