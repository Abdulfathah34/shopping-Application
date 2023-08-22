import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CardSec from '../CardSec'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import HomeIcon from '@mui/icons-material/Home';
import Modal from '../Modal'

const Details = ({ setCartItem, setWishItem }) => {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((result) => {
            setItem(result.data)
            console.log(item)
        })

    }, [])

    const [check, setCheck] = useState(false)


    const handleCartItem = (() => {

        setCartItem((prev) => {

            return prev.concat(item)
        })

        //function that control the items in cart
        // use prev as the variable which hold the previous value of the cartItem
    })


    const handleWishItem = (() => {

        setWishItem((prev) => {

            return prev.concat(item)
        })

        //function that control the items in wishlist
        // use prev as the variable which hold the previous value of the wishItem
    })


    return (

        <div className='flex bg-blue-100 h-screen w-screen '>
            {check && <Modal />}
            {item && <div className='flex-col w-full '>
                <h1 className='text-7xl flex justify-center mt-3'>{item.title}</h1>
                <h1 className='text-xl flex justify-center mt-5'>{"Brand: " + item.brand}</h1>
               

                <div className='flex justify-around '>
                    {item.images.map((image) => {
                        return <div className='hover:scale-[1.25] m-14 transition-all'>
                            <CardSec image={image} />

                        </div>
                    })}
                </div>


                { /******************************************************************/}

                {/* <div className="w-20 ">

                    {item?.images && item?.images.map((node, index) => {

                        return <img onMouseEnter={() => setPreivew(index)} key={index} className={`${preview === index ? "border-2 border-blue-600" : "border-2"} mb-1`} src={node} alt="" />

                    })}

                </div>

                <div className=" w-full px-4">

                    {

                        item?.images && item?.images[preview] &&

                        <img className="w-full h-auto" src={item?.images[preview]} />

                    }

                </div> */}


















                { /******************************************************************/}
                <h1 className='text-3xl flex justify-center mt'>{item.description}</h1>
                <div className='flex justify-center my-5  gap-3'>
                    <h1 className='text-5xl flex justify-center '>{"$" + item.price + "%"}</h1>
                    <h1 className='text-2xl flex justify-center mt-3 text-green-600'>{item.discountPercentage + "% off"}</h1>
                </div>
                <h1 className='text-2xl flex justify-center text-green-600'>{"Rating:" + item.rating}</h1>


                <div className='scale-[1.8] mt-5 flex justify-center text-green-600'>
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={item.rating} precision={0.1} readOnly />
                    </Stack>
                </div>


                <div className='flex justify-center gap-5 '>
                    <div className='flex gap-5'>
                        <div className='flex justify-center mr-[20px] '>
                            <Link to={"/"}>
                                <button className="mx-auto ml-5" >
                                    <HomeIcon className="scale-[2.95] p-1 rounded-md bg-white mt-[53px] hover:scale-[3.20] hover:bg-blue-400 transition-all" />
                                </button>
                            </Link>
                        </div>

                        <button className='bg-green-500 w-auto flex justify-center mt-8 p-4 text-2xl rounded-lg hover:scale-[1.05] transition-all' onClick={() => { handleCartItem(); }}>Add to cart</button>
                        <button className='bg-red-200 w-auto flex justify-center mt-8 p-4 text-2xl rounded-lg hover:scale-[1.05] transition-all' >Buy Item</button>
                        <div className='flex justify-center  '>
                            <button className="mx-auto ml-5" onClick={() => { handleWishItem() }}>
                                <FavoriteBorderSharpIcon className="scale-[3] p-1 rounded-md bg-white mt-8 hover:scale-[3.20] hover:bg-[#FE251B] transition-all" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
        </div >
    )
}

export default Details
