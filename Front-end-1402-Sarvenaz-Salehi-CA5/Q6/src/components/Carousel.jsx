import React from "react";
import { useState } from 'react'

import './Carousel.css'
function Carousel(props) {
    const [ImageKey, setImageKey] = useState(1)
    function handleImageLoad(event) {
        // Get the key of the loaded image
        const key = event.target.getAttribute('data-key');
        // Save the key in state
        setImageKey(key);
      }
    
    return (
      <div className="carousel">
        <div className="left" onClick={()=>(setImageKey((props.images.length >  ImageKey ? ImageKey + 1 : props.images[0].key)))}>
          <button>prev</button>
        </div>

        <div className="carouselContainer" >
        {props.images.map(image => (
            (image.key === ImageKey ? <img key={image.key} src={image.src} alt={image.alt} className="slide"/> : "")
          ))}
          
          </div>
          
          <div className="right" onClick={()=>(setImageKey((props.images[0].key  === ImageKey ? props.images[props.images.length - 1].key : ImageKey - 1)))}>
          <button>next</button>
          </div>
          
    </div>
    )
}

export default Carousel;