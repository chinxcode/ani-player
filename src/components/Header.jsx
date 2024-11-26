import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = ({ darkMode, toggleDarkMode }) => (
    <header className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 shadow-lg rounded-lg mb-8 transition-colors duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <div className={`${darkMode ? "bg-purple-600" : "bg-purple-500"} p-3 pl-4 pb-2 rounded-full mr-4`}>
                    <FontAwesomeIcon icon={faPlay} className="text-white text-2xl" />
                </div>
                <div>
                    <h1 className={`text-3xl font-bold ${darkMode ? "text-purple-400" : "text-purple-600"}`}>Ani-Player</h1>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Your Ultimate Video Experience</p>
                </div>
            </div>

            <div className="flex items-center justify-center space-x-5">
                <button
                    onClick={toggleDarkMode}
                    className={`p-3 pb-2 ${
                        darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
                    } rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    <FontAwesomeIcon
                        icon={darkMode ? faSun : faMoon}
                        className={`text-xl ${darkMode ? "text-yellow-400" : "text-gray-800"}`}
                    />
                </button>
                <a
                    href="https://github.com/chinxcode/devArena-leaderboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-purple-500 transition-colors duration-200 ${darkMode ? "text-gray-100" : "text-gray-800"}`}
                >
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
            </div>
        </div>
    </header>
);

export default Header;
