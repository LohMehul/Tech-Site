import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { memo, useRef } from "react";

const Showcase = memo(() => {
    const isTablet = window.innerWidth < 1024;
    const videoRef = useRef(null);


    useGSAP(() => {
        const ctx = gsap.context(() => {
            if (!isTablet) {
                videoRef.current?.play();

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#showcase',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    }
                });

                timeline
                    .to('.mask img', {
                        scale: 1.05,
                        force3D: true,
                    })
                    .to('.content', {
                        opacity: 1,
                        y: 0,
                        force3D: true,
                        ease: 'none'
                    });
            }
        });

        return () => ctx.revert();
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <img src="./picture1.jpg" alt="" />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    M4, the next generation of Apple silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.
                            </p>
                            <p>
                                A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                            </p>
                            <p className="text-primary">Learn more about Apple Intelligence</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});
export default Showcase;
