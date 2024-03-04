'use client'
import InnerHeader from '@/components/InnerHeader'
import Image from 'next/image'
import Link from 'next/link'
import careerImg from '/src/assets/images/career-banner.jpg';
import React, { useState, useLayoutEffect } from 'react'

import upIcon from '/src/assets/images/upload.svg'
import removeIcon from '/src/assets/images/cross.svg'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import slide1 from '/src/assets/images/slide1.jpg'

gsap.registerPlugin(ScrollTrigger);
const InnerNews = () => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: '.blog-inner-header',
            start: "top top",
            end: "bottom center",
            markers: false,
            scrub: 2
          },
          // delay: 0.5
        });
  
        timeline.to('.blog-inner-img img', {
          scale: 1.2
        })
  
      });
  
      return () => ctx.revert();
  });

    return (
        <div>
            <header className='blog-inner-header'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-12">
                            <h3 className="sec-head">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
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
                                <span>01 Jun 2024</span>
                                <span>Auther name</span>
                            </div>
                            <p className="para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod facilis unde nulla cum nesciunt ullam expedita reprehenderit quas atque rem, animi maiores voluptatum eaque sint placeat modi vitae cumque!
                                <br /><br />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit suscipit labore, atque ad tenetur facere harum fuga necessitatibus placeat! Quisquam eaque enim minima accusamus repellat sequi fugit, aut deleniti maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus hic a voluptatum? Earum, aut? Sequi temporibus nemo distinctio a sapiente, quasi quaerat sed, corporis molestias sit voluptatem, dolores aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab officia saepe praesentium laboriosam fugit quisquam dolore, adipisci est sapiente obcaecati blanditiis porro beatae deleniti rerum quod voluptates ex enim.
                                <br /><br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vel non earum excepturi alias aperiam officia laborum dolor magni corporis. Et, provident vero. Numquam excepturi doloremque veritatis sit adipisci aperiam?
                                <br /><br />
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit cupiditate aliquam molestias consequuntur a, odit optio atque natus labore voluptatibus itaque qui architecto, odio ut numquam obcaecati quam aut. Quia!
                            </p>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    )
}

export default InnerNews