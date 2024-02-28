import React from 'react'

import Image from 'next/image'
 

const InnerHeader = ({title, para, subhead, image, buttonlink, buttonlabel}) => {
  return (
    <header className='inner-header'>
        <Image src={image} alt="" />
        <div className="container">
            <div className="inner-header-con">
                { subhead && <h3 className='sub-head'>{subhead}</h3> }
                <h1 className="sec-head">{title}</h1>
                {
                    para && <p className='para'>{para}</p>
                }
            </div>
        </div>
    </header>
  )
}

export default InnerHeader