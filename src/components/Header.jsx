import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = ({ darkMode, toggleDarkMode }) => (
    <header
        className={`${
            darkMode ? "bg-gray-800" : "bg-white"
        } p-8 text-center shadow-lg rounded-lg mb-8 transition-colors duration-300 flex justify-center items-center`}
    >
        <div className="flex-grow">
            <h1 className={`text-4xl font-bold ${darkMode ? "text-purple-400" : "text-purple-600"} mb-2`}>Video Player</h1>
            <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Experience your favorite videos in style</p>
        </div>
        <button
            onClick={toggleDarkMode}
            className={`p-3 ${
                darkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-200 text-gray-800"
            } rounded-lg transition-colors duration-300 ml-4`}
        >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
    </header>
);

export default Header;
