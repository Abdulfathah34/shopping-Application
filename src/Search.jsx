import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Search = ({ passProduct }) => {

    const [searchQuery, setSearchQuery] = useState("")
    const [searchSuggestion, setSearchSuggestion] = useState([])

    useEffect(() => {
        
        setSearchSuggestion(passProduct)
        
        
    }, [passProduct])

    const searchTerm = (search) => {
        setSearchQuery(search)
        


        if (searchSuggestion) {
            setSearchSuggestion(passProduct.Product.filter(prod => {
                if (prod.title.toLowerCase().includes(search) )
                    return prod


            }))
        }

        if(searchQuery === ''){
            setSearchSuggestion(passProduct)
        }
    }




    return (
        <div className='flex relative h-11   mx-auto my-auto md:mx-0 md:w-2/4 '>
            <div className='flex lg:w-[800px] lg:ml-64'>
                <input value={searchQuery} onChange={e => searchTerm(e.target.value)} className='w-full min-w-[80px] p-1 rounded-lg text-xl' type="text" placeholder='Search for products,brands and more' />
                <div className='absolute z-10 w-[73%] top-10 max-h-96  cursor-pointer bg-white'>
                    {searchQuery !== "" && searchSuggestion.length > 0 &&
                        searchSuggestion.map((item, index) => {
                            if (index < 5) {
                                return <Link to={`/pages/details/${item.id}`} onClick={()=>{
                                    setSearchQuery("")
                                }}>
                                     <div key={item.id} className='flex p-3'>
                                    <img className='w-16' src={item.images[0]} alt="" />
                                    <h2>{item.title}</h2>
                                </div>
                            </Link>
                            }
                        })}

                     

                </div>
            </div>

        </div>
    )
}

export default Search
