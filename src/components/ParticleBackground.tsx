import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticleBackground = () => {

    const particlesInit = async (main: any) => {
        console.log(main);
        await loadFull(main);
    };

    return (
        <Particles
            id="home-particles"
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full p-0 m-0 -z-0"
            options={{
                background: {
                    color: "#493894"
                },
                fullScreen: {
                    enable: false
                },
                particles: {
                    color: { value: "#fff" },
                    move: {
                        direction: "bottom",
                        enable: true,
                        outModes: "out",
                        speed: 2
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 50
                    },
                    opacity: {
                        value: 0.6
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: 2
                    },
                    wobble: {
                        enable: true,
                        distance: 10,
                        speed: 10
                    },
                    zIndex: {
                        value: { min: 0, max: 100 }
                    }
                }
            }}
            init={particlesInit} 
        />
    )
}