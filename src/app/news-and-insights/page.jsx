import InnerHeader from '@/components/InnerHeader'
import React from 'react'

import careerImg from '../../assets/images/news-banner.jpg';

import Link from 'next/link';
import JobCard from '@/components/JobCard';
import NewsCard from '@/components/NewsCard';

const Newsandinsights = () => {
  return (
    <>
        <InnerHeader title={'Uncover Insider Insights on Our News Page'} para={'Stay Informed and Empower Your Decision-Making.'} image={careerImg} />

        <section className="sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center col-12">
                        <p className="para mt-3">
                            Dive into our diverse range of news and insights to stay sharp and navigate the market with confidence. Stay informed, stay ahead, and grasps new opportunities for success.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="sec pt-0">
            <div className="container">
                <div className="row">
                   
                    <div className="col-12">
                        <div className="flt-area">
                            <div className="l-part">
                                <div className="flt-select">
                                    <select name="" id="">
                                        <option value="">All Category</option>
                                    </select>
                                </div>
                                <div className="flt-select">
                                    <select name="" id="">
                                        <option value="">All Tags</option>
                                    </select>
                                </div>
                                <div className="flt-select">
                                    <select name="" id="">
                                        <option value="">All Authors</option>
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
                        <div className="news-grid">
                            {
                                [...Array(8)].map(function(item,index){
                                    return(
                                        <NewsCard key={index} /> 
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

export default Newsandinsights