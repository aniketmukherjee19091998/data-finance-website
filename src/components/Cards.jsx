import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/Triple.png'

const Cards = () => {

    const planInfo = [
        {
            key: 1,
            Image: Single,
            Alttext: "image",
            NoOfUsers: "Single User",
            Fee: '$49',
            StorageSpace: '500 GB Storage',
            GrantedUsers: '1 Granted User',
            SendLimit: 'Send Up To 2 GB'
        },
        {
            key: 2,
            Image: Double,
            Alttext: "image",
            NoOfUsers: "Double Users",
            Fee: '$99',
            StorageSpace: '1 TB Storage',
            GrantedUsers: '2 Granted Users',
            SendLimit: 'Send Up To 5 GB'
        },
        {
            key: 3,
            Image: Triple,
            Alttext: "image",
            NoOfUsers: "Triple Users",
            Fee: '$149',
            StorageSpace: '2 TB Storage',
            GrantedUsers: '3 Granted Users',
            SendLimit: 'Send Up To 15 GB'
        }
    ];

    return (
        <div className='w-full py-[10rem] px-4 bg-white text-black'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                {
                    planInfo.map((data) => {
                        return (
                            <div key={data.key} className={data.key === 2 ? 'w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300' : 'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'}>
                                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={data.Image} alt={data.Alttext} />
                                <h2 className='text-2xl font-bold text-center py-8'>{data.NoOfUsers}</h2>
                                <p className='text-center text-4xl font-bold'>{data.Fee}</p>
                                <div className='text-center font-medium'>
                                    <p className='py-2 border-b mx-8 mt-8'>{data.StorageSpace}</p>
                                    <p className='py-2 border-b mx-8'>{data.GrantedUsers}</p>
                                    <p className='py-2 border-b mx-8'>{data.SendLimit}</p>
                                </div>
                                <button className={data.key === 2 ? 'bg-[#000] w-[200px] rounded-full font-semibold my-6 mx-auto px-6 py-3 text-[#00df9a]' : 'bg-[#00df9a] w-[200px] rounded-full font-semibold my-6 mx-auto px-6 py-3 text-[#000]'}>Start Trial</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards