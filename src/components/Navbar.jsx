import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 p-4">
        <div className="flex-1">
          <Link href="#" className="btn btn-ghost text-xl">
            My Tasks
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
