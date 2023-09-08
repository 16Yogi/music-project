// import React from 'react'
import './Banner.css'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []); 
  return (
    <>
       <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12' id="banner-item">
                        <div className='col' id="banner-item-wrap">
                            <h2 data-aos="fade-left">The Westmire</h2>
                            <h2>A56 Headset</h2>
                            <ul className='row list-unstyled'>
                                <li>
                                    <a href='/'><button className='btn'>Buy Now</button></a>
                                </li>
                                <li>
                                   <a href='/'><button className='btn' id="banner-btn-sty">Shop All</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12' id="banner-item">
                        <div className='col'>
                            <img src="https://pngimg.com/uploads/headphones/headphones_PNG7656.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </>
    )
}
