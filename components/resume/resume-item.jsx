"use client"

import React from "react";
import Image from "next/image";

const ResumeItem = ({ title, file, label, logo }) => {
    const openFile = () => {
        if (!file) return;
        try {
            window.open(file, '_blank', 'noopener,noreferrer');
        } catch (e) {
            // fallback
            window.location.href = file;
        }
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') openFile();
    }

    return (
            <div role='button' tabIndex={0} onKeyDown={handleKey} onClick={openFile} className='group flex flex-row mb-4 p-5 transition-all hover:bg-surface-200 cursor-pointer'>
                <div className='basis-1/4 mr-2 flex items-center'>
                    <div className='w-[106px] h-[106px] flex items-center justify-center bg-white/3 rounded-md overflow-hidden'>
                        {logo ? (
                            <Image src={logo} alt={`${title} logo`} width={96} height={96} className='object-contain' />
                        ) : (
                            <svg className='w-10 h-10 text-white/80' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden>
                                <path d='M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7z' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                <path d='M13 2v7h7' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                <path d='M9 13h6' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                <path d='M9 17h6' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                        )}
                    </div>
                </div>
                <div className='basis-3/4'>
                    <div className='font-semibold text-lg md:text-xl'>{title}</div>
                    <div className='mb-2 text-sm text-surface-600'>{label}</div>
                </div>
            </div>
    )
}

export default ResumeItem;
