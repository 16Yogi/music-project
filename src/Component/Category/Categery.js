// import React from 'react'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import './Categery.css'

export default function Categery() {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <>
        <div className='container-fluid'>
            <div className='container' id="Categery-container">
                <h2 className='text-center'>Shop by category</h2>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12' id="item-wrap">
                        <div className='col' id="categery-item-wrap" data-aos="fade-up">
                            <div className='col'>
                                <img src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                            </div>
                            <div className='col text-center'>
                                <h5>Phones & Accessories</h5>
                                <span>High class, high quality phones at affordable prices</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12' id="item-wrap">
                        <div className='col' id="categery-item-wrap" data-aos="fade-up">
                            <div className='col'>
                                <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                            </div>
                            <div className='col text-center'>
                                <h5>Computer Equipment</h5>
                                <span>All your desktop or laptop needs made available</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12' id="item-wrap">
                        <div className='col' id="categery-item-wrap" data-aos="fade-up">
                            <div className='col'>
                                <img src="https://images.pexels.com/photos/5872834/pexels-photo-5872834.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                            </div>
                            <div className='col text-center'>
                                <h5>miscellaneousitems</h5>
                                <span>We've got more stuff to meet your techie needs</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/"><button className='btn'>Shop All</button></a>
            </div>
        </div>
    </>
    )
}
