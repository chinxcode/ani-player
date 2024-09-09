import { useEffect, useRef } from "react";
import Artplayer from "artplayer";
import Hls from "hls.js";
import artplayerPluginHlsQuality from "artplayer-plugin-hls-quality";

const WatchPlayer = ({ videoUrl, localFile, getInstance, ...rest }) => {
    const artRef = useRef(null);

    useEffect(() => {
        const art = new Artplayer({
            url: videoUrl,
            autoplay: false,
            autoSize: false,
            autoMini: true,
            loop: false,
            playbackRate: true,
            fullscreen: true,
            autoOrientation: true,
            aspectRatio: true,
            autoPlayback: true,
            setting: true,
            screenshot: true,
            miniProgressBar: true,
            hotkey: true,
            pip: true,
            airplay: true,
            lock: true,
            isLive: false,
            container: artRef.current,
            customType: {
                m3u8: playVideo,
                flv: playVideo,
                mp4: playVideo,
            },
            controls: [
                {
                    name: "skip-85",
                    position: "right",
                    html: '<button">+85s</button>',
                    click: function () {
                        art.seek = art.currentTime + 85;
                    },
                },
            ],
            plugins: [
                artplayerPluginHlsQuality({
                    setting: true,
                    getResolution: (level) => `${level.height !== 0 ? level.height + "p" : "Default"}`,
                    title: "Quality",
                    auto: "Auto",
                }),
            ],
        });

        if (localFile) {
            art.switchUrl(URL.createObjectURL(localFile));
        }

        if (getInstance && typeof getInstance === "function") {
            getInstance(art);
        }

        return () => {
            if (art && art.destroy) {
                art.destroy(false);
            }
        };
    }, [videoUrl, localFile, getInstance]);

    function playVideo(video, url, art) {
        if (url.includes(".m3u8")) {
            if (Hls.isSupported()) {
                if (art.hls) art.hls.destroy();
                const hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(video);
                art.hls = hls;
                art.on("destroy", () => hls.destroy());
            } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = url;
            } else {
                art.notice.show = "Unsupported playback format: m3u8";
            }
        } else {
            video.src = url;
        }
    }

    return <div ref={artRef} {...rest}></div>;
};

export default WatchPlayer;
