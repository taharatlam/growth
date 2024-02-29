import AboutSlider from '@/components/AboutSlider'
import React from 'react'

import Image from 'next/image'

import v1 from '../../assets/images/v1.jpg'
import v2 from '../../assets/images/v2.jpg'
import v3 from '../../assets/images/v3.jpg'
import ab from '../../assets/images/ab01.jpg'

const AboutUs = () => {
  return (
    <>
        <AboutSlider />
        <section className="sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="sec-head">
                            At Algoquant, we pioneered <span>algorithmic trading</span> since inception. 
                        </h3>
                        <p className="para">
                            Combining technology and market insight, we revolutionise trading dynamics. Our mantra, "Tech | Trade | Redefined," encapsulates our commitment to cutting-edge simplicity. In a rapidly evolving financial landscape, we stand as an innovative beacon, utilising Machine Learning for enhanced risk control and transformative trading experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="vs-sec sec pt-0">
            <div className="container">
                <div className="row row-gap-25">
                    <div className="col-lg-4 col-12">
                        <div className="vs-wrap">
                            <Image src={v1} alt="" />
                            <h3>Our Vision</h3>
                            <p className="para">
                                We envision becoming a one-stop financial ecosystem through technology and human brilliance, unlocking capital pathways for a dynamic global market.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="vs-wrap">
                            <Image src={v2} alt="" />
                            <h3>Our Mission</h3>
                            <p className="para">
                                Our mission is to be dedicated to unlocking distinctive financial avenues and ensuring secure and prosperous growth for our clients through innovation and integrity.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="vs-wrap">
                            <Image src={v3} alt="" />
                            <h3>Our Philosophy</h3>
                            <p className="para">
                                Innovation, Expertise, and Speed drive everything we do. We leverage state-of-the-art technology, embrace quantitative mastery, and prioritise unwavering dedication to our clients’ success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="sec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="ab-img">
                            <Image src={ab} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-12">
                        <div className="ab-con2">
                            <h3 className='sec-head'>
                            Contributing to a Greener Environment, <span>Trade by Trade!</span>
                            </h3>
                            <h4 className="sub-head">Embracing Sustainable Initiatives for a Planet-friendly Tomorrow.</h4>
                            <p className="para">
                            At Algoquant, we believe success goes beyond the charts. We're making strides towards a healthier planet because a green future makes for a brighter tomorrow.
                            </p>
                            <ul className="point-list">
                                <li>
                                Illuminating our corporate headquarters with solar energy, expanding to all offices by 2025.
                                </li>
                                <li>
                                We're committed to achieving carbon neutrality across our operations, minimising our environmental impact.
                                </li>
                                <li>
                                We support initiatives that promote sustainable practices and empower communities to make a difference.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUs