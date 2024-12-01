import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import lib from "./lib.json";

export default function MyStory() {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center z-10 dark:bg-slate-900 overflow-auto">
            <div className="lg:flex gap-20 items-start max-w-7xl mx-auto p-5">
                <ProfileCard
                    image={lib.image}
                    name={lib.name}
                    position={lib.position}
                    company={lib.company}
                />
                <div className="flex-1">
                    <div className="text-base lg:text-xl space-y-10 bg-gray-100 px-5 lg:px-10 py-10 rounded-lg flex flex-col justify-between overflow-y-auto max-h-[80vh]">
                        <div className="space-y-5">
                            <p className="text-gray-800 opacity-95 font-sans">
                                The idea of getting code through an SSH login is fascinating! I’ve revisited it multiple times just to check if the code is static or dynamic. It’s such a creative approach! I genuinely enjoy working with Linux-based systems (more on this later).
                            </p>
                            <p className="text-gray-800 opacity-95 font-sans">
                                Now, let me share my story — not the version you’ll find in my resume. Some of it might align with my professional journey, but much of it reflects a more personal side. I really appreciate this free-form input process, and in that spirit, my story might get a bit long. Apologies in advance if it feels too lengthy.
                            </p>
                        </div>
                        <div className="flex justify-start mt-5">
                            <button
                                onClick={() => navigate("/")}
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
