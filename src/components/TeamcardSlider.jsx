'use client'
import React from 'react'

import Teamcard from './Teamcard';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import { useRef, useCallback, useState, useEffect } from 'react';


import Image from 'next/image';

import nextNav from '../assets/images/next.svg'
import prevNav from '../assets/images/prev.svg'
import api from '@/helpers/ApibaseUrl';

const TeamcardSlider = ({type}) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const [teamMembers, setTeamMembers] = useState(null);

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
        const apiUrl = type == 'leader' ? '/leadership-team':'/management-team'
        api.get(apiUrl)
          .then(response => {
            setTeamMembers(response.data);
          })
          .catch(error => {
          });
      }, [type]);

    return (
        <>
        {
            teamMembers?
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
                    teamMembers.map((team, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Teamcard data={team} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="banner-nav pt-3 swiper-navigation">
                <button className="prev-arrow" onClick={handlePrev}><Image src={prevNav} alt="" /></button>
                <button className="next-arrow" onClick={handleNext}><Image src={nextNav} alt="" /></button>
            </div>
        </div>:''
        }
        </>
    )
}

export default TeamcardSlider