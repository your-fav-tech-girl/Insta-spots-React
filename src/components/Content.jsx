import React from 'react'
import pic1 from "../assets/images/pic1.png"
import pic2 from "../assets/images/pic2.png"
import pic3 from "../assets/images/pic3.png"
import pic4 from "../assets/images/pic4.png"
import pic5 from "../assets/images/pic5.png"
import pic6 from "../assets/images/pic6.png"
import LikeButton from "./LikeButton"


function Content() {
    return (

    <div className='ContentContainer'>

    <div id="ContentTitle">

   <img src={pic1} className="Content-Image" alt="content pic1" />
   <div className="Content-Title">
    <p>Vals Thorens</p>
    <LikeButton />
    </div>
  </div>

    <div id="ContentTitle">
    <img src={pic2} className="Content-Image" alt="content pic2" />
    <div className="Content-Title">
    <p>Restaurant Terrace</p>
     <LikeButton />
    </div>
  </div>

    <div id="ContentTitle">
    <img src={pic3} className="Content-Image" alt="content pic3" />
    <div className="Content-Title">
    <p>An Outdoor cafe</p>
     <LikeButton />
  </div>
  </div>

    <div id="ContentTitle">
    <img src={pic4} className="Content-Image" alt="content pic4" />
    <div className="Content-Title">
    <p>A very long bridge, over the forest</p>
    <LikeButton />
  </div>
  </div>

    <div id="ContentTitle">
    <img src={pic5} className="Content-Image" alt="content pic5" />
    <div className="Content-Title">
    <p>Tunnel with morning light</p>
    <LikeButton />
  </div>
  </div>

    <div id="ContentTitle">
    <img src={pic6} className="Content-Image" alt="content pic6" />
    <div className="Content-Title">
    <p>Mountain house</p>
     <LikeButton />
    </div>
   </div>

  </div>

  );
}

export default Content;