import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// isDark, setIsDark 
const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <footer
            className="footer"
            style={{
                backgroundColor: isDark ? 'black' : '#ff7cc8',
                color: isDark ? 'white' : '#333333',
            }}
        >
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    );
};

export default Footer;
