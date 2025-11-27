import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
    return (
        <div data-section id='projects' className='mb-16 group'>
            <h2 className='mb-8 font-semibold text-2xl md:text-3xl tracking-wider uppercase opacity-90 transition-all duration-300 group-hover:opacity-100 pb-3 border-b-2 border-transparent group-hover:border-purple-600 group-hover:text-purple-600 transition-colors duration-300'>Projects</h2>
            {props.data.map(function(object, index){
                return <ProjectItem
                    key={object.name}
                    name={object.name}
                    lib={object.framework}
                    description={object.description}
                    href={object.href}
                    image={object.image}
                />
            })}
        </div>
    )
}

export default Projects