import Card from '../Card'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import CardCart from '../CardCart';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

const Cart = ({ setCartItem, cartItem }) => {

    const [total, setTotal] = useState(0)
    const [count, setCount] = useState([])

    useEffect(() => {
        setTotal(0)
        cartItem.map((el) => {
            return setTotal((prev) => {
                return prev + el.price * count
            })
        })
    }, [cartItem, count])


    const handleRemove = ((index) => {

        setCartItem((prev) => {
            setFlag(false)
            return prev.filter((item) => item !== cartItem[index])

        })
    })





    const [flag, setFlag] = useState(false)
    const handleModal = (() => {
        setFlag(true)
    })

    const handleClose = (() => {
        setFlag(false)
    })

    const handleAdd = () => {
        setCount((prev) => {
            return prev + 1
        })
    }
    const handleSub = () => {
        {
            count > 1 && setCount((prev) => {
                return prev - 1

            })
        }
    }


    return (

        <div className=' w-screen h-screen '  >


            {cartItem.length === 0 && (
                <div className='flex justify-center h-screen '>
                    <div className='my-auto flex-col'>
                        <ProductionQuantityLimitsSharpIcon className='scale-[5] opacity-70 ' />
                        <h1 className='flex ml-[60px] text-xl'>Missing cart item. visit
                            <Link to={'/'}>
                                <div className='text-blue-400 '> home page  </div>
                            </Link> to add something
                        </h1>

                    </div>
                </div>
            )
            }
            <div className='flex flex-wrap justify-center gap-20 border-4'>
                {cartItem.map((item, index) => <div className='flex  m-4' key={index}>
                    <div className='relative'>
                        <Link to={`/pages/details/${item.id}`}>
                            <CardCart image={item.images[0]} title={item.title} price={item.price} /></Link>

                        <button className='absolute bottom-16 rounded-lg right-2  scale-150 hover:scale-[2]' onClick={handleModal}><RemoveCircleOutlineSharpIcon className='scale-100' onClick={handleModal} /></button>
                        {flag && <div className='fixed inset-0 bg-opacity-20 backdrop-blur-sm  flex justify-center items-center'>
                            <div className='w-[500px] h-[300px] flex justify-center bg-gray-300 relative rounded-3xl'>
                                <CloseIcon className='absolute top-3 right-3 scale-[1.5]' onClick={handleClose} />
                                <div className='my-auto text-2xl text-blue-50'>
                                    Are you sure you want to remove?
                                </div>
                                <button className='absolute right-3 bottom-5 bg-red-300 text-2xl p-2 rounded-lg text-black/80' onClick={() => handleRemove(index)}>
                                    Remove
                                </button>
                            </div>
                        </div>}
                        <div className='flex justify-center text-4xl mt-4 gap-3'>
                            <button onClick={handleSub}>-</button>
                            <div>
                                <input type="text" className='w-20 border-2 px-6 text-3xl ' value={count} />
                            </div>
                            <button onClick={handleAdd}>+</button>
                        </div>

                    </div>
                </div>)}


            </div>

            <div className='flex justify-center text-5xl m-4 '>
                <h1 className='text-4xl'>Total price:</h1><h1 className='inline text-green-500'>{' $' + total}</h1>
                {/* add the total price value */}
            </div>
            <div className='flex justify-center text-2xl m-4'>
                <h1>Delivery by Thu Aug 17 | Free <div className='inline line-through'>₹40</div></h1>

            </div>
            <div className='flex justify-center text-green-600 text-xl'>
                <a >Buy for discount with bank offers <InfoIcon /></a>
            </div>
            <div className='flex justify-center'>
                <button className='bg-orange-600 text-3xl rounded-md p-3 m-4 hover:scale-110 transition-all text-white'>Place order</button>
            </div>


        </div>
    )
}

export default Cart
