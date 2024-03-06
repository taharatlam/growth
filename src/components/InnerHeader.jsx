import React from 'react'

import Image from 'next/image'

import Animated from './Animated'
 

const InnerHeader = ({title, para, subhead, image, buttonlink, buttonlabel}) => {
  return (
    <header className='inner-header'>
        <Image src={image} alt="" />
        <div className="container">
            <div className="inner-header-con">
                { subhead && <Animated variant="fadeUp" ><h3 className='sub-head'>{subhead}</h3></Animated> }
                <Animated variant="scale" delay="0.2" ><h1 className="sec-head">{title}</h1></Animated>
                {
                    para && <Animated variant="scale" delay="0.3" ><p className='para'>{para}</p></Animated>
                }
            </div>
        </div>
    </header>
  )
}

export default InnerHeader