import React from "react";
import ExperienceItem from "./experience-item";

const Experiences = (props) => {
    return (
        <div data-section id='experiences' className='mb-16 group'>
            <h2 className='mb-8 font-semibold text-2xl md:text-3xl tracking-wider uppercase opacity-90 transition-all duration-300 group-hover:opacity-100 pb-3 border-b-2 border-transparent group-hover:border-purple-600 group-hover:text-purple-600 transition-colors duration-300'>Experiences</h2>
            {props.data.map(function(object, index){
                return <ExperienceItem  
                    key={`${object.title}+${object.startDate}`}
                    title={object.title}
                    company={object.company}
                    href={object.href}
                    startDate={object.startDate}
                    endDate={object.endDate}
                    description={object.description}
                    logo={object.logo}
                    skills={object.skills}
                />
            })}
        </div>
    )
}

export default Experiences