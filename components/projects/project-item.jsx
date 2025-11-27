import React from "react";
import Image from "next/image";

function ProjectItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all bg-background hover:bg-surface-200">
            <div className="basis-1/4 mr-2">
                {props.image && <Image src={props.image} alt={props.name} width={70} height={70} className='object-cover rounded' />}
            </div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.name}</a>
                <div className='text-surface-600 mb-2'>{props.lib}</div>
                <div className='text-surface-600 text-sm'>{props.description}</div>
            </div>
        </div>
    )
}

export default ProjectItem