import React from "react";
import Image from "next/image";

function SkillItem(props) {
    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-background hover:bg-surface-200 transition-all group cursor-pointer">
            {props.logo && (
                <div className="mb-3">
                    <Image src={props.logo} alt={props.name} width={50} height={50} className='object-contain' />
                </div>
            )}
            <div className='text-center text-sm font-medium'>{props.name}</div>
        </div>
    )
}

export default SkillItem;
