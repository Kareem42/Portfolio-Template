import React from "react";
import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";
import { FaLightbulb, FaLaptopCode, FaCloudDownloadAlt } from "react-icons/fa";
import { MdCleaningServices, MdCastForEducation } from "react-icons/md";
import { GiTabletopPlayers } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";

const TraitCard = ({ title, icon }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg text-white hover:scale-105 transition duration-300">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
    </div>
);

const About = () => {
    return (
        <RevealOnScroll>
            <div id="about" className="relative min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white px-6 py-12 lg:px-20 lg:py-16">
                <div className="grid items-center justify-center mx-auto lg:grid-cols-12 lg:gap-8 xl:gap-0">
                    {/* Text Section */}
                    <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
                        <h2 className="text-4xl font-extrabold mb-4 md:text-5xl xl:text-6xl">
                            About Me
                        </h2>

                        {/* Replace the text below with your own introduction */}
                        <p className="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur atque quam quo in deserunt! Repellat animi reiciendis, veritatis obcaecati, doloremque sapiente laudantium quasi debitis quisquam, quidem id a earum praesentium.
                        </p>
                        <p className="max-w-2xl font-light text-gray-200 md:text-lg lg:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta exercitationem, eos, adipisci sequi deserunt officia corporis obcaecati, eveniet ipsa maxime nobis molestias optio aspernatur in fuga vel ullam recusandae. Beatae?
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="hidden lg:flex lg:col-span-5 justify-center">
                        <img
                            src="" // Replace with your own avatar or illustration
                            alt="developer avatar"
                            className="animate-float transform hover:rotate-3 transition duration-500 shadow-2xl rounded-full w-64 h-64 object-cover"
                        />
                    </div>
                </div>

                {/* Traits / Skills Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TraitCard title="Creative Problem Solver" icon={<FaLightbulb />} />
                    <TraitCard title="Full-Stack Developer" icon={<FaLaptopCode />} />
                    <TraitCard title="Clean & Scalable Code" icon={<MdCleaningServices />} />
                    <TraitCard title="Team Player" icon={<GiTabletopPlayers />} />
                    <TraitCard title="Continuous Learner" icon={<MdCastForEducation />} />
                    <TraitCard title="Tech Enthusiast" icon={<GrTechnology />} />
                </div>


                {/* Download CV Button (Be sure to import your CV before adding in the path to the CV)*/}
                <div className="mt-12 text-center">
                    <a
                        href="/path/to/your/cv.pdf" // Replace with your CV link
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white border border-white rounded-lg hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-white transition duration-300 hover:scale-105"
                        >
                        <FaCloudDownloadAlt className="text-lg" /> Download CV
                    </a>
                </div>
            </div>
        </RevealOnScroll>
    );
};

export default About;
