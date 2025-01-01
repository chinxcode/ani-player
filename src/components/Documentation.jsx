import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck, faCode } from "@fortawesome/free-solid-svg-icons";

const Documentation = ({ darkMode }) => {
    const [copied, setCopied] = useState(false);
    const currentDomain = window.location.origin;
    const exampleUrl = "https://example.com/video.m3u8";
    const iframeCode = `<iframe
    src="${currentDomain}/play?url=${exampleUrl}"
    width="100%"
    height="100%"
    frameborder="0"
    allowfullscreen
></iframe>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(iframeCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg p-6 shadow-lg mb-8`}>
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-purple-400" : "text-purple-600"}`}>
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                Embed Player Documentation
            </h2>

            <div className={`${darkMode ? "text-gray-300" : "text-gray-700"} space-y-4`}>
                <p>
                    You can easily embed Ani-player in your website using our{" "}
                    <code className="bg-gray-700 text-purple-300 px-1 rounded">/play</code> path.
                </p>

                <div className="space-y-2">
                    <h3 className="font-semibold">Usage:</h3>
                    <p>
                        Simply append your video URL to:{" "}
                        <code className="bg-gray-700 text-purple-300 px-1 rounded">{currentDomain}/play?url=YOUR_VIDEO_URL</code>
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold">Supported Formats:</h3>
                    <ul className="list-disc list-inside">
                        <li>HLS (.m3u8)</li>
                        <li>MP4</li>
                        <li>FLV</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold">Example Embed Code:</h3>
                    <div className="relative">
                        <pre className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} p-4 rounded-lg overflow-x-auto`}>
                            <code>{iframeCode}</code>
                        </pre>
                        <button
                            onClick={handleCopy}
                            className={`absolute top-2 right-2 p-2 rounded ${
                                darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        >
                            <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? "text-green-500" : ""} />
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold">Features:</h3>
                    <ul className="list-disc list-inside">
                        <li>Responsive design</li>
                        <li>Quality selection</li>
                        <li>Keyboard shortcuts</li>
                        <li>Picture-in-Picture</li>
                        <li>Screenshot capability</li>
                        <li>Custom playback speed</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Documentation;
