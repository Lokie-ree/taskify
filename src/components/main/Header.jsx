"use client";

import { useAuth } from "@/context/AuthContext";
import Logo from "../../../public/assets/logo.png";
import { shadows } from "../ui/fonts";

const Header = () => {
  const { user } = useAuth();

  const truncateName = (userName) => {
    const firstName = userName.split(" ");
    return firstName[0];
  };

  return (
    <div className="flex flex-row h-28 items-center justify-center gap-4 bg-base-100">
      <img src={Logo.src} alt="Taskify Logo" className="w-12 h-12" />
      <h1 className={`${shadows.className} antialiased text-3xl sm:text-4xl`}>
        {user ? (
          <span>{truncateName(user.displayName)}'s Tasks</span>
        ) : (
          <span>My Tasks</span>
        )}
      </h1>
    </div>
  );
};

export default Header;
