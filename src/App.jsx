
import Navbar from './Navbar.jsx'
import Items from './Items.jsx'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Details from "./pages/details.jsx"
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Banner from './Banner.jsx'
import Category from './pages/Category.jsx'
import CategoryBanner from './CategoryBanner.jsx'
import Smartphone from './Smartphone.jsx'
import Laptop from './Laptop.jsx'
import Groceries from './Groceries.jsx'
import Skincare from './Skincare.jsx'
import Fragrances from './Fragrances.jsx'
import HomeDecoration from './HomeDecoration.jsx'








const App = () => {
  const [product, setProduct] = useState(null)
  const [cartItem, setCartItem] = useState([])
  const [wishItem, setWishItem] = useState([])
  

 


  return (

    <div className='w-screen dark:bg-black'>
      <Navbar Product={product} cartItem={cartItem} />

      <Routes>
        <Route path="/" element={
          <>
            <CategoryBanner />
            <Banner />
            <Items setProduct={setProduct} />
          </>
        }></Route>

        <Route path='/pages/details/:id' element={
          <>
            <Details setCartItem={setCartItem} setWishItem={setWishItem} />
          </>
        }

        ></Route>

        <Route path='/pages/cart' element={
          <>
            <Cart setCartItem={setCartItem} cartItem={cartItem} />
          </>
        }
        ></Route>
        <Route path='/pages/Wishlist' element={
          <>
            <Wishlist setWish={setWishItem} wishItem={wishItem} />

          </>
        }></Route>

        <Route path='/pages/Category' element={
          <>
            <Category />

          </>
        }></Route>
        <Route path='/Smartphone' element={
          <>
            <Smartphone />

          </>
        }></Route>
        <Route path='/Laptop' element={
          <>
            <Laptop />

          </>
        }></Route>
        <Route path='/groceries' element={
          <>
            <Groceries />

          </>
        }></Route>
        <Route path='/skincare' element={
          <>
            <Skincare />

          </>
        }></Route>
        <Route path='/fragrances' element={
          <>
            <Fragrances />

          </>
        }></Route>
         <Route path='/home-decoration' element={
          <>
            <HomeDecoration />

          </>
        }></Route>



      </Routes>

    </div>
  )
}

export default App
