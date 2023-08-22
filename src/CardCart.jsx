import React from 'react'

const CardCart = ({ image, title, price }) => {

    return (
        <div className='relative h-[410px]'>

            <img className="p-2 mx-auto h-[330px] w-[330px] border-4" src={image} alt="" />
            <div className="bg-gray-200 absolute w-full bottom-0 rounded-xl">
                <h2 className="text-xl px-4 text-center border">{title.split(' ')[0]}</h2>
                <div className="flex  justify-center font-bold text-xl">
                    <p className="text-green-500">$</p>
                    <p className="font-lighter">{price}</p>
                </div>
            </div>
        </div>
    )
}
export default CardCart
