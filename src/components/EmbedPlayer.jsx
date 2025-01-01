import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import WatchPlayer from "./WatchPlayer";

const EmbedPlayer = () => {
    const [searchParams] = useSearchParams();
    const videoUrl = searchParams.get("url");

    if (!videoUrl) {
        return (
            <div className="w-screen h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
                <div className="text-center max-w-md">
                    <FontAwesomeIcon icon={faCircleExclamation} className="text-yellow-500 text-5xl mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-3">No Video URL Provided</h2>
                    <p className="text-gray-400 mb-4">Please provide a video URL using the &apos;url&apos; parameter:</p>
                    <code className="block bg-gray-800 p-3 rounded-lg text-purple-400 text-sm">/play?url=YOUR_VIDEO_URL</code>
                </div>
            </div>
        );
    }

    return (
        <div className="w-screen h-screen">
            <WatchPlayer videoUrl={videoUrl} className="w-full h-full" />
        </div>
    );
};

export default EmbedPlayer;
