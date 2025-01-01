import { useSearchParams } from "react-router-dom";
import WatchPlayer from "./WatchPlayer";

const EmbedPlayer = () => {
    const [searchParams] = useSearchParams();
    const videoUrl = searchParams.get("url");

    return (
        <div className="w-screen h-screen">
            {videoUrl ? (
                <WatchPlayer videoUrl={videoUrl} className="w-full h-full" />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-700">No video URL provided</div>
            )}
        </div>
    );
};

export default EmbedPlayer;
