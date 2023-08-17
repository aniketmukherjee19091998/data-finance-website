import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='font-bold py-2 md:text-4xl sm:text-3xl text-2xl'>Want tips and tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4 '>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-full text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-[#00df9a] w-[200px] rounded-full font-semibold my-6 ml-4 px-6 py-3 text-[#000]'>Notify Me</button>
                    </div>
                    <p>We care about the protection of Your Data, Read our <span className='text-[#00df9a] hover:cursor-pointer hover:text-white' href="">Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter