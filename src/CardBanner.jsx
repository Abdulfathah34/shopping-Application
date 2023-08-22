import React from 'react'
import { Link } from 'react-router-dom'
const CardBanner = ({ image}) => {

    return (
        <>
<div className=''>
            <div className='w-auto  flex'>
            <img className="h-[200px] sm:h-auto sm:mx-2 object-cover lg:mx-0  w-full" src={image} alt="" />
            </div>
            
</div>
               
           
        </>
    )
}
export default CardBanner