import React from "react";
import ProfileCard from "./components/ProfileCard";
import lib from "./lib.json";

export default function Home() {
    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center z-10 dark:bg-slate-900">
            <div className="lg:flex gap-20 items-center">
                <ProfileCard
                    image={lib.image}
                    name={lib.name}
                    position={lib.position}
                    company={lib.company}
                    company_url={lib.company_url}
                    contribution={lib.community_contribution}
                />
                <div>
                    <div className="text-base lg:text-xl space-y-10 bg-gray-100 px-5 lg:px-10 py-10 m-5 rounded-lg flex flex-col justify-between">
                        <div>
                            {lib.aboutList.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-gray-800 opacity-95 font-sans py-1"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {lib.links.map((link, index) => (
                                <li key={index} className="list-none">
                                    <a
                                        href={link.url}
                                        className="text-indigo-600 text-base"
                                    >
                                        {link.name}
                                    </a>
                                    <span>
                                        &nbsp;
                                        {lib.links.length - 1 !== index && (
                                            <span className="text-gray-700">
                                                /
                                            </span>
                                        )}
                                        &nbsp;
                                    </span>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
