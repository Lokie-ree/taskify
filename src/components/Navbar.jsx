import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 p-4">
        <div className="flex-1 flex">
          <Link href="#">
            <div className="avatar">
              <div className="w-16 rounded-xl">
                <img
                  src="/assets/logo_375x375.png"
                  alt="Taskify logo"
                  className="rounded-box"
                />
              </div>
            </div>
            Taskify
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-outline btn-primary">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
