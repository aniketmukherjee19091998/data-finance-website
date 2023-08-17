import React from 'react'
import LaptopImg from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={LaptopImg} alt="laptop-png" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>Manage Data Analytics Centrally</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptas voluptatum mollitia nulla, necessitatibus expedita maxime voluptatibus laborum sequi asperiores repellendus debitis. Dolorem nisi temporibus, illum voluptate magnam hic culpa?</p>
                    <button className='bg-[#000] w-[200px] rounded-full font-semibold my-6 mx-auto md:mx-0 px-6 py-3 text-[#00df9a]'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics