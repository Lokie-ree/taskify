import React from 'react'
import { IoIosSunny, IoIosMoon } from "react-icons/io";


const ThemeController = () => {
  return(
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="dark" />
        <IoIosSunny className="swap-off h-6 w-6 sm:h-8 sm:w-8"/>
        <IoIosMoon className="swap-on h-6 w-6 sm:h-8 sm:w-8"/>
    </label>
  )
}

export default ThemeController