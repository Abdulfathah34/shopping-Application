import React from 'react'

const Card = ({ image, title, price }) => {

    return (
        <div className='relative h-[260px]'>

            <img className="p-2 mx-auto h-[180px] " src={image} alt="" />
            <div className="bg-gray-200 absolute w-full bottom-0">
                <h2 className="text-xl px-4 text-center">{title.split(' ')[0]}</h2>
                <div className="flex  justify-center font-bold text-xl">
                    <p className="text-green-500">$</p>
                    <p className="font-lighter">{price}</p>
                </div>
            </div>
        </div>
    )
}
export default Card
