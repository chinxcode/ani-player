import { useState, useEffect } from "react";
import Header from "./Header";
import InputSection from "./InputSection";
import Footer from "./Footer";
import WatchPlayer from "./WatchPlayer";

const VideoPlayer = () => {
    const [inputUrl, setInputUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [darkMode, setDarkMode] = useState(true);
    const [showPlayer, setShowPlayer] = useState(false);
    const [localFile, setLocalFile] = useState(null);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    const handleInputChange = (e) => {
        setInputUrl(e.target.value);
    };

    const handlePlay = () => {
        if (!inputUrl) return;
        setVideoUrl(inputUrl);
        setLocalFile(null);
        setShowPlayer(true);
        // document.querySelector(".aspect-video").scrollIntoView({ behavior: "smooth" });
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLocalFile(file);
            setVideoUrl("");
            setShowPlayer(true);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={`min-h-screen ${
                darkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-blue-100 to-purple-200"
            } text-gray-200 font-['Roboto'] transition-colors duration-300`}
        >
            <div className="container mx-auto px-4">
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <main className="mx-auto">
                    <InputSection
                        inputUrl={inputUrl}
                        handleInputChange={handleInputChange}
                        handlePlay={handlePlay}
                        handleFileUpload={handleFileUpload}
                        darkMode={darkMode}
                    />
                    {showPlayer && (
                        <div
                            className={`${
                                darkMode ? "bg-gray-800" : "bg-white"
                            } rounded-lg p-4 shadow-lg transition-colors duration-300 flex justify-center items-center`}
                        >
                            <div className="sm:w-[80%] sm:h-[50%]">
                                <WatchPlayer
                                    videoUrl={videoUrl}
                                    localFile={localFile}
                                    className="w-full aspect-video rounded-lg overflow-hidden"
                                />
                                <p className="mt-1 text-sm text-red-500">
                                    ⚠️ If the player keeps loading, try changing the link and try again.
                                </p>
                            </div>
                        </div>
                    )}
                </main>
            </div>
            <Footer darkMode={darkMode} />
        </div>
    );
};

export default VideoPlayer;
