import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card'


const Category = () => {
    const [section, setSection] = useState([])
    const [selectedValue, setSelectedValue] = useState('')
    const [item, setItem] = useState([])
    const [flag,setFlag]=useState(true)

    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((result) => {

            setItem(result.data.products)
    }
        )
}, [])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${selectedValue}`).then((result) => {
            setSection(result.data.products)
            setFlag(false)

        })
    }, [selectedValue])

    const option = ['laptops', 'smartphones', 'fragrances', "skincare", "groceries"]

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value)
    }
    return (
        <>
         <div className='  justify-center flex mt-10 mb-10' >
                <h1 className='text-2xl mr-10'>For customized result select category</h1>
                <select value={selectedValue} onChange={handleSelectChange} className='text-lg w-[300px] h-10 rounded-md bg-gray-200'>
                    <option value=""></option>
                    {option.map((option,i) => (
                        <option key={i} value={option} className='text-xl'>{option}</option>
                    ))}
                </select>
            </div>

            <div className='flex justify-center gap-10 mb-10'>
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

        <div className='flex flex-wrap gap-10 justify-center'>
           {flag && item.map((instant, i) => {

                return (<div className={` w-[260px] h-[260px] border border-1 rounded-md hover:scale-[1.10] hover:border-red-300 transition-all relative`} >

                    <Link to={`/pages/details/${instant.id}`} className=' gap-10 cursor-pointer' >

                        <Card image={instant.images[0]} title={instant.title} price={instant.price}>

                        </Card>

                    </Link>

                </div>

                )

            })
            }

</div>


           




        </>

    )
}

export default Category
