import React from "react";
import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";
import { FaRocket, FaEnvelope, FaReact, FaPalette, FaPlug, FaMobileAlt, FaCode } from "react-icons/fa";
import { SiPagespeedinsights } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const FeatureCard = ({ title, icon }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg text-white hover:scale-105 transition duration-300">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
    </div>
);

const Hero = () => {
    return (
        <RevealOnScroll>
            <div id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 py-12 lg:px-20 lg:py-16">
                <div className="grid items-center justify-center mx-auto lg:grid-cols-12 lg:gap-8 xl:gap-38">
                    <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            <span>Welcome to </span>
                            <span className="text-yellow-300">
                                <Typewriter
                                    words={[
                                        "A Developer's Dream Portfolio",
                                        "Clean Code & Bold Ideas",
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={5000}
                                />
                            </span>
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl">
                            Showcasing a project based portfolio with clean code, bold ideas, and pixel-perfect design.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#about"
                                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white border border-white rounded-lg hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-white transition duration-300 hover:scale-105"
                            >
                                <FaRocket /> Explore
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white border border-white rounded-lg hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-white transition duration-300 hover:scale-105"
                            >
                                <FaEnvelope /> Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:col-span-5 justify-center">
                        <img
                            src=""
                            alt="developer photo or avatar"
                            className="animate-float transform hover:rotate-3 transition duration-500 shadow-2xl mx-2"
                        />
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <h2 className="text-3xl font-bold text-center mb-8 text-white col-span-full">Key Features that drives this portfolio includes:</h2>
                    <FeatureCard title="React Framework" icon={<FaReact />} />
                    <FeatureCard title="APIs & Integrations" icon={<FaPlug />} />
                    <FeatureCard title="Fast Performance" icon={<SiPagespeedinsights />} />
                    <FeatureCard title="Clean Code" icon={<FaCode />} />
                    <FeatureCard title="Responsive Design" icon={<FaPalette />} />
                    <FeatureCard title="Mobile First Approach" icon={<FaMobileAlt />} />
                </div>
            </div>
        </RevealOnScroll>
    );
};

export default Hero;