import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='mb-16 group'>
            <div className='text-surface-600'>
                {props.data.about.map(function(paragraph, index){
                    const isFirstParagraph = index === 0;
                    return <div className={`mb-6 ${isFirstParagraph ? 'text-2xl md:text-4xl font-semibold' : ''}`}>{paragraph}</div>
                })}
            </div>
        </div>
    )
}

export default About