import React from "react";
import Badge from "./main";
import lib from "../../lib.json";

export default function BadgeList() {
    return (
        <div className="inline-flex flex-wrap items-center">
            {lib.skills.map((skill, index) => (
                <Badge
                    key={index}
                    text={skill.text}
                    bgColor={skill.bgColor}
                    textColor={skill.textColor}
                />
            ))}
        </div>
    );
}
