import React from "react";
import { Link } from "react-router-dom";

export default function ProfileCard({ image, name, position, company, company_url, contribution}) {
    return (
        <div className="space-y-5 flex-shrink-0 flex justify-center items-center flex-col lg:block">
            <img
                className="object-center h-36 w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 rounded-full lg:rounded-md"
                src={image}
                alt={name}
            />
            <div className="space-y-4">
                <div className="space-y-1 flex justify-center items-center flex-col lg:block">
                    <h1 className="text-xl md:text-2xl lg:text-4xl dark:text-gray-100">
                        {name}
                    </h1>
                    <p className="text-base lg:text-xl opacity-70 dark:text-slate-300">
                        {position} @<Link to={company_url}>{company}</Link>
                    </p>

                    <p className="text-base lg:text-lg opacity-70 dark:text-slate-400">
                        {contribution.position} @<Link to={contribution.url}>{contribution.org}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
