import { useEffect, useRef } from "react";

const Hero = () => {

    const videoRef = useRef();

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        video.playbackRate = 2;

        const handleCanPlay = () => {
            video.play().catch(() => { });
        };

        video.addEventListener("canplay", handleCanPlay);

        return () => {
            video.removeEventListener("canplay", handleCanPlay);
        };
    }, []);

    return (
        <section id="hero">

            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Pro" />
            </div>

            {/* <video ref={videoRef} src="/videos/hero.webm" playsInline autoPlay muted preload="true" ></video> */}

            <video
                ref={videoRef}
                className="hero-video"
                src="/videos/hero.webm"
                playsInline
                autoPlay
                muted
                loop
                preload="metadata"
            />
            <button>Buy</button>

            <p>From $1699 or $145 for 12 months</p>

        </section>
    );
}

export default Hero;
