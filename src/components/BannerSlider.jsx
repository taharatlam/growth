'use client'
import React, {useRef, useCallback, useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import Link from 'next/link';

import { Pagination,Autoplay } from 'swiper/modules';

import slide1 from '../assets/images/slide1.jpg'
import nextNav from '../assets/images/next.svg'
import prevNav from '../assets/images/prev.svg'

import api from '@/helpers/ApibaseUrl';

const BannerSlider = () => {
  const [homeBanners, setHomeBanners] = useState(null)
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    api.get('/homebanners')
      .then(response => {
        setHomeBanners(response.data);
      })
      .catch(error => {
      });
  }, []);

  return (
    <div className='banner-swiper-container'>
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
      className="banner-swiper"
      ref={sliderRef}>
        {
          homeBanners && homeBanners.map((banner, index)=>{
            return(
              <SwiperSlide key={index}>
                <div className="banner-slide">
                  <Image src={banner?.image} width={1920} height={1080} alt=""/>
                  <div className="banner-con">
                    <h1>{banner?.title}</h1>
                    <p className="para">{banner?.short_description}</p>
                    <Link href={banner?.ctl} className="main-btn white-btn">
                      <span>{banner?.ctb}</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
      {/* <div className="banner-nav pt-3 swiper-navigation">
        <button className="prev-arrow" onClick={handlePrev}><Image src={prevNav} alt="" /></button>
        <button className="next-arrow" onClick={handleNext}><Image src={nextNav} alt="" /></button>
      </div> */}
    </div>
  )
}

export default BannerSlider