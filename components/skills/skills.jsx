import React from "react";
import SkillItem from "./skill-item";

const Skills = (props) => {
    const data = props.data || [];

    return (
        <div data-section id='skills' className='mb-16 group'>
            <h2 className='mb-8 font-semibold text-2xl md:text-3xl tracking-wider uppercase opacity-90 transition-all duration-300 group-hover:opacity-100 pb-3 border-b-2 border-transparent group-hover:border-purple-600 group-hover:text-purple-600 transition-colors duration-300'>Skills</h2>
            {data.length > 0 ? (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                    {data.map((object, index) => (
                        <SkillItem
                            key={`${object.name}+${object.category}`}
                            name={object.name}
                            logo={object.logo}
                        />
                    ))}
                </div>
            ) : (
                <p>No skills data available</p>
            )}
        </div>
    )
}

export default Skills;
