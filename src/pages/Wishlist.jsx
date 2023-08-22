import React, { useState } from 'react'
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import { Link } from 'react-router-dom';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import CardCart from '../CardCart';


const Wishlist = ({ wishItem, setWish }) => {

  const handleWishRemove = ((rem) => {

    setWish((prev) => {
      return prev.filter((item) => item.id !== rem.id)
    })
    console.log(setWish)
  })

  console.log('wishItem', wishItem)


  return (

<>


    <div className='flex justify-center p-10 h-fit'>


      {wishItem.length === 0 && (
        <div className='my-[20%]'>

          <div className='flex '>
            <NotInterestedIcon className='scale-[6] opacity-60 ' />
            <h1 className='flex  ml-[50px] text-xl'>Nothing to show. visit  <Link to={'/'}> <div className='text-blue-400 '> home page  </div></Link> to add something</h1>
          </div>
        </div>
      )}
  
      <div className='flex flex-wrap gap-8'>
       
        {wishItem.map((item, index) => {
          return <div className='flex-col ' key={index}>
            <div className='relative my-auto'>
              <Link to={`/pages/details/${item.id}`}>
                <CardCart image={item.images[0]} title={item.title} price={item.price} /></Link>
              <button className='absolute bottom-0 right-0' onClick={() => { handleWishRemove(item) }}><RemoveCircleOutlineSharpIcon /></button>
            </div>

          </div>
        })}
      </div>
    </div>
    </>
  )
}

export default Wishlist
