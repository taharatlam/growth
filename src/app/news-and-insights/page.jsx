'use client'
import InnerHeader from '@/components/InnerHeader'
import React, {useState, useEffect} from 'react'

import careerImg from '../../assets/images/news-banner.jpg';

import Link from 'next/link';
import JobCard from '@/components/JobCard';
import NewsCard from '@/components/NewsCard';

import api from '@/helpers/ApibaseUrl';

const Newsandinsights = () => {

    const [categories, setCategories]  = useState(null)
    const [selectedData, setSelectedData]  = useState({})
    const [tags, setTags]  = useState(null)
    const [authors, setAuthors]  = useState(null)
    const [blogs, setBlogs]  = useState(null)

    useEffect(() => {
        api.get('/categories')
          .then(response => {
            setCategories(response.data);
          })
          .catch(error => {
          });

        api.get('/authors')
          .then(response => {
            setAuthors(response.data);
          })
          .catch(error => {
          });
        api.get('/blogtags')
          .then(response => {
            setTags(response.data);
          })
          .catch(error => {
          });
        
      }, []);

      function objectToQueryString(obj) {
        return Object.keys(obj)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
          .join('&');
      }

      const handleInputChange = (e) => {
        var timeout;
    
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setSelectedData((prevState) => ({ ...prevState, search: e.target.value }));
        }, 500);
      };

      useEffect(()=>{
        const param = objectToQueryString(selectedData);
        api.get(`/blogs?${param}`)
        .then(response => {
          setBlogs(response.data);
        })
        .catch(error => {
        });
        console.log('selectedData', selectedData);
      }, [selectedData])

  

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
                                    <select
                                    onChange={(e)=>{
                                        setSelectedData(state=>{
                                            return {...state, categoryid:e.target.value}
                                        })
                                    }}
                                    name="" id="">
                                        <option value="">All Category</option>
                                        {
                                            categories && categories.map((category, index)=>{
                                                return(
                                                    <option key={index} value={category.id}>{category.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="flt-select">
                                    <select name=""
                                        onChange={(e)=>{
                                            setSelectedData(state=>{
                                                return {...state, tag:e.target.value}
                                            })
                                        }}
                                    id="">
                                        <option value="">All Tags</option>
                                        {
                                            tags && tags.map((tag, index)=>{
                                                return(
                                                    <option key={index} value={tag}>{tag}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="flt-select">
                                    <select name=""
                                        onChange={(e)=>{
                                            setSelectedData(state=>{
                                                return {...state, authorid:e.target.value}
                                            })
                                        }}
                                        id="">
                                        <option value="">All Authors</option>
                                        {
                                            authors && authors.map((author, index)=>{
                                                return(
                                                    <option key={index} value={author.id}>{author.name}</option>
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
                            blogs ?
                            <div className="news-grid">
                                {
                                    blogs.map(function(blog,index){
                                        return(
                                            <NewsCard key={index} data={blog} /> 
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

export default Newsandinsights