import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
        <div className='container-fluid' id="footer-container-fluid">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='col'>
                            <h3>Connect with us</h3>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <h6>main office</h6>
                                <span>123 Anywhere St.<br/>Any City, State<br/>Any Country<br/>(123) 456 7890</span>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <h6>social media</h6>
                                <a href='/'>Facebook</a> <br/>
                                <a href='/'>Instagram</a><br/>
                                <a href='/'>Twitter</a><br/>
                            </div>
                        </div>
                        <h5>hello@reallygreatsite.com</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
