import React from "react";

const Credits = (props) => {
    return (
        <div data-section id='credits' className='group mt-32'>
            <div className='text-surface-600 text-sm md:text-base space-y-6'>
                <div className='leading-relaxed'>
                    I'm always open to new opportunities, collaborations, or just a friendly chat.
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-surface-700'>
                    <div>
                        <div className='font-semibold text-surface-400 text-xs uppercase tracking-wider mb-1'>Name</div>
                        <span>Le Pham Hoang Phuong</span>
                    </div>
                    <div>
                        <div className='font-semibold text-surface-400 text-xs uppercase tracking-wider mb-1'>Phone</div>
                        <span>(+84) 393 491 710</span>
                    </div>
                    <div>
                        <div className='font-semibold text-surface-400 text-xs uppercase tracking-wider mb-1'>Email</div>
                        <span>phuongleph.work@gmail.com</span>
                    </div>
                    <div>
                        <div className='font-semibold text-surface-400 text-xs uppercase tracking-wider mb-1'>Location</div>
                        <span>Ho Chi Minh City, Viet Nam</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credits