import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
        <div className='container-fluid'>
            <div className='container' id="about-container">
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='col about-item' id="about-item">
                            <h3>All-new technology</h3>
                            <p>News write-ups offer a great way to let clients know about new products and services, events, awards, and more. News write-ups offer a great way to let clients know about new products and services, events, awards, and more.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='col' id="about-item">
                            {/* <img src="https://cdni.iconscout.com/illustration/premium/thumb/boy-listening-music-2527775-2114678.png" alt=""/> */}
                            <img src="https://img.freepik.com/free-photo/young-man-blue-t-shirt-with-beard-listening-music-through-black-headphones_140725-12717.jpg?size=626&ext=jpg&ga=GA1.1.1191489814.1693387989&semt=ais" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
