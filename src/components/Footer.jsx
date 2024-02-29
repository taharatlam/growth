'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../assets/images/ft-logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import instagramIcon from '../assets/images/instagram.svg';
import facebookIcon from '../assets/images/facebook.svg';
import twitterIcon from '../assets/images/twitter.svg';
import youtubeIcon from '../assets/images/youtube.svg';

const Footer = () => {
  return (
    <footer className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-12">
                    <Link href="" className='ft-logo'>
                        <Image src={logo} alt="" />
                    </Link>
                    <p className="para">
                        Algoquant stands out in Low-risk arbitrage and high-frequency trading in the Global Capital Markets, leveraging technology-driven strategies. 
                    </p>
                </div>
                <div className="col-lg-2 offset-lg-2 col-6">
                    <div className="ft-col">
                        <h3 className="ft-head">Quick Links</h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="">
                                What We Do
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                News & Insights
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="ft-col">
                        <h3 className="ft-head">Quick Links</h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="">
                                What We Do
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                News & Insights
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-12">
                    <div className="ft-col">
                        <h3 className="ft-head">Quick Links</h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="">
                                What We Do
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                News & Insights
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="ft-btm">
                        <p>Copyright © Algoquant or one of its affiliates. All rights reserved.</p>
                        <ul className="soc-list">
                            <li>
                                <Link href={""}>
                                    <Image src={instagramIcon} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <Image src={facebookIcon} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <Image src={twitterIcon} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <Image src={youtubeIcon} alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer