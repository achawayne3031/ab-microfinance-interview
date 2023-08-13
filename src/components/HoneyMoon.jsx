import React from 'react'
import honeyMoon from '../assets/images/honey-moon.png'
import '../assets/css/honeymoon.scss'



const HoneyMoon = () => {
  return (
    <div className='honeymoon-wrapper'>
        <div className='honeymoon-content-wrapper'>
            <div>
                <img src={honeyMoon} className='img-fluid' alt="" />
            </div>

            <div>
                <p className='honeymoon-top-title'>Honeymoon Specials</p>
                <h2 className='honeymoon-top-text'>Our Romantic Tropical Destinations</h2>
                <h6 className='honeymoon-text'>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</h6>
                <button className='view-btn'>View Packages</button>
            </div>
        </div>
    </div>
  )
}

export default HoneyMoon