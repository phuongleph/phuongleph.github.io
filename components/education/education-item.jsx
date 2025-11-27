import React from "react";
import Image from "next/image";

function EducationItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all bg-background hover:bg-surface-200">
            <div className="basis-1/4 mr-2">
                {props.logo && <Image src={props.logo} alt="University Logo" width={70} height={70} className='object-contain object-top pt-2' />}
            </div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.subject} ({props.degree})</a>
                <br />
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'> {props.university}</a>
                <div className='mb-2 text-surface-600'>{props.startDate} {checkEndDate(props)}</div>
                
            </div>
        </div>
    )
}

function checkEndDate(props) {
    if (!props.endDate) {
        return '';
    } else {
        return ('- ' + props.endDate); 
    }  
}

export default EducationItem