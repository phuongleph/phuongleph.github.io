import React from "react";
import Image from "next/image";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
    return (
        <div className='lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-48 self-center lg:self-auto transform lg:-translate-y-6'>
            <div className='flex flex-col items-center text-center'>
                {props.data.avatar && (
                    <div className='mb-6'>
                        <Image src={props.data.avatar} alt={`${props.data.name} avatar`} width={144} height={144} className='rounded-full object-cover' />
                    </div>
                )}
                <h1 className='text-5xl subpixel-antialiased tracking-wide'>{props.data.name}</h1>
                <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider'>{props.data.headline}</h2>
            </div>
            <Navigation></Navigation>
            <Socials data={props.data.socials}></Socials>
        </div>
    )
}

export default Header