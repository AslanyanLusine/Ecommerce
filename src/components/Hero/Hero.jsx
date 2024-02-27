import React from 'react'
import './Hero.css'
import { FaLongArrowAltRight } from "react-icons/fa";




const Hero = () => {
  return (
    <div className="hero">

        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div>
                <p> new collection for everyone</p>
            </div>
            <div className="hero-latest-button" onClick={()=>alert("hi")}>
                <div>Latest collection</div>
                <FaLongArrowAltRight />     
            </div>
        </div>

        <div className="hero-right">
            <img src={"https://a0.anyrgb.com/pngimg/136/1194/girl-shopping-sleeping-beauty-dynamic-shopping-bag-shopping-girl-girl-silhouette-sexy-girls-fashion-girl-baby-girl.png"} alt=""/>
        </div>
    </div>
  )
}

export default Hero