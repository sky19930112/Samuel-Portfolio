import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import theme from '../../assets/theme.mkv'
import theme2 from '../../assets/theme2.mkv'

const DarkMode = () => {
    const setDarkMode = () => {
        const page = document.querySelector(".current-page");
        page.setAttribute("data-theme", "dark");
        const video = document.querySelector(".background-video");
        if (video) video.setAttribute("src", theme2);
    }

    const setLightMode = () => {
        const page = document.querySelector(".current-page");
        page.setAttribute("data-theme", "light");
        const video = document.querySelector(".background-video");
        if (video) video.setAttribute("src", theme); 
    }
    const changeTheme = e => {
        if (e.target.checked){
            setDarkMode()
        } else {
            setLightMode()
        }
    }



    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={changeTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
