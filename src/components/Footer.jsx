import React from 'react'

import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {

    const services = [
        {
            id: 1,
            Title: "Solutions",
            List: ["Analytics", "Marketing", "Commerce", "Insight"]
        },
        {
            id: 2,
            Title: "Support",
            List: ["Pricing", "Documentation", "Guides", "API Status"]
        },
        {
            id: 3,
            Title: "Company",
            List: ["About", "Blogs", "Jobs", "Press", "Careers"]
        },
        {
            id: 4,
            Title: "Legal",
            List: ["Claim", "Policy", "Terms"]
        }
    ];

    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 grid-cols-1 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>REACT.</h1>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui tenetur nam, distinctio neque commodi officia id animi quos labore corrupti obcaecati odio fugit nostrum dicta. Repudiandae saepe est dolor!</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                {
                    services.map((data) => {
                        return (
                            <div key={data.id}>
                                <h1 className='font-medium md:text-xl sm:text-sm text-gray-400'>{data.Title}</h1>
                                {data.List.map((item) => {
                                    let i = Math.random()
                                    // I know it's stupid but I am too dumb to do anything about this
                                    //// console.log("key : " + i)
                                    return (
                                        <ul key={i}>
                                            <li className='py-2 text-sm'>{item}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer