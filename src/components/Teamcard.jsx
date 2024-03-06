import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import img from '../assets/images/slide1.jpg';

const Teamcard = ({data}) => {
  return (
    <Link href="" className='team-card'>
        <Image src={img} alt="" />
        <div className="team-det">
            <span className='design'></span>
            <h3>{data?.name}</h3>
            <span className='desig'>{data?.title}</span>
            <p className="para">
              {
                data?.details
              }
            </p>
        </div>
    </Link>
  )
}

export default Teamcard