import React, { useRef, useEffect } from 'react';
import ImageGroup from "./group-img.jpeg"
import ImageParis from "./paris-img.jpg"

export default function ImageToggle() {

  const imagesRef = useRef([]);
  const inputArr = [{ id: 0, name: "group", src: ImageGroup }, { id: 1, name: "paris", src: ImageParis }]

  useEffect(() => {
    imagesRef.current.forEach((singleImageRef) => {
      singleImageRef.style.filter = 'grayscale(100%)';
    })
  }, [])

  const MouseOver = ({ target: { id } }) => {
    imagesRef.current[id].style.filter = 'grayscale(0%)';
  }

  const MouseLeave = () => {
    imagesRef.current.forEach((singleImageRef) => {
      singleImageRef.style.filter = 'grayscale(100%)';
    })
  }

  return (
    <div>
      {inputArr.map((input) => {
        return <img key={input.name} id={input.id} ref={el => imagesRef.current[input.id] = el} src={input.src} alt={input.name} width="400" height="300" onMouseEnter={MouseOver} onMouseLeave={MouseLeave} />
      })}
    </div>
  )
}
