import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import img from '../assets/images/slide1.jpg'

const NewsCard = () => {
  return (
    <article className='news-card'>
        <div className="news-img">
            <Image src={img} alt="" />
        </div>
        <div className="news-det">
            <div className="dt">
                <span>04 Jun 2024</span>
                <span>Author Name</span>
            </div>
            <h3>Lorem Ipsum is simply dummy text of the printing and...</h3>
            <Link className='know-more' href="/">Know More</Link>
        </div>
    </article>
  )
}

export default NewsCard