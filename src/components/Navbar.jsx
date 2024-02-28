import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <>
        <nav class="main-nav">
            <div className="container">
                <div className="nav-inner">
                    <div className="l-part">
                        <Link href="/" className='head-logo'>
                            <Image src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="m-part">
                        <ul className="nav-list">
                            <li>
                                <Link href="/">
                                What We Do
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                News & Insights
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="r-part">
                        <ul className="ot-nav">
                            <li>
                                <Link href="/" className='main-btn'>
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar