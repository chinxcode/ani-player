import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
import EmbedPlayer from "./components/EmbedPlayer";
import NotFound from "./components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Analytics />
            <Routes>
                <Route path="/" element={<VideoPlayer />} />
                <Route path="/play" element={<EmbedPlayer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
