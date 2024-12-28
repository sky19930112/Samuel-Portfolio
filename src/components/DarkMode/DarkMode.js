import React, { useContext } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { ThemeContext } from "../ThemeContext/ThemeContext.js";

const DarkMode = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='dark_mode'>
          <input
            className='dark_mode_input'
            type='checkbox'
            id='darkmode-toggle'
            onChange={toggleTheme}
            checked={isDarkMode} 
          />
          <label className='dark_mode_label' htmlFor='darkmode-toggle'>
            <Sun />
            <Moon />
          </label>
        </div>
      );
    };

export default DarkMode;
