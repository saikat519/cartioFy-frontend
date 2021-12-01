import React from 'react'
import {Carousel} from 'react-bootstrap'
import karolina from '../../images/karolina.jpg'
import headphone from '../../images/headphone.jpg'

function Home() {
    return (
        <div>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={headphone}
            alt="First slide"
            height={400}
          />
          
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={karolina}
            alt="Second slide"
            height={400}
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={headphone}
            alt="Third slide"
            height={400}
          />
          
        </Carousel.Item>
      </Carousel>
      
    </div>
    )
}

export default Home
