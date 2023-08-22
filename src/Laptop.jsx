
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
const Laptop = () => {
    const [section,setSection]=useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/laptops').then((result) => {
            setSection(result.data.products)
            

        })
    }, [])
  return (
    <div>
         <div>
         <div className='flex justify-center gap-10 mb-10 mt-28'>
                {section.map((instant, i) => {

                    return (<div className={`w-[260px] h-[260px] border border-1 rounded-md hover:scale-[1.10] hover:border-red-300 transition-all relative`} key={i} >

                        <Link to={`/pages/details/${instant.id}`} className=' gap-10 cursor-pointer' >

                            <Card image={instant.images[0]} title={instant.title} price={instant.price}>

                            </Card>

                        </Link>

                    </div>

                    )

                })
                }
            </div>
      
    </div>
      
    </div>
  )
}

export default Laptop
