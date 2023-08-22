import React from 'react'
import { Link } from 'react-router-dom'
const CardSec = ({ image}) => {

    return (
        <>
<div className=''>

            <img className="m-auto p-2 mx-auto h-[400px] w-[400px] border border-solid rounded-xl bg-fuchsia-50" src={image} alt="" />
            
</div>
               
           
        </>
    )
}
export default CardSec