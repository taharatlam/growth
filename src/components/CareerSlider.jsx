'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import Link from 'next/link';

import { Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../assets/images/slide1.jpg'

const CareerSlider = () => {
  return (
    <>
      <Swiper
       pagination={{
        clickable: true
      }
      }
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="banner-swiper">
        {
          [...Array(5)].map(()=>{
            return(
            <SwiperSlide>
              <div className="ca-slide">
                <Image src={slide1} alt="" />
              </div>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
}

export default CareerSlider