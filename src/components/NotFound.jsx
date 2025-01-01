import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faVideoSlash } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
            <div className="text-center">
                <FontAwesomeIcon icon={faVideoSlash} className="text-purple-500 text-7xl mb-8" />
                <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                <p className="text-gray-400 mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                    <FontAwesomeIcon icon={faHome} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
