import React, { useState } from 'react'
import CardBanner from './CardBanner'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {

  

    const slides = [
        'https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/5af9920a7c9c10b2.png?q=50'
     ,'https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/c2d8527e77c55b8c.jpg?q=50','https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/c2d8527e77c55b8c.jpg?q=50'
    
    ]
    const [index,setIndex]=useState(0)

    const previous = ()=>{
        {index!=0 &&
        setIndex(index-1)}

        {index==0 &&
            setIndex(index+2)}
    }

    const next = ()=>{
        {index!=0 &&
            setIndex(index-1)}
    
            {index==0 &&
                setIndex(index+2)}
    }
    
    return (
      

        <>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

      autoplay={{
        delay:2000
      }}
    >
      <SwiperSlide><img src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/5af9920a7c9c10b2.png?q=50" alt="" className='w-full'/></SwiperSlide>
      <SwiperSlide><img src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/c2d8527e77c55b8c.jpg?q=50" alt="" className='w-full'/></SwiperSlide>
      <SwiperSlide><img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/84ae27f93c14a4e3.jpg?q=50" alt="" className='w-full'/></SwiperSlide>
      
      
      ...
    </Swiper>
        </>
    )
}

export default Banner
