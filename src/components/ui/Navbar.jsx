"use client";

import ThemeController from "./ThemeController";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import SignOut from "./SignOut";
import Link from "next/link";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="navbar bg-base-100 w-full min-w-full px-6 py-4 bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          {user ? (
            user?.photoURL && (
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL}
                    alt={`${user?.displayName} profile picture`}
                    className="w-10 h-10 rounded-full self-center"
                  />
                </div>
              </div>
            )
          ) : (
            <></>
          )}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
          >
            <li>{user ? <SignOut /> : <></>}</li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-primary text-xl">
          Taskify
        </Link>
      </div>
      <div className="navbar-end">
        <ThemeController />
      </div>
    </div>
  );
};

export default Navbar;
