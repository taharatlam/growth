import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import img from '../assets/images/slide1.jpg'

const NewsCard = ({data}) => {
  return (
    <Link href={`/news-and-insights/${data.slug}`} className='news-card'>
        <div className="news-img">
            <Image src={img} alt="" />
        </div>
        <div className="news-det">
            <div className="dt">
                <span>{data.posted}</span>
                <span>{data.author}</span>
            </div>
            <h3>{data.title}</h3>
            <span className='know-more' href="/">Know More</span>
        </div>
    </Link>
  )
}

export default NewsCard