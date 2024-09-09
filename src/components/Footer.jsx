import React from "react";

const Footer = ({ darkMode }) => (
    <footer className={`${darkMode ? "bg-gray-800 text-gray-400" : "bg-white text-gray-600"} p-4 text-center mt-8 text-sm`}>
        <p>
            Made with ❤️ by{" "}
            <a href="https://github.com/chinxcode" className="text-blue-400">
                Sachin Sharma
            </a>
        </p>
    </footer>
);

export default Footer;
