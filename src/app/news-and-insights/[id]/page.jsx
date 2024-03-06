'use client'
import InnerHeader from '@/components/InnerHeader'
import Image from 'next/image'
import Link from 'next/link'
import careerImg from '/src/assets/images/career-banner.jpg';
import React, { useState, useLayoutEffect, useEffect } from 'react'

import upIcon from '/src/assets/images/upload.svg'
import removeIcon from '/src/assets/images/cross.svg'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import api from '@/helpers/ApibaseUrl';

import slide1 from '/src/assets/images/slide1.jpg'

gsap.registerPlugin(ScrollTrigger);
const InnerNews = ({params}) => {
    const [blogData, setBlogData] = useState(null)
    useEffect(() => {
        api.get(`/blog?slug=${params.id}`)
            .then(response => {
                setBlogData(response.data)
            })
            .catch(error => {
            });
    }, []);
    return (
        <div>
            <header className='blog-inner-header'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-12">
                            <h3 className="sec-head">
                                {
                                    blogData && blogData?.title
                                }
                            </h3>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                        <div className="col-12">
                            <div className="blog-inner-img">
                                <Image src={slide1} alt="" />
                            </div>
                        </div>
                    </div>
            </header>
            <section className='bog-con-sec'>
                <div className="container">
                <div className="row justify-content-center">
                        <div className="col-lg-7 col-12">
                            <div className="bl-tp">
                                <span>{blogData && blogData?.posted}</span>
                                <span>{blogData && blogData?.posted}</span>
                            </div>
                            {
                                blogData && (
                                    <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
                                )
                            }
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    )
}

export default InnerNews
