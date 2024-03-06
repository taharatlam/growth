import React from 'react'

import Link from 'next/link'

const JobCard = ({data}) => {
  return (
    <Link href={`/career/${data?.slug}`} className='job-card'>
        <h3>{data?.role}</h3>
        <p className="para">{data?.location}</p>
        <ul className="att-list">
            <li><span>Exp</span><span>{data?.experience}</span></li>
        </ul>
        <span className="readmore">Know More</span>
    </Link>
  )
}

export default JobCard