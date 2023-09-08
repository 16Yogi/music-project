import React from 'react'
import './Support.css'
export default function Support() {
  return (
    <>
        <div className='container-fluid' id="support-c-f">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12' id="support-wrap">
                        <div className='col'>
                            <h3>Expert Support</h3>
                            <p>Faulty phone battery? Slow laptop? We have in-house tech experts who can assist you.</p>
                            <p>Visit us in stores!</p>
                        </div>
                        <div className='col'>
                            <h6>our locations</h6>
                            <span>123 Anywhere St. <br/>Any City, State, Any Country<br/>(123) 456 7890</span>
                            <span>123 Anywhere St. <br/>Any City, State, Any Country<br/>(123) 456 7890</span>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12' id="support-wrap">
                        <div className='col'>
                            <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
