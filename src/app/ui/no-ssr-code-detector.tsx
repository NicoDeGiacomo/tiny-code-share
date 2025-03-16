"use client"

import dynamic from 'next/dynamic';

const NoSSRCodeDetectorComponent = dynamic(() => import('../ui/code-detector'), { 
    ssr: false,
    loading: () => 
    <div className='flex min-v items-center justify-center'>
        <p>Loading...</p>
    </div>,
})

export default function NoSSRCodeDetector() {
    return (
        <NoSSRCodeDetectorComponent/>
    )
}
