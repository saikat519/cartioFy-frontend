import React,{useState,useEffect} from 'react';
import {Card,Container} from 'react-bootstrap'
import karolina from '../../images/karolina.jpg'
import Button from '@material-ui/core/Button';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { useStateValue } from "../../StateProvider"; 

function Products() {
    const [{ user }, dispatch] = useStateValue();
    const addToCart = ()=>{
        dispatch({
          type: "ADD_TO_CART",
          item: {
           name:"test item"
          },
        });
    }
    const signinToPurchase = () =>{
        window.location.href = "/login"
    }

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={karolina} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                ₹179
                </Card.Text>
                {user && <Button
                    variant="contained"
                    style={{backgroundColor:"#fbcc57"}}
                    startIcon={<AddShoppingCartSharpIcon />}
                    onClick={addToCart}
                  >
                   Add to Cart
                  </Button>}
                 </Card.Body>
            </Card>
            <br/>
        </Container>
    )
}

export default Products
