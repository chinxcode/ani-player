import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
import EmbedPlayer from "./components/EmbedPlayer";

function App() {
    return (
        <BrowserRouter>
            <Analytics />
            <Routes>
                <Route path="/" element={<VideoPlayer />} />
                <Route path="/play" element={<EmbedPlayer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
