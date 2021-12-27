import React from 'react'
import {Carousel, Container} from 'react-bootstrap'
import karolina from '../../images/karolina.jpg'
import headphone from '../../images/headphone.jpg'
import Productslider from '../ProductSlider/ProductSlider'
import './Home.css'

function Home(props) {
    return (
      <div>
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
        <br/><br/>
        <div className='products-slider'>
          <Productslider />
        </div>
      
        <br/>
        <br/>
    </div>
    )
}

export default Home
