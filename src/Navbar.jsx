import React, { useState , useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Search from './Search.jsx'
import { Link } from 'react-router-dom';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';


const Navbar = (Product,cartItem) => {
  const [product,setProduct]=useState([])
  const { loginWithRedirect } = useAuth0();
  const { logout,isAuthenticated,user } = useAuth0();
  const count=(cartItem.length)
  console.log(cartItem.length)
  useEffect(() => {
    setProduct(Product)
}, [Product])
  return (

    
    <div className='bg-blue-600 w-screen h-auto flex'>
    <div className="header flex-col md:flex-row w-screen m-auto py-4 ">

      <div className="logo sm:flex-row md">
        <div className="flipkart flex gap-5">
            
             <Link to={`/`}> 
              <img className='md:hidden w-[530px] bg-blue-600 rounded-lg flex my-1  ml-[10px]  h-[80px] ' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk_header_mobile_logo-bafb3a.svg" alt="" />
              <img className='hidden md:flex lg:flex min-w-[100px] lg:min-w-[300px] lg:ml-[50px] w-auto h-[80px] ' src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png" alt="" />
              </Link>
            
            <div className='md:hidden mt-8 flex-row '>
            
              {!isAuthenticated && <button className='mt-3 w-[100px]  lg:flex' onClick={() => loginWithRedirect()}>Sign in</button> }
              </div>




          {/* search tab */}
          <Search passProduct={product}/>





            <div className='flex gap-3 md:mr-8  sm:mr-0 text-lg'>

            
            {!isAuthenticated &&<img className='w-auto hidden lg:block max-w-[50px] h-[50px] mt-4' src="https://static.thenounproject.com/png/736683-200.png" alt="" />}
            {!isAuthenticated && <button className=' w-[100px] hidden lg:flex text-2xl mt-7' onClick={() => loginWithRedirect()}>Sign in</button>} 
            <div className='flex mr-5 sm:pl-0 my-auto lg:gap-[68px] sm:gap-[50px] sm:ml-[2px] ml-[68px]'>

            {/* <Link to={"/"}>
              < HomeIcon className='hidden scale-[1.25] lg:scale-[2]  md:visble lg:visible xl:visible'/>
            </Link> */}
            <Link to={`/pages/cart`}>
              
            
           <ProductionQuantityLimitsSharpIcon className='scale-[1.25] lg:scale-[2] '/>
          
           
                                                                                                          {/* adjusting the icons in navbar */}
            </Link>
            
            <Link to={`/pages/wishlist`}>
            <FavoriteBorderSharpIcon className='scale-[1.25] lg:scale-[2] '/>
            </Link>


            </div>

           <div className='hidden xl:flex'>
           <div className='absolute right-10 flex '>
           {isAuthenticated &&  <img className='max-w-[50px] mt-5 rounded-3xl lg:w-[50px] lg:mr-5 ' src={user.picture}/>}
          
           {isAuthenticated &&  <div  className='flex mt-8 w-40 text-xl'>{user.name}</div>}
            {isAuthenticated && <button className='bg-blue-400 rounded-xl w-auto lg:min-w-[100px] mt-5   h-[50px]' onClick={() =>logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>}
           </div>
           </div>
            </div>
        </div>
        
      </div>


    

      </div>

      </div>
   
  )
}

export default Navbar
