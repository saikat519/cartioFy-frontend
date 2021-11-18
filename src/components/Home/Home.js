import React from 'react'
import {Carousel} from 'react-bootstrap'
import img4 from '../../images/img4.jpg'
import img1 from '../../images/headphone.jpg'

function Home() {
    return (
        <div>
          <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      height={400}
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
      height={400}
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
      height={400}
    />
    
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Home
