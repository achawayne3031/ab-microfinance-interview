

import React from 'react'
import Marquee from "react-fast-marquee";
import kylie from '../assets/images/kylie.jpg'
import './logo.scss'
import Image from 'react-bootstrap/Image';
import airbnb from '../assets/images/airbnb.png'
import emirates from '../assets/images/emirates.png'
import swiss from '../assets/images/swiss.png'
import trivago from '../assets/images/trivago.png'
import turkish from '../assets/images/turkish.png'





function Logos() {
  return (

    <> 
       
       <div>
            <Marquee>
                <div className='logo-wrapper'>
                    <div>
                        <img src={airbnb} alt="" />
                    </div>
                    <div>
                        <img src={emirates} alt="" />
                    </div>
                    <div>
                        <img src={swiss} alt="" />
                    </div>

                    <div>
                        <img src={trivago} alt="" />
                    </div>
                    <div>
                        <img src={turkish} alt="" />
                    </div>
                    <div>
                        <img src={swiss} alt="" />
                    </div>
                </div>
              
            </Marquee>
       </div>

        
    </>

   
   
  )
}

export default Logos

