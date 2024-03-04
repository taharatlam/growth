import React from 'react'

import Link from 'next/link'

const JobCard = () => {
  return (
    <Link href="/career/1" className='job-card'>
        <h3>Data Engineer</h3>
        <p className="para">Pune, Maharashtra</p>
        <ul className="att-list">
            <li><span>Exp</span><span>0 - 4 Yrs</span></li>
        </ul>
        <span className="readmore">Know More</span>
    </Link>
  )
}

export default JobCard