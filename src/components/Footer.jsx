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

import phone from '../assets/images/ft-phone.svg';
import mail from '../assets/images/ft-mail.svg';
import loc from '../assets/images/ft-loc.svg';

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
                <div className="col-lg-2 offset-lg-1 col-6">
                    <div className="ft-col">
                        <h3 className="ft-head">Quick Links</h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="/about-us">
                                What We Do
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="">
                                Our Team
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/career">
                                Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/news-and-insights">
                                News & Insights
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="ft-col">
                        <h3 className="ft-head">Other Links</h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="">
                                Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <div className="ft-col">
                        <h3 className="ft-head">Contact Us</h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="" className='con-loc'>
                                    <Image src={phone} alt="" />
                                    <span>91 12345 5632</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="" className='con-loc'>
                                        <Image src={mail} alt="" />
                                    <span>info@algoquant.com</span>
                                </Link>
                            </li>
                            <li>
                                <div className='con-loc'>
                                <Image src={loc} alt="" />
                                    <span>4/11, Asaf Ali Rd, Chatta lal Miya, Chandni Mahal, Chandni Chowk, New Delhi, Delhi, 110002@a</span>
                                </div>
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