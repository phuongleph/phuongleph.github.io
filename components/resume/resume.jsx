import React from "react";
import ResumeItem from "./resume-item";

const Resume = (props) => {
    const data = props.data || [];

    return (
        <div data-section id='resume' className='mb-16 group'>
            <h2 className='mb-8 font-semibold text-2xl md:text-3xl tracking-wider uppercase opacity-90 transition-all duration-300 group-hover:opacity-100 pb-3 border-b-2 border-transparent group-hover:border-purple-600 group-hover:text-purple-600 transition-colors duration-300'>Resumes</h2>
            <a1 className='mb-3 font-medium text-sm md:text-base italic '>"Click to view my resumes"</a1>

            <div className='flex flex-col'>
                {data.map((item) => (
                    <ResumeItem key={item.title} title={item.title} file={item.file} label={item.label} logo={item.logo} />
                ))}
            </div>
        </div>
    )
}

export default Resume;
