import React, { useState } from 'react'
import Carousel from "react-bootstrap/Carousel";
import { serviceData } from "./../../data";


export default function AboutImgs() {
      const [index, setIndex] = useState(0);
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
      <Carousel
        fade
        activeIndex={index}
        onSelect={handleSelect}
        className="aboutCarousel"
        controls={false}
        interval={3000}
      >
        {serviceData.map((item) => {
          const { id, category, detail } = item;
          return (
            <Carousel.Item className="carouselItem" key={id}>
              <div className="carouselImg">
                <img
                  className="d-block "
                  src={
                    process.env.PUBLIC_URL + `assets/service/service${id}.png`
                  }
                  alt="First slide"
                />
              </div>
              <div className="carouselDesc">
                <h3>{category}</h3>
                <span>{detail}</span>
              </div>
              <Carousel.Caption >

              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
    
}
