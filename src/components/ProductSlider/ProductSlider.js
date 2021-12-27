import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from '../Products/Products';
import './ProductSlider.css';
import Button from '@mui/material/Button';
import {Row,Col} from 'react-bootstrap'

function ProductSlider(props) {
    const responsive = {

        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1224 },
          items: 4
        },
        desktopmid: {
            breakpoint: { max: 1224, min: 945 },
            items: 3
          },
        tablet: {
          breakpoint: { max: 945, min: 628 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 628, min: 0 },
          items: 1
        }
        
      };
    return (
        <div className='prod-slider'>
            <Row>
                <Col className='d-flex flex-row'><span className='prod-header'>{props.headerLine}</span></Col>
            <Col></Col>
            <Col></Col>
            <Col className='d-flex flex-row-reverse'><Button variant="contained" className='m-3'>VIEW ALL</Button></Col>
            </Row>

            <Carousel responsive={responsive}>
              <Products/>
              <Products/>   
              <Products/>
              <Products/>   
              <Products/>   
              <Products/>   
              <Products/>   
            </Carousel>
        </div>
    )
}

export default ProductSlider;