
import React from 'react';
import ImageGroup from "./group-img.jpeg"
import ImageParis from "./paris-img.jpg"

export default function ImageToggle() {

  const MouseOver = (event) => {
    event.target.style.filter = 'grayscale(0%)';
  }

  const MouseLeave = (event) => {
    event.target.style.filter = 'grayscale(100%)';
  }

  return (
    <div>
      <img src={ImageGroup} alt="group" width="400" height="300" onMouseEnter={MouseOver} onMouseLeave={MouseLeave} />
      <img src={ImageParis} alt="paris" width="400" height="300" onMouseEnter={MouseOver} onMouseLeave={MouseLeave} />
    </div>
  )
}