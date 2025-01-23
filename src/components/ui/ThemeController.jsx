import React from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

const ThemeController = () => {
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="cmyk" />
      <IoIosSunny className="swap-off size-7 sm:size-9 text-yellow-600" />
      <IoIosMoon className="swap-on size-7 sm:size-9 text-purple-600" />
    </label>
  );
};

export default ThemeController;
