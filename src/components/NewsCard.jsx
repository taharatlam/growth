import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import img from '../assets/images/slide1.jpg'

const NewsCard = () => {
  return (
    <Link href="/news-and-insights/1" className='news-card'>
        <div className="news-img">
            <Image src={img} alt="" />
        </div>
        <div className="news-det">
            <div className="dt">
                <span>04 Jun 2024</span>
                <span>Author Name</span>
            </div>
            <h3>Lorem Ipsum is simply dummy text of the printing and...</h3>
            <span className='know-more' href="/">Know More</span>
        </div>
    </Link>
  )
}

export default NewsCard