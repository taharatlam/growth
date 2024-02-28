import InnerHeader from '@/components/InnerHeader'
import React from 'react'

import careerImg from '../../assets/images/career-banner.jpg';

import Link from 'next/link';
import JobCard from '@/components/JobCard';

const Career = () => {
  return (
    <>
        <InnerHeader title={'Shape the Future of Trading with Us'} image={careerImg} />

        <section className="sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center col-12">
                        <h3 className="sec-head">
                        Join a vibrant team defining the next era of <br className='d-sm-block d-none' />market insights and action.
                        </h3>
                        <p className="para mt-3">
                            Become a vital force in a team where ideas spark and innovation flourishes. We challenge the status quo, prioritise your voice, and fuel your growth. This is where market intelligence meets lightning-fast execution and where your contribution builds the trading ecosystem of tomorrow.
                            <br /><br />
                            If you seek challenges, excel in a dynamic setting, and possess a vision that extends conventional boundaries, <br />
                            <Link href="" className='join-us'>Join us!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="sec grey-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="sec-head">Discover Your Path to <span>Market Mastery</span></h3>
                        <p className="para">
                            Explore our open positions
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="flt-area">
                            <div className="l-part">
                                <div className="flt-select">
                                    <select name="" id="">
                                        <option value="">Location</option>
                                    </select>
                                </div>
                                <div className="flt-select">
                                    <select name="" id="">
                                        <option value="">Location</option>
                                    </select>
                                </div>
                                <div className="flt-select">
                                    <select name="" id="">
                                        <option value="">Location</option>
                                    </select>
                                </div>
                            </div>
                            <div className="r-part">
                                <div className="search-wrap">
                                    <input type="text" placeholder='Search anything...' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="job-grid">
                            {
                                [...Array(8)].map(function(){
                                    return(
                                        <JobCard />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Career