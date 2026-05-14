import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import { features, featureSequence } from "../constants/index.js";
import clsx from "clsx";
import { lazy, memo, Suspense, useEffect, useRef } from "react";
// import { Html } from "@react-three/drei";
// import MacbookModel from "./models/Macbook.jsx";
// import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store/index.js";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { Preload } from "@react-three/drei";

const MacbookModel = lazy(() => import("./models/Macbook.jsx"));

const ModelScroll = memo(() => {
    const groupRef = useRef(null);
    // const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    // const isMobile = window.innerWidth < 1024;
    const { setTexture } = useMacbookStore();

    useEffect(() => {
        const firstVideo = featureSequence[0];

        const v = document.createElement('video');

        Object.assign(v, {
            src: firstVideo.videoPath,
            muted: true,
            playsInline: true,
            preload: 'auto',
            crossOrigin: 'anonymous',
        });

        v.load();

        requestIdleCallback(() => {
            featureSequence.slice(1).forEach((feature) => {
                const video = document.createElement('video');

                Object.assign(video, {
                    src: feature.videoPath,
                    muted: true,
                    playsInline: true,
                    preload: 'metadata',
                    crossOrigin: 'anonymous',
                });

                video.load();
            });
        });
    }, []);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // 3D MODEL ROTATION ANIMATION
            const modelTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#f-canvas',
                    start: 'top top',
                    end: 'bottom  top',
                    scrub: 1,
                    pin: true,
                }
            });

            // SYNC THE FEATURE CONTENT
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#f-canvas',
                    start: 'top center',
                    end: 'bottom  top',
                    scrub: 1,
                }
            })

            // 3D SPIN
            if (groupRef.current) {
                modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 2, ease: 'power1.inOut' })
            }

            // Content & Texture Sync
            timeline
                .call(() => setTexture('/videos/feature-1.mp4'))
                .to('.box1', { opacity: 1, y: 0, delay: 1 })

                .call(() => setTexture('/videos/feature-2.mp4'))
                .to('.box2', { opacity: 1, y: 0 })

                .call(() => setTexture('/videos/feature-3.mp4'))
                .to('.box3', { opacity: 1, y: 0 })

                .call(() => setTexture('/videos/feature-4.mp4'))
                .to('.box4', { opacity: 1, y: 0 })

                .call(() => setTexture('/videos/feature-5.mp4'))
                .to('.box5', { opacity: 1, y: 0 })
        });

        return () => ctx.revert();
    }, []);

    return (
        <group ref={groupRef}>
            <Suspense fallback={null}>
                <MacbookModel
                    scale={window.innerWidth < 1024 ? 0.05 : 0.08}
                    position={[0, -1, 0]}
                />
            </Suspense>
        </group>
    )
})

const Features = () => {
    return (
        <section id="features">
            <h2>See it all in a new light.</h2>

            <Canvas id="f-canvas" camera={{}}>
                <Preload all />
                <StudioLights />
                <ambientLight intensity={0.5} />
                <ModelScroll />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                        <img
                            src={feature.icon}
                            alt={feature.highlight}
                            loading="lazy"
                            decoding="async"
                        />
                        <p>
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features
