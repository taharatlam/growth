'use client'
import React from 'react'

import Teamcard from './Teamcard';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import { useRef, useCallback } from 'react';

import Image from 'next/image';

import nextNav from '../assets/images/next.svg'
import prevNav from '../assets/images/prev.svg'

const TeamcardSlider = () => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

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
        <div className='team-slider-container'>
            <Swiper
            // navigation={{
            //     prevEl: navigationPrevRef.current,
            //     nextEl: navigationNextRef.current,
            // }}
            className="team-swiper"
            slidesPerView= {4}
            spaceBetween= {0}
            breakpoints={{
                0: {
                slidesPerView: 1,
                spaceBetween: 0,
                },
                640: {
                slidesPerView: 2,
                spaceBetween: 0,
                },
                768: {
                slidesPerView: 4,
                spaceBetween: 0,
                },
                1024: {
                slidesPerView: 4,
                spaceBetween: 0,
                },
            }}

            onBeforeInit={(swiper) => {
              
            }}

            ref={sliderRef}
            >
                {
                    [...Array(8)].map(() => {
                        return (
                            <SwiperSlide>
                                <Teamcard />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="banner-nav pt-3 swiper-navigation">
                <button className="prev-arrow" onClick={handlePrev}><Image src={prevNav} alt="" /></button>
                <button className="next-arrow" onClick={handleNext}><Image src={nextNav} alt="" /></button>
            </div>
        </div>
    )
}

export default TeamcardSlider