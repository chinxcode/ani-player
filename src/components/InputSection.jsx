import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faUpload } from "@fortawesome/free-solid-svg-icons";

const InputSection = ({ inputUrl, handleInputChange, handlePlay, handleFileUpload, darkMode }) => (
    <div className="flex flex-col gap-4 mb-6">
        <div className="flex p-4 flex-col gap-4 sm:flex-row">
            <input
                type="text"
                placeholder="Enter video URL"
                value={inputUrl}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === "Enter" && handlePlay()}
                className={`flex-grow p-3 border-2 ${
                    darkMode ? "border-purple-500 bg-gray-700" : "border-purple-300 bg-white"
                } rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-300`}
            />
            <div className="flex justify-center gap-3">
                <button
                    onClick={handlePlay}
                    className={`flex items-center justify-center gap-2 p-3 ${
                        darkMode ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-500 hover:bg-purple-600"
                    } text-white rounded-lg text-base font-medium transition-colors duration-300 shadow-lg`}
                >
                    <FontAwesomeIcon icon={faPlay} />
                    Play
                </button>
                <input type="file" id="file-upload" accept="video/*" onChange={handleFileUpload} className="hidden" />
                <label
                    htmlFor="file-upload"
                    className={`flex items-center justify-center gap-2 p-3 ${
                        darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                    } text-white rounded-lg text-base font-medium transition-colors duration-300 shadow-lg cursor-pointer`}
                >
                    <FontAwesomeIcon icon={faUpload} />
                    Upload Video
                </label>
            </div>
        </div>
    </div>
);

export default InputSection;
