import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import img from '../assets/images/slide1.jpg';

const Teamcard = () => {
  return (
    <Link href="" className='team-card'>
        <Image src={img} alt="" />
        <div className="team-det">
            <span className='design'></span>
            <h3>Benjamin noirat</h3>
            <span className='desig'>CEO, CO-Founder</span>
            <p className="para">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    </Link>
  )
}

export default Teamcard