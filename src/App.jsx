import { Analytics } from "@vercel/analytics/react";
import VideoPlayer from "./components/VideoPlayer";

function App() {
    return (
        <>
            <Analytics />
            <div className="App">
                <VideoPlayer />
            </div>
        </>
    );
}

export default App;
