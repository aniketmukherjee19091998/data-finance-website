import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                <div className='flex justify-center items-center sm:gap-0 md:gap-3 gap-4'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, Flexible Financing For</p>
                    <TypeAnimation
                        className='md:text-5xl sm:text-4xl text-xl font-bold '
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'BTB',
                            1000,
                            'BTC',
                            1000,
                            'SASS',
                            1000,
                        ]}
                        speed={30}
                        repeat={Infinity}
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor Your Data Analytics to Increase Your Revenue</p>
                <button className='bg-[#00df9a] w-[200px] rounded-full font-semibold my-6 mx-auto px-6 py-3 text-[#000]'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero