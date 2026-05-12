import { useEffect, useRef } from "react";

const Hero = () => {

    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 3;
    }, []);

    return (
        <section id="hero">

            <div>
                <h1>MacBook Pro</h1>
                <img src="/public/title.png" alt="" />
            </div>

            <video ref={videoRef} src="/public/videos/hero.mp4" playsInline autoPlay muted ></video>

            <button>Buy</button>

            <p>From $1699 or $145 for 12 months</p>

        </section>
    );
}

export default Hero;
