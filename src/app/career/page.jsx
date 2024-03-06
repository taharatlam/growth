'use client'
import InnerHeader from '@/components/InnerHeader'
import React, {useState, useEffect} from 'react'

import careerImg from '../../assets/images/career-banner.jpg';

import Link from 'next/link';
import JobCard from '@/components/JobCard';

import Animated from '@/components/Animated';

import api from '@/helpers/ApibaseUrl';

const Career = () => {
    const [jobs, setJobs] = useState(null);
    const [jobsData, setJobsData] = useState(null);
    const [selectedData, setSelectedData] = useState(null);

    function objectToQueryString(obj) {
        return Object.keys(obj)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
          .join('&');
    }

     useEffect(() => {
        api.get('/jobs')
          .then(response => {
            setJobs(response.data);
          })
          .catch(error => {
          });
      }, []);
     useEffect(() => {
        const urlParam = objectToQueryString(selectedData || {});
        api.get(`/jobs?${urlParam}`)
          .then(response => {
            setJobsData(response.data?.jobs);
          })
          .catch(error => {
          });
      }, [selectedData]);

      const handleInputChange = (e) => {
        var timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setSelectedData((prevState) => ({ ...prevState, search: e.target.value }));
        }, 500);
      };

  return (
    <>

        <InnerHeader title={'Shape the Future of Trading with Us'} image={careerImg} />

        <section className="sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center col-12">
                        <Animated variant="fadeUp" delay="0" >
                        <h3 className="sec-head">
                        Join a vibrant team defining the next era of <br className='d-sm-block d-none' /><span>market insights and action.</span>
                        </h3>
                        </Animated>
                        <Animated variant="fadeUp" delay="0.2" >
                            <p className="para mt-3">
                                Become a vital force in a team where ideas spark and innovation flourishes. We challenge the status quo, prioritise your voice, and fuel your growth. This is where market intelligence meets lightning-fast execution and where your contribution builds the trading ecosystem of tomorrow.
                                <br /><br />
                                If you seek challenges, excel in a dynamic setting, and possess a vision that extends conventional boundaries, <br />
                                <Link href="" className='join-us'>Join us!</Link>
                            </p>
                        </Animated>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="sec grey-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <Animated variant="fadeUp"  >
                        <h3 className="sec-head">Discover Your Path to <span>Market Mastery</span></h3>
                        </Animated>
                        <Animated variant="fadeUp" delay="0.3" >
                        <p className="para">
                            Explore our open positions
                        </p>
                        </Animated>
                    </div>
                    <div className="col-12">
                    <div className="flt-area">
                            <div className="l-part">
                                <div className="flt-select">
                                    <select
                                    onChange={(e)=>{
                                        setSelectedData(state=>{
                                            return {...state, location:e.target.value}
                                        })
                                    }}
                                    name="" id="">
                                        <option value="">Location</option>
                                        {
                                            jobs && jobs?.locations.map((location, index)=>{
                                                return(
                                                    <option key={index} value={location.location}>{location.location}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="flt-select">
                                    <select name=""
                                        onChange={(e)=>{
                                            setSelectedData(state=>{
                                                return {...state, domain:e.target.value}
                                            })
                                        }}
                                    id="">
                                        <option value="">All Tags</option>
                                        {
                                            jobs && jobs?.domains.map((domain, index)=>{
                                                return(
                                                    <option key={index} value={domain.domain}>{domain.domain}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="flt-select">
                                    <select name=""
                                        onChange={(e)=>{
                                            setSelectedData(state=>{
                                                return {...state, experience:e.target.value}
                                            })
                                        }}
                                        id="">
                                        <option value="">experiences</option>
                                        {
                                            jobs && jobs?.experiences.map((experience, index)=>{
                                                return(
                                                    <option key={index} value={experience.experience}>{experience.experience}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="r-part">
                                <div className="search-wrap">
                                    <input type="text"
                                    onChange={handleInputChange}
                                    placeholder='Search anything...' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {
                        jobsData ?
                        <div className="job-grid">
                            {
                                jobsData && jobsData.map(function(job, index){
                                    return(
                                        <JobCard key={index} data={job} />
                                    )
                                })
                            }
                        </div>:
                            <div className='no-res mt-5'>
                                <p>No Results Found</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Career