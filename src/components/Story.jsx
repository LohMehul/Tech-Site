import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Your Model
// import MacbookModel14 from "./models/MacbookModel14";
import MacbookModel from "./models/Macbook";

function MacBookModel() {
    const meshRef = useRef();

    useFrame(({ mouse }) => {
        if (!meshRef.current) return;

        // Smooth Mouse Rotation
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
            meshRef.current.rotation.y,
            mouse.x * 0.35,
            0.05
        );

        meshRef.current.rotation.x = THREE.MathUtils.lerp(
            meshRef.current.rotation.x,
            -mouse.y * 0.15,
            0.05
        );

        // Floating Motion
        meshRef.current.position.y = THREE.MathUtils.lerp(
            meshRef.current.position.y,
            Math.sin(Date.now() * 0.0015) * 0.15,
            0.05
        );
    });

    return (
        <Float speed={0.5} rotationIntensity={0.9} floatIntensity={0.5}>
            <group ref={meshRef} position={[0, -1, 0]}>
                <MacbookModel scale={0.05}  />
            </group>
        </Float>
    );
}

export default function AppleHeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#adb5bd]/10 blur-3xl" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

            <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
                {/* LEFT CONTENT */}
                <div className="z-10">
                    <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#adb5bd]">
                        MacBook Experience
                    </p>

                    <h1 className="text-5xl font-bold leading-[0.95] md:text-7xl">
                        Supercharged for
                        <span className="block bg-gradient-to-r from-white to-[#adb5bd] bg-clip-text text-transparent">
                            creators.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
                        Experience ultra performance with immersive 3D interaction,
                        Apple-inspired motion design, and cinematic storytelling.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="rounded-full bg-[#adb5bd] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(173,181,189,0.4)]">
                            Buy MacBook
                        </button>

                        <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-[#adb5bd] hover:bg-white/10">
                            Watch Event
                        </button>
                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-16 flex gap-10">
                        <div>
                            <h2 className="text-3xl font-bold">M3</h2>
                            <p className="text-sm text-gray-500">Next Gen Chip</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold">22hr</h2>
                            <p className="text-sm text-gray-500">Battery Life</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold">120Hz</h2>
                            <p className="text-sm text-gray-500">Liquid Retina</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT 3D */}
                <div className="relative h-[700px] w-full">
                    {/* Glass Background */}
                    <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-[0_20px_120px_rgba(0,0,0,0.9)]" />

                    {/* Light Reflection */}
                    <div className="absolute left-[-20%] top-[-20%] h-[300px] w-[300px] rounded-full bg-[#adb5bd]/10 blur-3xl" />

                    {/* Canvas */}
                    <Canvas camera={{ position: [0, 0, 7], fov: 35 }}>
                        <ambientLight intensity={1.4} />

                        <directionalLight
                            position={[5, 5, 5]}
                            intensity={2}
                            color={"#ffffff"}
                        />

                        <spotLight
                            position={[0, 5, 5]}
                            intensity={3}
                            angle={0.3}
                            penumbra={1}
                            color={"#adb5bd"}
                        />

                        <Environment preset="city" />

                        <MacBookModel />
                    </Canvas>

                    {/* Floating Bottom Card */}
                    <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-[#adb5bd]">
                                    Apple Silicon
                                </p>

                                <h2 className="mt-2 text-3xl font-bold">
                                    Performance meets elegance.
                                </h2>
                            </div>

                            <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 transition-all duration-300 hover:bg-[#adb5bd] hover:text-black">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}