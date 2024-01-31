import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const ShowCarousal = (p) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        {p.imgData.map((item,index) => {
            return (
                <Carousel.Item>
                {item.show.image && <img
                    className="d-block w-100"
                    src={item.show.image.original}
                    alt="First slide"
                    style={{objectFit:'cover', objectPosition:'center', width:'100%', height:'50px'}}
                />}
                </Carousel.Item>
            )
        })}
  </Carousel>
  )
}

export default ShowCarousal
