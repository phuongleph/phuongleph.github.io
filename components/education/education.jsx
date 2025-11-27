import React from "react";
import EducationItem from "./education-item";

const Education = (props) => {
    return (
        <div data-section id='education' className='mb-16 group'>
            <h2 className='mb-8 font-semibold text-2xl md:text-3xl tracking-wider uppercase opacity-90 transition-all duration-300 group-hover:opacity-100 pb-3 border-b-2 border-transparent group-hover:border-purple-600 group-hover:text-purple-600 transition-colors duration-300'>Education</h2>
            {props.data.map(function(object, index){
                return <EducationItem
                    key={`${object.subject}+${object.startDate}`}  
                    subject={object.subject}
                    degree={object.degree}
                    university={object.university}
                    href={object.href}
                    startDate={object.startDate} 
                    endDate={object.endDate ? object.endDate : ''} 
                    logo={object.logo}
                />
            })}
        </div>
    )
}

export default Education