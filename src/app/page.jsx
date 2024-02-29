'use client'
import Image from 'next/image'
import styles from './page.module.css'

import BannerSlider from '@/components/BannerSlider'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import cc1 from '../assets/images/cc01.svg';
import cc2 from '../assets/images/cc02.svg';
import cc3 from '../assets/images/cc03.svg';
import cc4 from '../assets/images/cc04.svg';
import sec41 from '../assets/images/sec41.jpg';
import Indiamap from '@/components/Indiamap';
import Worldmap from '@/components/Worldmap';
import Gradientballs from '@/components/Gradientballs';
import Teamcard from '@/components/Teamcard';
import TeamcardSlider from '@/components/TeamcardSlider';
import CareerSlider from '@/components/CareerSlider';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const scTrigger = useRef(null)
  const lineEl = useRef(null)

  useLayoutEffect(() => {
      let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.line-sec',
          start: "+250px center",
          end: "bottom center",
          markers: false,
          scrub: true
        },
        // delay: 0.5
      });

      // timeline.to('.tb-list li:nth-child(1) span', {
      //   backgroundColor: '#0F5E9C'
      // })
      timeline.to('.line span', {
        scaleY: '100%'
      })

    });

    return () => ctx.revert();
  });
  

  return (
    <main className='home-page'>
      <section className="hm-banner-sec">
        <div className="container">
          <div className="row">
            <BannerSlider />
          </div>
        </div>
      </section>
      <section className="banner-btm-sec sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center col-12">
              <h3 className='sec-head'>Cutting-Edge Tech <br className='d-none d-sm-block' />Built For <span>Speed and Precision</span></h3>
                <p className="para">
                  Experience the edge of possibility with our state-of-the-art hardware, advanced software, and FPGA-powered execution for superior results.
                </p>
            </div>
          </div>
          <div className="row row-gap-25">
            <div className="col-12">
              <div className="cc-grid">
                <div className="cc-card">
                  <div className="cc-icon">
                    <Image src={cc1} alt="" />
                  </div>
                  <div className="cc-con">
                    <h3>100+</h3>
                    <p className="para">
                      Software Patents
                    </p>
                  </div>
                </div>
                <div className="cc-card">
                  <div className="cc-icon">
                    <Image src={cc2} alt="" />
                  </div>
                  <div className="cc-con">
                    <h3>$5M+</h3>
                    <p className="para">
                    Investment in co-location infrastructure
                    </p>
                  </div>
                </div>
                <div className="cc-card">
                  <div className="cc-icon">
                    <Image src={cc3} alt="" />
                  </div>
                  <div className="cc-con">
                    <h3>350+</h3>
                    <p className="para">
                    Servers
                    </p>
                  </div>
                </div>
                <div className="cc-card">
                  <div className="cc-icon">
                    <Image src={cc4} alt="" />
                  </div>
                  <div className="cc-con">
                    <h3>70+</h3>
                    <p className="para">
                    FPGAs for ultra low latency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-sec pt-0 sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-12">
              <p className="para big-para text-center">
                Algoquant is your market catalyst in modern trading. We combine technology and financial innovation, using smart algorithms to find hidden opportunities. Experts in low-risk arbitrage and agile high-frequency trading, we&apos;re redefining what&apos;s possible in finance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec no-container line-sec" ref={scTrigger}>
        <div className="">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="se-img">
                <Image src={sec41} alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-12">
              <div className="container-right">
                <div className="se-con">
                  <h3 className="sec-head">
                    Algorithmic Insights,
                    <br class="d-none d-sm-block" />
                    <span>Optimised Trading!</span>
                  </h3>
                  <h4 className="sub-head sm mt-3">Simplifying Trading through Algorithmic Excellence!</h4>
                  <br />
                  <p className="para">
                    At Algoquant, we don&apos;t just trade – we shape the financial landscape.
                  </p>
                </div>
                <ul className="tb-list">
                  <div className="line"><span ref={lineEl}></span></div>
                  <li>
                    <span></span>
                    <p>Actionable intelligence driven by advanced analytics.</p>
                  </li>
                  <li>
                    <span></span>
                    <p>Math minds, engineering superiority and financial foresight to navigate smoothly through market turbulence.</p>
                  </li>
                  <li>
                    <span></span>
                    <p>Leveraging top-notch tech to craft effective quantitative strategies.</p>
                  </li>
                  <li>
                    <span></span>
                    <p>Rewriting the rules with every algorithm, preparing you for the markets of tomorrow.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec map-sec">
        <Gradientballs />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="sec-head">Broadening Horizons, <span>Bridging Markets.</span></h3>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-12">
              <Indiamap />
            </div>
            <div className="col-lg-8 col-12">
              <Worldmap />
            </div>
          </div>
        </div>
      </section>
      <section className="team-sec pt-0 sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center col-12 mb-2">
              <h3 className="sec-head">
                The <span>Visionaries</span> Shaping <br className='d-none d-sm-block' /> Algorithmic Trading
              </h3>
              <p className="para">
                Meet the Passionate Minds Propelling Algoquant&apos;s Growth Story.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="row justify-content-center">
            <div className="col-12">
            <Tabs
              defaultActiveKey="home"
              id="justify-tab-example"
              className="mb-3 cc-tabs"
              justify
            >
              <Tab eventKey="home" title="Leadership">
                <TeamcardSlider />
              </Tab>
              <Tab eventKey="profile" title="Management Team">
                Tab content for Profile
              </Tab>
            </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ca-grid">
                <div className="ca-left">
                  <CareerSlider />
                </div>
                <div className="ca-right">
                  <div className="ca-con">
                    <h3 className="sec-head">
                      Forge Your <span>Career Path</span> with Us - Discover Your Potential with Our Team!
                    </h3>
                    <h2 class="sub-head">Join a Vibrant Team Pushing the Boundaries of Algorithmic Trading.</h2>
                    <p className="para">
                      If you dream in data, think in algorithms - Algoquant is your playground. 
                      Join our innovative team, unleash your potential in algorithmic and HFT trading, and leave your mark on the financial frontier.
                    </p>
                    <a href="" className="main-btn">
                      <span>Start your journey</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
