import React from 'react'
import { Link } from 'react-router-dom'


const CategoryBanner = () => {
    return (
        <div className='w-screen bg-blue-300'>

            <div className='flex justify-evenly mx-3 my-auto py-2'>
                <Link to={'/groceries'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3724/3724788.png" alt="" className='w-16 h-16 hover:scale-125 transition-all' />
                </Link>
                <Link to={'/Laptop'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5512/5512029.png" alt="" className='w-16 h-16 hover:scale-125 transition-all' />
                </Link>
                <Link to={'/fragrances'}>
                    <img src="https://cdn.pixabay.com/photo/2020/11/29/07/06/aroma-5786653_1280.png" alt="" className='w-16 h-16 hover:scale-125 transition-all' />
                </Link>
                <Link to={'/Smartphone'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/186/186239.png" alt="" className='w-16 h-16 hover:scale-125 transition-all' />
                </Link>
                <Link to={'/skincare'}>
                    <img src="https://img.freepik.com/premium-vector/woman-with-facial-sparkle-mask-line-icon-beauty-cosmetic-face-mask-girl_541122-187.jpg?w=2000" alt="" className='w-16 h-14 hover:scale-125 transition-all rounded-3xl' />
                </Link>
                <Link to={'/home-decoration'}>
                    <img src="https://www.clipartmax.com/png/middle/218-2181001_interior-decoration-furnishing-home-decor-icon-png.png" alt="" className='w-14 h-14 hover:scale-125 transition-all rounded-3xl' />
                </Link>
            </div>

        </div>
    )
}

export default CategoryBanner
