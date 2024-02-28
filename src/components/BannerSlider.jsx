'use client'
import React, {useRef, useCallback} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import Link from 'next/link';

import { Pagination } from 'swiper/modules';

import slide1 from '../assets/images/slide1.jpg'
import nextNav from '../assets/images/next.svg'
import prevNav from '../assets/images/prev.svg'

const BannerSlider = () => {

  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className='banner-swiper-container'>
      <Swiper className="banner-swiper" ref={sliderRef}>
        <SwiperSlide>
          <div className="banner-slide">
            <Image src={slide1} alt=""/>
            <div className="banner-con">
              <h1>Building Markets Creating Value</h1>
              <p className="para">A quantitative investment firm forging the future of trading through data-driven strategies and innovative risk management.</p>
              <Link href="" className="main-btn white-btn">
                <span>Know More</span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      {/* <div className="banner-nav pt-3 swiper-navigation">
        <button className="prev-arrow" onClick={handlePrev}><Image src={prevNav} alt="" /></button>
        <button className="next-arrow" onClick={handleNext}><Image src={nextNav} alt="" /></button>
      </div> */}
    </div>
  )
}

export default BannerSlider